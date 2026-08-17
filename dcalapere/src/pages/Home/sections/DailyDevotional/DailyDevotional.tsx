import { useEffect, useState } from "react";
import { Volume2, Square } from "lucide-react";
import { theme } from "../../../../styles/theme";
import {
  DevotionalBgColor,
  A,
  DevotionalContent,
  SectionTitle,
  SectionSubTitle,
} from "./DailyDevotional.styles";
import {
  getLatestDevotional,
  type Devotional,
} from "../../../../services/devotionals.service";

const DailyDevotional = () => {
  const [messages, setMessages] = useState<Devotional[]>([]);
  const [showFullText, setShowFullText] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch the latest devotional from Supabase when the component mounts
  useEffect(() => {
    const loadDevotional = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const data = await getLatestDevotional();
        setMessages(data ? [data] : []);
      } catch (error) {
        console.error(error);
        setError("Unable to load today's devotional.");
      } finally {
        setIsLoading(false);
      }
    };

    loadDevotional();
  }, []);

  // Converts Bible book abbreviations into full names for smoother speech synthesis
  const speakText = (text: string) => {
    // stop current speech before starting another
    window.speechSynthesis.cancel();

    // Maps common Bible abbreviations to their full names
    const bibleMap = {
      gen: "Genesis",
      ex: "Exodus",
      lev: "Leviticus",
      num: "Numbers",
      deut: "Deuteronomy",
      josh: "Joshua",
      judg: "Judges",
      ruth: "Ruth",
      "1 sam": "First Samuel",
      "2 sam": "Second Samuel",
      "1 kings": "First Kings",
      "2 kings": "Second Kings",
      "2kings": "Second Kings",
      "1 chronicles": "First Chronicle",
      "2 chronicles": "Second Chronicle",
      ezra: "Ezra",
      nehemiah: "Nehemiah",
      esther: "Esther",
      job: "Job",
      ps: "Psalms",
      prov: "Proverbs",
      eccl: "Ecclesiastes",
      isa: "Isaiah",
      jer: "Jeremiah",
      lam: "Lamentation",
      ezek: "Ezekiel",
      dan: "Daniel",
      hos: "Hosea",
      joel: "Joel",
      amos: "Amos",
      zech: "Zechariah",
      mal: "Malachi",
      matt: "Matthew",
      mark: "Mark",
      luke: "Luke",
      jn: "John",
      acts: "Acts",
      rom: "Romans",
      cor: "Corinthians",
      gal: "Galatians",
      eph: "Ephesians",
      phil: "Philippians",
      col: "Colossians",
      thess: "Thessalonians",
      tim: "Timothy",
      tit: "Titus",
      phlm: "Philemon",
      heb: "Hebrews",
      james: "James",
      "1pet": "First Peter",
      "2pet": "Second Peter",
      "1jn": "First John",
      "2jn": "Second John",
      "3jn": "Third John",
      rev: "Revelation",
    };

    // Replaces abbreviated Bible book names with their full equivalents
    const expandBibleText = (text: string) => {
      let result = text.toLowerCase();

      Object.entries(bibleMap).forEach(([shortForm, fullName]) => {
        const regex = new RegExp(`\\b${shortForm}\\b`, "gi");
        result = result.replace(regex, fullName);
      });

      return result;
    };

    const cleanedBibleText = expandBibleText(text);

    // Prepare the devotional text for natural speech narration
    const cleanedText = cleanedBibleText
      .replace(/DOMINION MANDATE DAILY DEVOTIONAL\s*/i, "")
      .replace(/(\d+):(\d+)/g, "$1 verse $2")
      .replace(/([A-Z]+,\s[A-Z]+\s\d{1,2},\s\d{4})\n\n/g, "$1 ")
      .replace(/\n\n([A-Z\s,'-]+)\n\n/, " $1 ")
      .replace(/\((.*?)\)/g, ", $1 , ")
      .replace(/:/g, ", ")
      .replace(/\n\n/g, ". ")
      .replace(/\n/g, ", ")
      .replace(/-/g, " to ")
      .replace(/\bNLT\b/g, "N. L. T.")
      .replace(/\bKJV\b/g, "K. J. V.")
      .replace(/\bNIV\b/g, "N. I. V.")
      .replace(/\s{2,}/g, " ")
      .trim();

    // Split long text into smaller chunks for more reliable speech playback
    const chunks = cleanedText.match(/[^.!?]+[.!?]+/g) || [cleanedText];

    // Select the best available English voice
    const voices = window.speechSynthesis.getVoices();

    const voice =
      voices.find((v) => v.name === "Google UK English Female") ||
      voices.find((v) => v.lang === "en-GB") ||
      voices[0];

    setIsSpeaking(true);

    // Read each chunk sequentially using the browser's Speech Synthesis API
    chunks.forEach((chunk, index) => {
      const speech = new SpeechSynthesisUtterance(chunk);

      speech.voice = voice;
      speech.lang = "en-GB";
      speech.rate = 0.9;

      speech.onend = () => {
        if (index === chunks.length - 1) {
          setIsSpeaking(false);
        }
      };

      speech.onerror = (e) => {
        console.log(e);
        setIsSpeaking(false);
      };

      window.speechSynthesis.speak(speech);
    });
  };

  // Stop speech playback and reset the speaking state
  const stopSpeech = () => {
    window.speechSynthesis.cancel();
    setIsSpeaking(false);
  };

  if (isLoading) {
    return (
      <DevotionalBgColor>
        <DevotionalContent>
          <p style={{ textAlign: "center", padding: "10rem 2rem" }}>
            Loading devotional...
          </p>
        </DevotionalContent>
      </DevotionalBgColor>
    );
  }

  if (error) {
    return (
      <DevotionalBgColor>
        <DevotionalContent>
          <p style={{ textAlign: "center", padding: "10rem 2rem" }}>{error}</p>
        </DevotionalContent>
      </DevotionalBgColor>
    );
  }

  if (messages.length === 0) {
    return (
      <DevotionalBgColor>
        <DevotionalContent>
          <p style={{ textAlign: "center", padding: "10rem 2rem" }}>
            No devotional available right now.
          </p>
        </DevotionalContent>
      </DevotionalBgColor>
    );
  }

  return (
    <>
      {/* Display the latest devotional */}
      {messages.map((msg) => {
        // Split the devotional into sections using blank lines
        const lines = msg?.text.split("\n\n") || [];

        // Extract the main devotional sections
        const fullDate = lines[1]; // FRIDAY, MAY 8, 2026
        const title = lines[2]; // ABBA FATHER...
        const reading = lines[3]; // BIBLE READING...
        const verse = lines[4]; // "And because you..

        const body = lines.slice(5).join("\n\n");

        // Normalize all line endings
        const normalizedBody = body.replace(/\r\n/g, "\n");

        // Split into paragraphs while removing empty ones
        const bodyParagraphs = normalizedBody
          .split(/\n{2,}/)
          .map((paragraph) => paragraph.trim())
          .filter(Boolean);

        // Show a short preview of the devotional body
        const previewText = showFullText
          ? bodyParagraphs
          : bodyParagraphs.slice(0, 1);

        // Extract the day of the month for the date badge
        const dayNumber = fullDate.match(/\d+/)?.[0] || "";

        console.log(lines);
        console.log(body);
        console.log(bodyParagraphs);

        return (
          <DevotionalBgColor>
            {/* Daily devotional heading */}
            <div style={{ textAlign: "center", color: theme.colors.white }}>
              <SectionTitle style={{ fontWeight: "bold" }}>
                Daily Devotional
              </SectionTitle>
              <SectionSubTitle>Start your day with God's word</SectionSubTitle>
            </div>

            {/* Devotional content card */}
            <DevotionalContent key={msg.id}>
              {/* Devotional title and date */}
              <div className="devTitle">
                <p className="devDate">{dayNumber}</p>
                <div>
                  <p className="devFullDateMobile">{fullDate}</p>

                  <p style={{ fontWeight: "bold" }}>{title}</p>
                  <p className="devFullDate" style={{ fontSize: "0.9rem" }}>
                    {fullDate}
                  </p>
                </div>
              </div>

              {/* Bible reading reference */}
              <div>
                <p>{reading}</p>
              </div>

              {/* Key scripture verse */}
              <div style={{ fontWeight: "bold" }}>{verse}</div>

              {/* Devotional preview */}
              <div>
                {previewText.map((paragraph: string, index: number) => (
                  <p
                    key={index}
                    style={{
                      marginBottom: "0.7rem",
                    }}
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Link to the full devotional on Telegram */}
              <div>
                <A>
                  <span
                    className="readMore"
                    onClick={() => setShowFullText(!showFullText)}
                    style={{ color: theme.colors.primary }}
                  >
                    {showFullText ? "Read Less" : "Read More..."}
                  </span>
                </A>
              </div>

              {/* Audio controls */}
              <div className="devButton">
                {/* Start browser text-to-speech */}
                <A
                  className="devButtonListen"
                  onClick={() => speakText(msg.text)}
                >
                  <Volume2 />
                  <span style={{ fontWeight: "bold" }}>
                    {" "}
                    {isSpeaking ? "Speaking..." : "Listen"}
                  </span>
                </A>

                {/* Stop text-to-speech */}
                <A className="devButtonShare" onClick={stopSpeech}>
                  <Square />
                  <span style={{ fontWeight: "Bold" }}>Stop</span>
                </A>
              </div>
            </DevotionalContent>
          </DevotionalBgColor>
        );
      })}
    </>
  );
};

export default DailyDevotional;
