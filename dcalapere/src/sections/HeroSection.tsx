import { MoveDown, Play } from "lucide-react";
import { motion } from "motion/react";
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
  TextColorW,
  PrimaryColor,
  A,
} from "./HeroSection";

const HeroSection = () => {
  const scrollToNext = (): void => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <>
      <BgImage>
        <OverlayBgImage></OverlayBgImage>
        <HeroContent>
          <div>
            <HeroH1>
              <p style={{ color: TextColorW }}>
                Welcome to Dominion City Church Alapere
              </p>
            </HeroH1>
            <HeroP
              style={{
                color: TextColorW,
              }}
            >
              Raising leaders that transform society.
            </HeroP>
          </div>
          <HeroButton>
            <A href="#">
              <HeroPlanButton
                style={{
                  backgroundColor: PrimaryColor,
                  color: TextColorW,
                  borderRadius: "3rem",
                }}
              >
                Plan Your Visit
              </HeroPlanButton>
            </A>

            <A href="#">
              <HeroGiveButton
                style={{
                  border: `0.1rem solid ${TextColorW}`,
                  borderRadius: "3rem",
                  color: TextColorW,
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

        <MoveDownArrow onClick={scrollToNext}>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <MoveDown style={{ color: TextColorW, cursor: "pointer" }} />
          </motion.div>
        </MoveDownArrow>
      </BgImage>
    </>
  );
};

export default HeroSection;
