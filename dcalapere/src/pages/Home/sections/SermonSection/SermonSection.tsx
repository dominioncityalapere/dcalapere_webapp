import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getSermonsSection } from "../../../../services/sermons.service.ts";
import type { SermonsType } from "../../../Sermons/SermonsPage.types.ts";
import { getYoutubeId } from "../../../../utils/youtube.ts";
import { getYoutubeThumbnail } from "../../../../utils/youtubeThumbnail.ts";
import readingBible from "../../../../assets/images/reading_bible.jpg";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { theme } from "../../../../styles/theme";
import {
  SermonBgColor,
  SectionTitle,
  SectionSubTitle,
  SermonBox,
  SermonBoxContainer,
  SermonBoxText,
  A,
} from "./SermonSection.styles.ts";

const SermonSection = () => {
  const [sermons, setSermons] = useState<SermonsType[]>([]);
  const navigate = useNavigate();

  // Fetch the latest sermons for the homepage
  useEffect(() => {
    const fetchSermons = async () => {
      const data = await getSermonsSection();
      setSermons(data);
    };

    fetchSermons();
  }, []);

  // Display the sermon theme in uppercase
  const formatTheme = (text: string) => text.toUpperCase();

  // Convert text to title case for consistent display
  const toTitleCase = (text: string) =>
    text.replace(
      /\w\S*/g,
      (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(),
    );

  // Format sermon dates into a readable format
  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    // Recent sermons section
    <SermonBgColor>
      <div>
        <div>
          <SectionTitle style={{ fontWeight: "bold" }}>
            Recent Sermons
          </SectionTitle>
          <SectionSubTitle>
            Missed a Sunday? Catch up on our latest messages
          </SectionSubTitle>
        </div>

        {/* Sermon cards */}
        <SermonBoxContainer>
          {/* Individual sermon card */}
          {sermons.map((sermon) => {
            // Extract the YouTube video ID for playback
            const videoId = getYoutubeId(sermon.youtube_url);

            return (
              <SermonBox key={sermon.id}>
                {/* Sermon thumbnail */}
                <div
                  className="sermon-image-wrapper"
                  onClick={() => navigate(`/sermons/${sermon.id}`)}
                >
                  {/* Use the YouTube thumbnail when available, otherwise display the default image */}
                  <img
                    src={
                      sermon.youtube_url
                        ? getYoutubeThumbnail(sermon.youtube_url)
                        : readingBible
                    }
                    alt={sermon.title}
                    className="sermonImg"
                  />

                  {/* Show the play button only for sermons with a valid YouTube video */}
                  {videoId && (
                    <motion.div
                      className="videoOverlay"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      whileTap={{ opacity: 1 }}
                      transition={{ duration: 0.25 }}
                    >
                      <motion.div
                        initial={{ scale: 0.8 }}
                        whileHover={{ scale: 1 }}
                        transition={{ duration: 0.2 }}
                        className="playButton"
                      >
                        {/* Navigate to the sermon details page */}
                        <div style={{ display: "flex" }}>
                          <Play size={30} color={`${theme.colors.primary}`} />
                        </div>
                      </motion.div>
                    </motion.div>
                  )}
                </div>

                {/* Sermon information */}
                <SermonBoxText>
                  <p className="sermonTheme">{formatTheme(sermon.theme)}</p>
                  <p className="sermonTitle">{toTitleCase(sermon.title)}</p>
                  <div className="sermonPreacher">
                    <p>{toTitleCase(sermon.preacher)}</p>
                    <p>{formatDate(sermon.date)}</p>
                  </div>
                </SermonBoxText>
              </SermonBox>
            );
            console.log(getYoutubeThumbnail(sermon.youtube_url));
          })}
        </SermonBoxContainer>

        {/* View all sermons */}
        <A to="/sermons">
          <div className="allSermonButton">View All Sermons</div>
        </A>
      </div>
    </SermonBgColor>
  );
};

export default SermonSection;
