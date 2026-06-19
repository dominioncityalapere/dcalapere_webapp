import { useEffect, useState } from "react";
import type { EventType } from "../../../Events/EventsPage.types.ts";
import { getEventsSection } from "../../../../services/events.service.ts";
import { Clock4, Calendar, MapPin, ChevronRight } from "lucide-react";
import { theme } from "../../../../styles/theme";

import {
  A,
  BgColor,
  EventsContent,
  LearnButton,
  EventsButton,
  AEvents,
} from "./EventsSection.styles";

const EventsSection = () => {
  const [events, setEvents] = useState<EventType[]>([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const data = await getEventsSection();
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
    <BgColor>
      <EventsContent thumbnail={featuredEvent?.thumbnail || ""}>
        <p className="sectionTitle">Upcoming Events</p>
        <p className="sectionSubTitle">
          Join us for fellowship, growth, and community
        </p>

        <div className="eventWrapper">
          {featuredEvent && (
            <div className="eventDetail">
              <p
                style={{
                  background: theme.colors.yellow,
                  width: "fit-content",
                  color: theme.colors.white,
                  padding: "0.3rem 0.8rem",
                  borderRadius: "1rem",
                  fontSize: "0.8rem",
                  marginBottom: "1rem",
                  fontWeight: "Bold",
                }}
              >
                Latest Event
              </p>
              <p className="eventTitle">{featuredEvent.title}</p>

              <div className="numberDetail">
                <Calendar style={{ width: "1rem" }} />
                <p className="eventDate">{formatDate(featuredEvent.date)}</p>
              </div>

              <div className="numberDetail">
                <Clock4 style={{ width: "1rem" }} />
                <p className="dayTime">{formatTime(featuredEvent.time)}</p>
              </div>

              <div className="numberDetail">
                <MapPin style={{ width: "1rem" }} />
                <p>{featuredEvent.location}</p>
              </div>

              <div className="numberDetail">
                <p>{featuredEvent.description}</p>
              </div>

              <A to="/events">
                <LearnButton
                  style={{
                    borderRadius: "3rem",
                  }}
                >
                  Learn More <ChevronRight style={{ width: "1rem" }} />
                </LearnButton>
              </A>
            </div>
          )}

          {/* Sidebar Events */}
          <div
            style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
          >
            {sideEvents.map((event) => (
              <div key={event.id} className="eventDetailSidebar">
                <div className="imageAlignText">
                  <img
                    className="eventImageSidebar"
                    src={event.thumbnail}
                    alt={event.title}
                  />

                  <div className="textSidebar">
                    <p className="eventTitleSidebar">{event.title}</p>

                    <div className="numberDetailSidebar">
                      <div style={{ display: "flex", gap: "0.5rem" }}>
                        <Calendar
                          style={{
                            color: theme.colors.primary,
                            width: "1rem",
                          }}
                        />
                        <p className="eventDate">{formatDate(event.date)}</p>
                      </div>

                      <div style={{ display: "flex", gap: "0.5rem" }}>
                        <Clock4
                          style={{
                            color: theme.colors.primary,
                            width: "1rem",
                          }}
                        />
                        <p className="dayTime">{formatTime(event.time)}</p>
                      </div>
                    </div>

                    <div className="numberDetailSidebar">
                      <p>{event.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </EventsContent>

      <AEvents>
        <A to="/events">
          <EventsButton
            style={{
              borderRadius: "3rem",
            }}
          >
            View All Events
          </EventsButton>
        </A>
      </AEvents>
    </BgColor>
  );
};
export default EventsSection;
