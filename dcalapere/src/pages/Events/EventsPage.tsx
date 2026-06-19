import { useEffect, useState } from "react";
import { getEvents } from "../../services/events.service.ts";
import type { EventType } from "./EventsPage.types.ts";
import NavBar from "../../layouts/NavBar.tsx";
import Footer from "../../layouts/Footer.tsx";
import { Calendar, Clock4, MapPin } from "lucide-react";
import { EventContainer } from "./EventsPage.styles.ts";
import { theme } from "../../styles/theme";

function EventsPage() {
  const [events, setEvents] = useState<EventType[]>([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const data = await getEvents();
      setEvents(data);
    };

    fetchEvents();
  }, []);

  const featuredEvent = events[0];
  const sideEvents = events.slice(1);

  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const formatTime = (time: string) => {
    const [hours, minutes] = time.split(":");

    const hour = Number(hours);

    const period = hour >= 12 ? " PM" : " AM";

    const formattedHour = hour % 12 || 12;

    return `${formattedHour}:${minutes}${period}`;
  };

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
            {featuredEvent && (
              <div className="full">
                <div className="eventDetailA">
                  <img
                    className="eventImageSidebar"
                    src={featuredEvent.thumbnail}
                    alt={featuredEvent.title}
                  />

                  <div className="eventInfoFlex">
                    <p
                      style={{
                        background: theme.colors.primary,
                        width: "fit-content",
                        padding: "0.1rem 0.5rem",
                        borderRadius: "1rem",
                        margin: "0.5rem 1rem",
                        fontSize: "0.8rem",
                      }}
                    >
                      Latest Event
                    </p>

                    <p className="eventTitleDetail">{featuredEvent.title}</p>

                    <div className="numberDetail">
                      <Calendar style={{ width: "1rem" }} />
                      <p className="eventDate">
                        {formatDate(featuredEvent.date)}
                      </p>
                    </div>

                    <div className="numberDetail">
                      <Clock4 style={{ width: "1rem" }} />
                      <p className="dayTime">
                        {formatTime(featuredEvent.time)}
                      </p>
                    </div>

                    <div className="numberDetail">
                      <MapPin style={{ width: "1rem" }} />
                      <p>{featuredEvent.location}</p>
                    </div>

                    <div className="numberDetail">
                      <p>{featuredEvent.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {sideEvents.map((event) => (
              <div key={event.id} className="eventDetailB">
                <img
                  className="eventImageSidebar"
                  src={event.thumbnail}
                  alt={event.title}
                />

                <div>
                  <p className="eventTitleDetail">{event.title}</p>

                  <div className="numberDetail">
                    <Calendar style={{ width: "1rem" }} />
                    <p className="eventDate">{formatDate(event.date)}</p>
                  </div>

                  <div className="numberDetail">
                    <Clock4 style={{ width: "1rem" }} />
                    <p className="dayTime"> {formatTime(event.time)}</p>
                  </div>

                  <div className="numberDetail">
                    <MapPin style={{ width: "1rem" }} />
                    <p>{event.location}</p>
                  </div>

                  <div className="numberDetail">
                    <p>{event.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div
            style={{ background: theme.colors.borderLine, padding: "5rem 0" }}
          >
            <p
              className="bottomHeader"
              style={{
                fontWeight: "bold",
                color: theme.colors.black,
              }}
            >
              Want to stay updated?
            </p>
            <p style={{ color: theme.colors.grey }}>
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
