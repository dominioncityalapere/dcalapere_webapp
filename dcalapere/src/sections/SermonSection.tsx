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
          <SermonBox>
            <div className="sermon-image-wrapper">
              <img
                src={readingBible}
                alt="Reading Bible"
                className="sermonImg"
              />

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
                  <Play size={40} color={`${PrimaryColor}`} />
                </motion.div>
              </motion.div>
            </div>

            <SermonBoxText>
              <p className="sermonTheme">Faith Over Fear</p>
              <p className="sermonTitle">Finding Peace in Uncertain Times</p>
              <div className="sermonPreacher">
                <p>Pastor James Thompson</p>
                <p>March 3, 2025</p>
              </div>
            </SermonBoxText>
          </SermonBox>

          <SermonBox>
            <div className="sermon-image-wrapper">
              <img
                src={readingBible}
                alt="Reading Bible"
                className="sermonImg"
              />

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
                  <Play size={40} color={`${PrimaryColor}`} />
                </motion.div>
              </motion.div>
            </div>

            <SermonBoxText>
              <p className="sermonTheme">Faith Over Fear</p>
              <p className="sermonTitle">Finding Peace in Uncertain Times</p>
              <div className="sermonPreacher">
                <p>Pastor James Thompson</p>
                <p>March 3, 2025</p>
              </div>
            </SermonBoxText>
          </SermonBox>

          <SermonBox>
            <div className="sermon-image-wrapper">
              <img
                src={readingBible}
                alt="Reading Bible"
                className="sermonImg"
              />

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
                  <Play size={40} color={`${PrimaryColor}`} />
                </motion.div>
              </motion.div>
            </div>

            <SermonBoxText>
              <p className="sermonTheme">Faith Over Fear</p>
              <p className="sermonTitle">Finding Peace in Uncertain Times</p>
              <div className="sermonPreacher">
                <p>Pastor James Thompson</p>
                <p>March 3, 2025</p>
              </div>
            </SermonBoxText>
          </SermonBox>

          <SermonBox>
            <div className="sermon-image-wrapper">
              <img
                src={readingBible}
                alt="Reading Bible"
                className="sermonImg"
              />

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
                  <Play size={40} color={`${PrimaryColor}`} />
                </motion.div>
              </motion.div>
            </div>

            <SermonBoxText>
              <p className="sermonTheme">Faith Over Fear</p>
              <p className="sermonTitle">Finding Peace in Uncertain Times</p>
              <div className="sermonPreacher">
                <p>Pastor James Thompson</p>
                <p>March 3, 2025</p>
              </div>
            </SermonBoxText>
          </SermonBox>
        </SermonBoxContainer>

        <A>
          <div className="allSermonButton">View All Sermons</div>
        </A>
      </div>
    </SermonBgColor>
  );
};

export default SermonSection;
