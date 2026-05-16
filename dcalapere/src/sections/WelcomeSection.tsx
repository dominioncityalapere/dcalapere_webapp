import dc_logo_white from "../assets/dc_logo_white.png";
import {
  A,
  PlanButton,
  ContactButton,
  BgColor,
  WelcomeContent,
  WhiteColor,
  PrimaryColor,
} from "./WelcomeSection";

const WelcomeSection = () => {
  return (
    <BgColor>
      <WelcomeContent>
        <div>
          <div>
            <img src={dc_logo_white} alt="DC Logo White" />
          </div>

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

          <div className="welcomeButton">
            <A href="#">
              <PlanButton
                style={{
                  color: PrimaryColor,
                  borderRadius: "3rem",
                }}
              >
                Plan Your Visit
              </PlanButton>
            </A>

            <A href="#">
              <ContactButton
                style={{
                  color: WhiteColor,
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
