import { Clock4, Calendar, MapPin, ChevronRight } from "lucide-react";
import eventImage from "../images/eventImage.jpg";

import {
  A,
  PrimaryColor,
  BgColor,
  EventsContent,
  LearnButton,
  EventsButton,
  AEvents,
} from "./EventsSection";

const EventsSection = () => {
  return (
    <BgColor>
      <EventsContent>
        <p className="sectionTitle">Upcoming Events</p>
        <p className="sectionSubTitle">
          Join us for fellowship, growth, and community
        </p>

        <div className="eventWrapper">
          <div className="eventDetail">
            <p className="eventTitle">Easter Sunday Celebration</p>

            <div className="numberDetail">
              <Calendar />
              <p className="eventDate">April 20, 2026</p>
            </div>

            <div className="numberDetail">
              <Clock4 />
              <p className="dayTime">8:30 AM - 11:30 AM</p>
            </div>

            <div className="numberDetail">
              <MapPin />
              <p>
                2nd Floor Tanterlizer Building, 3 Oluwakemi Street, Alapere
                Roundabout, Lagos
              </p>
            </div>

            <div className="numberDetail">
              <p>(Description)</p>
            </div>

            <A href="#">
              <LearnButton
                style={{
                  borderRadius: "3rem",
                }}
              >
                Learn More <ChevronRight />
              </LearnButton>
            </A>
          </div>

          {/* Sidebar Events */}

          <div className="eventDetailSidebar">
            <div className="imageAlignText">
              <img
                className="eventImageSidebar"
                src={eventImage}
                alt="Event Image"
              />

              <div className="textSidebar">
                <p className="eventTitleSidebar">Easter Sunday Celebration</p>

                <div className="numberDetailSidebar">
                  <div style={{ display: "flex", gap: "0.5rem" }}>
                    <Calendar
                      style={{
                        color: PrimaryColor,
                      }}
                    />
                    <p className="eventDate">April 20, 2026</p>
                  </div>

                  <div style={{ display: "flex", gap: "0.5rem" }}>
                    <Clock4
                      style={{
                        color: PrimaryColor,
                      }}
                    />
                    <p className="dayTime">8:30 AM - 11:30 AM</p>
                  </div>
                </div>

                <div className="numberDetailSidebar">
                  <p>(Description)</p>
                </div>
              </div>
            </div>

            {/* Second Event Sidebar */}

            <div className="imageAlignText">
              <img
                className="eventImageSidebar"
                src={eventImage}
                alt="Event Image"
              />

              <div className="textSidebar">
                <p className="eventTitleSidebar">Easter Sunday Celebration</p>

                <div className="numberDetailSidebar">
                  <div style={{ display: "flex", gap: "0.5rem" }}>
                    <Calendar
                      style={{
                        color: PrimaryColor,
                      }}
                    />
                    <p className="eventDate">April 20, 2026</p>
                  </div>

                  <div style={{ display: "flex", gap: "0.5rem" }}>
                    <Clock4
                      style={{
                        color: PrimaryColor,
                      }}
                    />
                    <p className="dayTime">8:30 AM - 11:30 AM</p>
                  </div>
                </div>

                <div className="numberDetailSidebar">
                  <p>(Description)</p>
                </div>
              </div>
            </div>

            {/* Third Event Sidebar */}

            <div className="imageAlignText">
              <img
                className="eventImageSidebar"
                src={eventImage}
                alt="Event Image"
              />

              <div className="textSidebar">
                <p className="eventTitleSidebar">Easter Sunday Celebration</p>

                <div className="numberDetailSidebar">
                  <div style={{ display: "flex", gap: "0.5rem" }}>
                    <Calendar
                      style={{
                        color: PrimaryColor,
                      }}
                    />
                    <p className="eventDate">April 20, 2026</p>
                  </div>

                  <div style={{ display: "flex", gap: "0.5rem" }}>
                    <Clock4
                      style={{
                        color: PrimaryColor,
                      }}
                    />
                    <p className="dayTime">8:30 AM - 11:30 AM</p>
                  </div>
                </div>

                <div className="numberDetailSidebar">
                  <p>(Description)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </EventsContent>

      <AEvents href="#">
        <EventsButton
          style={{
            borderRadius: "3rem",
          }}
        >
          View All Events
        </EventsButton>
      </AEvents>
    </BgColor>
  );
};
export default EventsSection;
