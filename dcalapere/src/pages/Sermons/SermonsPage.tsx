import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../../layouts/NavBar.tsx";
import Footer from "../../layouts/Footer.tsx";
import { getSermonsSection } from "../../services/sermons.service";
import type { SermonsType } from "./SermonsPage.types.ts";
import { getYoutubeId } from "../../utils/youtube.ts";
import { getYoutubeThumbnail } from "../../utils/youtubeThumbnail.ts";
import readingBible from "../../images/reading_bible.jpg";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import {
  LastestSermon,
  RecentSermon,
  SermonBox,
  SermonBoxText,
  PrimaryColor,
  WhiteColor,
  A,
} from "../Sermons/SermonsPage.styles.ts";

const SermonsPage = () => {
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

  const latestSermon = sermons[0];
  const recentSermons = sermons.slice(1);

  const latestVideoId = latestSermon
    ? getYoutubeId(latestSermon.youtube_url)
    : null;

  return (
    <>
      <NavBar />
      <main>
        <LastestSermon>
          <div className="sermonHeader">
            <p className="header">Sermons</p>
            <p>
              Missed a Sunday? Catch up on our latest messages or explore our
              sermon archive.
            </p>
          </div>

          <p className="latestMessage">Latest Message</p>

          {latestSermon && (
            <div className="latestSermon">
              <div className="full">
                <div className="sermonDetail">
                  <div className="playContainer">
                    <img
                      className="eventImageSidebar"
                      src={
                        latestSermon.youtube_url
                          ? getYoutubeThumbnail(latestSermon.youtube_url)
                          : readingBible
                      }
                      alt={latestSermon.title}
                    />

                    {latestVideoId && (
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
                            onClick={() =>
                              navigate(`/sermons/${latestSermon.id}`)
                            }
                          >
                            <Play size={30} color={`${PrimaryColor}`} />
                          </div>
                        </motion.div>
                      </motion.div>
                    )}
                  </div>

                  <div>
                    <div className="sermonIndivDetail">
                      <p className="sermonTheme">
                        {formatTheme(latestSermon.theme)}
                      </p>
                    </div>

                    <p className="sermonTitle">
                      {toTitleCase(latestSermon.title)}
                    </p>

                    <div className="sermonIndivDetail">
                      <p className="sermonPreacher">
                        {toTitleCase(latestSermon.preacher)}
                      </p>
                    </div>

                    <div className="sermonIndivDetail">
                      <p className="sermonDate">
                        {formatDate(latestSermon.date)}
                      </p>
                    </div>

                    <div className="sermonIndivDetail">
                      <p
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "0.2rem",
                          background: PrimaryColor,
                          color: WhiteColor,
                          padding: "0.3rem 1rem",
                          borderRadius: "1rem",
                          fontSize: "0.8rem",
                          fontWeight: 600,
                          cursor: "pointer",
                        }}
                        onClick={() => navigate(`/sermons/${latestSermon.id}`)}
                      >
                        <Play size={15} color={`${WhiteColor}`} />
                        Watch
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </LastestSermon>

        <RecentSermon>
          <p className="recentSermon">Recent Sermon</p>
          {recentSermons.map((sermon) => {
            const videoId = getYoutubeId(sermon.youtube_url);

            return (
              <SermonBox>
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
                  <div>
                    <p
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.2rem",
                        color: PrimaryColor,
                        fontSize: "0.8rem",
                        fontWeight: 600,
                      }}
                      onClick={() => navigate(`/sermons/${sermon.id}`)}
                    >
                      <Play size={15} color={`${PrimaryColor}`} />
                      Watch
                    </p>
                  </div>
                </SermonBoxText>
              </SermonBox>
            );
          })}

          <A to="/sermons">
            <div className="allSermonButton">Load More Sermons</div>
          </A>
        </RecentSermon>
      </main>
      <Footer />
    </>
  );
};

export default SermonsPage;
