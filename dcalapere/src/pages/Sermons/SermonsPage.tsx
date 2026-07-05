import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../../layouts/NavBar.tsx";
import Footer from "../../layouts/Footer.tsx";
import { getSermonsPage } from "../../services/sermons.service";
import type { SermonsType } from "./SermonsPage.types.ts";
import { getYoutubeId } from "../../utils/youtube.ts";
import { getYoutubeThumbnail } from "../../utils/youtubeThumbnail.ts";
import readingBible from "../../assets/images/reading_bible.jpg";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { theme } from "../../styles/theme";
import {
  SermonContainer,
  LastestSermon,
  RecentSermon,
  SermonBox,
  SermonBoxText,
} from "../Sermons/SermonsPage.styles.ts";

const SermonsPage = () => {
  // Sermon data and the number of sermons currently displayed
  const [sermons, setSermons] = useState<SermonsType[]>([]);
  const [visibleCount, setVisibleCount] = useState(4);

  const navigate = useNavigate();

  // Fetch all sermons when the page loads
  useEffect(() => {
    const fetchSermons = async () => {
      const data = await getSermonsPage();
      setSermons(data);
    };

    fetchSermons();
  }, []);

  // Convert sermon themes to uppercase for consistent display
  const formatTheme = (text: string) => text.toUpperCase();

  // Convert text to title case for titles and preacher names
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

  // Separate the latest sermon from the remaining sermons
  const latestSermon = sermons[0];
  const recentSermons = sermons.slice(1);

  // Extract the YouTube video ID for the latest sermon
  const latestVideoId = latestSermon
    ? getYoutubeId(latestSermon.youtube_url)
    : null;

  return (
    <>
      <NavBar />
      <main>
        <SermonContainer>
          {/* Page heading */}
          <div className="sermonHeader">
            <p className="header">Sermons</p>
            <p>
              Missed a Sunday? Catch up on our latest messages or explore our
              sermon archive.
            </p>
          </div>

          <div className="sermonsWrapper">
            {/* Featured latest sermon */}
            <LastestSermon>
              <p className="latestMessage">Latest Message</p>
              {latestSermon && (
                <div className="latestSermon">
                  <div className="full">
                    <div className="sermonDetail">
                      {/* Navigate to the sermon details page */}
                      <div
                        className="playContainer"
                        onClick={() => navigate(`/sermons/${latestSermon.id}`)}
                      >
                        {/* Display the sermon thumbnail or a fallback image */}
                        <img
                          className="eventImageSidebar"
                          src={
                            latestSermon.youtube_url
                              ? getYoutubeThumbnail(latestSermon.youtube_url)
                              : readingBible
                          }
                          alt={latestSermon.title}
                        />

                        {/* Show a play overlay only for valid YouTube videos */}
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
                              <div style={{ display: "flex" }}>
                                <Play
                                  size={30}
                                  color={`${theme.colors.primary}`}
                                />
                              </div>
                            </motion.div>
                          </motion.div>
                        )}
                      </div>

                      {/* Latest sermon details */}
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
                          {/* Navigate to watch the latest sermon */}
                          <p
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: "0.2rem",
                              background: theme.colors.primary,
                              color: theme.colors.white,
                              padding: "0.3rem 1rem",
                              borderRadius: "1rem",
                              fontSize: "0.8rem",
                              fontWeight: 600,
                              cursor: "pointer",
                            }}
                            onClick={() =>
                              navigate(`/sermons/${latestSermon.id}`)
                            }
                          >
                            <Play size={15} color={`${theme.colors.white}`} />
                            Watch
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </LastestSermon>

            {/* Recent sermons section */}
            <RecentSermon>
              <p className="recentSermonHeader">Recent Sermon</p>

              {/* Display recent sermons in a responsive grid */}
              <div className="recentSermon">
                {recentSermons.slice(0, visibleCount).map((sermon) => {
                  // Extract the YouTube video ID for each sermon
                  const videoId = getYoutubeId(sermon.youtube_url);

                  return (
                    <SermonBox key={sermon.id}>
                      <div className="sermonBox">
                        {/* Navigate to the selected sermon */}
                        <div
                          className="sermon-image-wrapper"
                          onClick={() => navigate(`/sermons/${sermon.id}`)}
                        >
                          {/* Display the sermon thumbnail or a fallback image */}
                          <img
                            src={
                              sermon.youtube_url
                                ? getYoutubeThumbnail(sermon.youtube_url)
                                : readingBible
                            }
                            alt={sermon.title}
                            className="sermonImg"
                          />

                          {/* Show a play overlay only for valid YouTube videos */}
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
                                <div style={{ display: "flex" }}>
                                  <Play
                                    size={30}
                                    color={`${theme.colors.primary}`}
                                  />
                                </div>
                              </motion.div>
                            </motion.div>
                          )}
                        </div>

                        {/* Sermon information */}
                        <SermonBoxText>
                          <p className="sermonTheme">
                            {formatTheme(sermon.theme)}
                          </p>
                          <p className="sermonTitle">
                            {toTitleCase(sermon.title)}
                          </p>
                          <div className="sermonPreacher">
                            <p>{toTitleCase(sermon.preacher)}</p>
                            <p>{formatDate(sermon.date)}</p>
                          </div>
                          <div>
                            {/* Navigate to the sermon details page */}
                            <p
                              style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "0.2rem",
                                color: theme.colors.primary,
                                fontSize: "0.8rem",
                                fontWeight: 600,
                                cursor: "pointer",
                                width: "fit-content",
                              }}
                              onClick={() => navigate(`/sermons/${sermon.id}`)}
                            >
                              <Play
                                size={15}
                                color={`${theme.colors.primary}`}
                              />
                              Watch
                            </p>
                          </div>
                        </SermonBoxText>
                      </div>
                    </SermonBox>
                  );
                })}
              </div>

              {/* Load the next row of sermons */}
              {visibleCount < recentSermons.length && (
                // Show the button only when more sermons are available
                <p
                  className="loadMoreButton"
                  onClick={() => setVisibleCount((prev) => prev + 4)}
                >
                  <div className="allSermonButton">Load More Sermons</div>
                </p>
              )}
            </RecentSermon>
          </div>
        </SermonContainer>
      </main>
      <Footer />
    </>
  );
};

export default SermonsPage;
