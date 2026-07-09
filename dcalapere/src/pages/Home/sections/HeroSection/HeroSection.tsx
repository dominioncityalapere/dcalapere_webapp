import { MoveDown, Play } from "lucide-react";
import { motion } from "motion/react";
import { theme } from "../../../../styles/theme";

import {
  BgImage,
  OverlayBgImage,
  HeroContent,
  HeroButton,
  HeroPlanButton,
  HeroGiveButton,
  HeroH1,
  HeroP,
  ThisWeek,
  ThisWeekTime,
  MoveDownArrow,
  A,
} from "./HeroSection.styles.ts";

const HeroSection = () => {
  // Smoothly scroll to the next section of the homepage
  const scrollToNext = (): void => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* Hero section */}
      <BgImage>
        {/* Background overlay */}
        <OverlayBgImage></OverlayBgImage>
        <HeroContent>
          {/* Welcome message */}
          <div>
            <HeroH1>
              <p style={{ color: theme.colors.white }}>
                Welcome to Dominion City Church Alapere
              </p>
            </HeroH1>
            <HeroP
              style={{
                color: theme.colors.white,
              }}
            >
              Raising leaders that transform society.
            </HeroP>
          </div>
          {/* Hero action buttons */}
          <HeroButton>
            {/* Link to the Plan Your Visit page */}
            <A to="/plan">
              <HeroPlanButton
                style={{
                  backgroundColor: theme.colors.primary,
                  color: theme.colors.white,
                  borderRadius: "3rem",
                }}
              >
                Plan Your Visit
              </HeroPlanButton>
            </A>

            {/* Watch live button */}
            <A to="">
              <HeroGiveButton
                style={{
                  border: `0.1rem solid ${theme.colors.white}`,
                  borderRadius: "3rem",
                  color: theme.colors.white,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.5rem",
                }}
              >
                <Play style={{ width: "1.5rem" }} /> Watch Live
              </HeroGiveButton>
            </A>
          </HeroButton>

          {/* Weekly service schedule */}
          <ThisWeek>
            <p className="thisWeekTitle">Join Us This Week</p>

            <ThisWeekTime>
              <div>
                <p className="thisWeekDay">Sunday</p>
                <p className="thisWeekEvent">Sunday Service</p>
                <p className="thisWeekTime">8:00 AM - 11:30 AM</p>
              </div>

              <div>
                <p className="thisWeekDay">Wednesday</p>
                <p className="thisWeekEvent">Midweek Service</p>
                <p className="thisWeekTime">6:00 PM - 8:00 PM</p>
              </div>

              <div>
                <p className="thisWeekDay">Friday</p>
                <p className="thisWeekEvent">Friday Meeting</p>
                <p className="thisWeekTime">6:30 PM - 8:30 PM</p>
              </div>
            </ThisWeekTime>
          </ThisWeek>
        </HeroContent>

        {/* Scroll indicator */}
        <MoveDownArrow onClick={scrollToNext}>
          {/* Animated arrow */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <MoveDown
              style={{ color: theme.colors.white, cursor: "pointer" }}
            />
          </motion.div>
        </MoveDownArrow>
      </BgImage>
    </>
  );
};

export default HeroSection;
