import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getSermonsSection } from "../services/sermons.service";
import type { SermonsType } from "../pages/Sermons/SermonsPage.types.ts";
import { getYoutubeId } from "../utils/youtube.ts";
import { getYoutubeThumbnail } from "../utils/youtubeThumbnail.ts";
import readingBible from "../images/reading_bible.jpg";
import { motion } from "framer-motion";
import { Play } from "lucide-react";

import {
  SermonBgColor,
  SectionTitle,
  SectionSubTitle,
  SermonBox,
  SermonBoxContainer,
  SermonBoxText,
  PrimaryColor,
  A,
} from "./SermonSection";

const SermonSection = () => {
  const [sermons, setSermons] = useState<SermonsType[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchSermons = async () => {
      const data = await getSermonsSection();
      setSermons(data);
    };

    fetchSermons();
  }, []);

  const formatTheme = (text: string) => text.toUpperCase();

  const toTitleCase = (text: string) =>
    text.replace(
      /\w\S*/g,
      (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(),
    );

     const formatDate = (date: string) => {
       return new Date(date).toLocaleDateString("en-US", {
         year: "numeric",
         month: "long",
         day: "numeric",
       });
     };

  return (
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

        <SermonBoxContainer>
          {sermons.map((sermon) => {
            const videoId = getYoutubeId(sermon.youtube_url);

            return (
              <SermonBox key={sermon.id}>
                <div className="sermon-image-wrapper">
                  <img
                    src={
                      sermon.youtube_url
                        ? getYoutubeThumbnail(sermon.youtube_url)
                        : readingBible
                    }
                    alt={sermon.title}
                    className="sermonImg"
                  />

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
                        <div
                          style={{ display: "flex" }}
                          onClick={() => navigate(`/sermons/${sermon.id}`)}
                        >
                          <Play size={30} color={`${PrimaryColor}`} />
                        </div>
                      </motion.div>
                    </motion.div>
                  )}
                </div>

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

        <A to="/sermons">
          <div className="allSermonButton">View All Sermons</div>
        </A>
      </div>
    </SermonBgColor>
  );
};

export default SermonSection;
