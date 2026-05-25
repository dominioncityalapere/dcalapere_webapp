import NavBar from "../layouts/NavBar.tsx";
import Footer from "../layouts/Footer.tsx";
import { Calendar, Clock4, MapPin } from "lucide-react";
import eventImage from "../images/eventImage.jpg";
import {
  BlackColor,
  BorderLineColor,
  EventContainer,
  GreyColor,
  PrimaryColor,
} from "./EventsPage.ts";

function EventsPage() {
  return (
    <>
      <NavBar />

      <main>
        <EventContainer>
          <div className="eventTitle">
            <p className="title">Upcoming Events</p>
            <p>
              Join us for fellowship, worship, and community activities. There's
              something for everyone!
            </p>
          </div>

          <div className="eventDetail">
            <div className="full">
              <div className="eventDetailA">
                <img
                  className="eventImageSidebar"
                  src={eventImage}
                  alt="Event Image"
                />

                <div>
                  <p
                    style={{
                      background: PrimaryColor,
                      width: "fit-content",
                      padding: "0.1rem 0.5rem",
                      borderRadius: "1rem",
                      margin: "0.5rem 1rem",
                      fontSize: "0.8rem",
                    }}
                  >
                    Lastest Event
                  </p>
                  <p className="eventTitleDetail">Easter Sunday Celebration</p>

                  <div className="numberDetail">
                    <Calendar style={{ width: "1rem" }} />
                    <p className="eventDate">April 20, 2026</p>
                  </div>

                  <div className="numberDetail">
                    <Clock4 style={{ width: "1rem" }} />
                    <p className="dayTime">8:30 AM - 11:30 AM</p>
                  </div>

                  <div className="numberDetail">
                    <MapPin style={{ width: "1rem" }} />
                    <p>
                      2nd Floor Tanterlizer Building, 3 Oluwakemi Street,
                      Alapere Roundabout, Lagos
                    </p>
                  </div>

                  <div className="numberDetail">
                    <p>(Description)</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="eventDetailB">
              <img
                className="eventImageSidebar"
                src={eventImage}
                alt="Event Image"
              />

              <div>
                <p className="eventTitleDetail">Easter Sunday Celebration</p>

                <div className="numberDetail">
                  <Calendar style={{ width: "1rem" }} />
                  <p className="eventDate">April 20, 2026</p>
                </div>

                <div className="numberDetail">
                  <Clock4 style={{ width: "1rem" }} />
                  <p className="dayTime">8:30 AM - 11:30 AM</p>
                </div>

                <div className="numberDetail">
                  <MapPin style={{ width: "1rem" }} />
                  <p>
                    2nd Floor Tanterlizer Building, 3 Oluwakemi Street, Alapere
                    Roundabout, Lagos
                  </p>
                </div>

                <div className="numberDetail">
                  <p>(Description)</p>
                </div>
              </div>
            </div>

            <div className="eventDetailB">
              <img
                className="eventImageSidebar"
                src={eventImage}
                alt="Event Image"
              />

              <div>
                <p className="eventTitleDetail">Easter Sunday Celebration</p>

                <div className="numberDetail">
                  <Calendar style={{ width: "1rem" }} />
                  <p className="eventDate">April 20, 2026</p>
                </div>

                <div className="numberDetail">
                  <Clock4 style={{ width: "1rem" }} />
                  <p className="dayTime">8:30 AM - 11:30 AM</p>
                </div>

                <div className="numberDetail">
                  <MapPin style={{ width: "1rem" }} />
                  <p>
                    2nd Floor Tanterlizer Building, 3 Oluwakemi Street, Alapere
                    Roundabout, Lagos
                  </p>
                </div>

                <div className="numberDetail">
                  <p>(Description)</p>
                </div>
              </div>
            </div>

            <div className="eventDetailB">
              <img
                className="eventImageSidebar"
                src={eventImage}
                alt="Event Image"
              />

              <div>
                <p className="eventTitleDetail">Easter Sunday Celebration</p>

                <div className="numberDetail">
                  <Calendar style={{ width: "1rem" }} />
                  <p className="eventDate">April 20, 2026</p>
                </div>

                <div className="numberDetail">
                  <Clock4 style={{ width: "1rem" }} />
                  <p className="dayTime">8:30 AM - 11:30 AM</p>
                </div>

                <div className="numberDetail">
                  <MapPin style={{ width: "1rem" }} />
                  <p>
                    2nd Floor Tanterlizer Building, 3 Oluwakemi Street, Alapere
                    Roundabout, Lagos
                  </p>
                </div>

                <div className="numberDetail">
                  <p>(Description)</p>
                </div>
              </div>
            </div>
          </div>

          <div style={{ background: BorderLineColor, padding: "5rem 0" }}>
            <p className="bottomHeader"
              style={{
                fontWeight: "bold",
                color: BlackColor,
              }}
            >
              Want to stay updated?
            </p>
            <p style={{ color: GreyColor }}>
              Follow us on social media so you never miss an event.
            </p>
          </div>
        </EventContainer>
      </main>

      <Footer />
    </>
  );
}

export default EventsPage;
