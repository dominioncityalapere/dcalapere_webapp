import dc_logo_white from "../../../../assets/icons/dc_logo_white.png";
import { theme } from "../../../../styles/theme";
import {
  A,
  PlanButton,
  ContactButton,
  BgColor,
  WelcomeContent,
} from "./WelcomeSection.styles";

const WelcomeSection = () => {
  return (
    // Welcome section
    <BgColor>
      <WelcomeContent>
        <div>
          {/* Church logo */}
          <div>
            <img src={dc_logo_white} alt="DC Logo White" />
          </div>

          {/* Welcome message */}
          <div>
            <p className="welcomeTitle">You're Welcome Here</p>
            <p className="welcomeSubTitle">
              Whether you're exploring faith or looking for a church home, we'd
              love to meet you.
              <br />
              <br />
              Join us this Sunday!
            </p>
          </div>

          {/* Call-to-action buttons */}
          <div className="welcomeButton">
            {/* Link to the Plan Your Visit page */}
            <A to="/plan">
              <PlanButton
                style={{
                  borderRadius: "3rem",
                }}
              >
                Plan Your Visit
              </PlanButton>
            </A>

            {/* Link to the Contact page */}
            <A to="/contact">
              <ContactButton
                style={{
                  color: theme.colors.white,
                  borderRadius: "3rem",
                }}
              >
                Contact Us
              </ContactButton>
            </A>
          </div>
        </div>
      </WelcomeContent>
    </BgColor>
  );
};
export default WelcomeSection;
