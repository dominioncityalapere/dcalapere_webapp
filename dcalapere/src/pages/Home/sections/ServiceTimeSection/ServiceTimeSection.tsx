import { Clock4 } from "lucide-react";
import { theme } from "../../../../styles/theme";
import { PlanButton, A, BgColor, ServiceContent } from "./ServiceTimeSection.styles";

const ServiceTimeSection = () => {
  return (
    <BgColor id="services">
      <ServiceContent>
        <p className="sectionTitle">Service Times</p>
        <p className="sectionSubTitle">
          We'd love to have you join us for worship. Here's when you can find
          us.
        </p>

        <div className="servicesTimeWrapper">
          <div className="servicesTime">
            <Clock4
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

            <p>(Description)</p>
          </div>

          <div className="servicesTime">
            <Clock4
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

            <p>(Description)</p>
          </div>

          <div className="servicesTime">
            <Clock4
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

            <p>(Description)</p>
          </div>
        </div>

        <A href="#">
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
