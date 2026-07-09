import { Clock6, Clock8 } from "lucide-react";
import { theme } from "../../../../styles/theme";
import {
  PlanButton,
  A,
  BgColor,
  ServiceContent,
} from "./ServiceTimeSection.styles";

const ServiceTimeSection = () => {
  return (
    // Service times section
    <BgColor id="services">
      <ServiceContent>
        <p className="sectionTitle">Service Times</p>
        <p className="sectionSubTitle">
          We'd love to have you join us for worship. Here's when you can find
          us.
        </p>

        {/* Weekly service schedule */}
        <div className="servicesTimeWrapper">
          {/* Sunday service */}
          <div className="servicesTime">
            <Clock8
              style={{
                backgroundColor: theme.colors.primary,
                padding: "1rem",
                borderRadius: "3rem",
                color: theme.colors.white,
              }}
            />
            <p className="day">SUNDAY</p>
            <p className="dayService">Sunday Service</p>
            <p className="dayTime">8:30 AM - 11:30 AM</p>

            <p style={{ paddingTop: "0.7rem" }}>
              A time of worship, the Word, and encounter with God as we gather
              to grow in faith and fellowship.
            </p>
          </div>

          {/* Wednesday service */}
          <div className="servicesTime">
            <Clock6
              style={{
                backgroundColor: theme.colors.primary,
                padding: "1rem",
                borderRadius: "3rem",
                color: theme.colors.white,
              }}
            />
            <p className="day">WEDNESDAY</p>
            <p className="dayService">Midweek Service</p>
            <p className="dayTime">6:00 PM - 8:00 PM</p>

            <p style={{ paddingTop: "0.7rem" }}>
              A refreshing time of teaching and prayer that strengthens
              believers for daily walk with God.
            </p>
          </div>

          {/* Friday service */}
          <div className="servicesTime">
            <Clock6
              style={{
                backgroundColor: theme.colors.primary,
                padding: "1rem",
                borderRadius: "3rem",
                color: theme.colors.white,
              }}
            />
            <p className="day">FRIDAY</p>
            <p className="dayService">Friday Meeting</p>
            <p className="dayTime">6:30 PM - 8:30 PM</p>

            <p style={{ paddingTop: "0.7rem" }}>
              A powerful time of prayer, impartation, and spiritual renewal to
              close the week in God’s presence.
            </p>
          </div>
        </div>

        {/* Link to the Plan Your Visit page */}
        <A to="/plan">
          <PlanButton
            style={{
              backgroundColor: theme.colors.primary,
              color: theme.colors.white,
              borderRadius: "3rem",
            }}
          >
            Plan Your Visit
          </PlanButton>
        </A>
      </ServiceContent>
    </BgColor>
  );
};
export default ServiceTimeSection;
