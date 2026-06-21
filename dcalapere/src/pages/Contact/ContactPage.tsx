import NavBar from "../../layouts/NavBar.tsx";
import Footer from "../../layouts/Footer.tsx";
import { MapPin, Clock4, Phone, Mail } from "lucide-react";
import { ContactContainer, MapContainer, A } from "./ContactPage.styles.ts";

function AboutPage() {
  return (
    <>
      <NavBar />

      <main>
        <ContactContainer>
          <div className="contactTitleContainer">
            <p className="title">Contact Us</p>
            <p>
              Have a question, prayer request, or just want to say hello? We'd
              love to hear from you.
            </p>
          </div>

          <div className="contactContent">
            <div>
              <p>
                <Clock4 />
              </p>
              <p className="ccSubtitle">SERVICE TIMES</p>
              <p>Sunday: 8:00 AM - 11:30 AM</p>
              <p>Wednesday: 6:00 PM - 8:00 PM</p>
              <p>Friday: 6:30 PM - 8:30 PM</p>
            </div>

            <div>
              <p>
                <MapPin />
              </p>
              <p className="ccSubtitle">LOCATION</p>
              <p>2nd Floor Tanterlizer Building,</p>
              <p>3 Oluwakemi Street, Alapere</p>
              <p>Roundabout, Lagos</p>
            </div>

            <div>
              <p>
                <Phone />
              </p>
              <p className="ccSubtitle">PHONE</p>
              <p>(234) 803 773 8621</p>
            </div>

            <div>
              <p>
                <Mail />
              </p>
              <p className="ccSubtitle">EMAIL</p>
              <p>dominioncityalapere@gmail.com</p>
            </div>
          </div>

          <div>
            <p className="followUsTitle">FOLLOW US</p>
            <div className="socialMediaIconsContainer">
              <A
                href="https://web.facebook.com/groups/264198328180602"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-brands fa-facebook"></i>
              </A>
              <A
                href="https://www.instagram.com/dominion_city_alapere"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-brands fa-instagram"></i>
              </A>
              <A
                href="https://www.youtube.com/@DominionCityAlapere"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-brands fa-youtube"></i>
              </A>
            </div>
          </div>
        </ContactContainer>

        <MapContainer>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.4818346952557!2d3.396170875816837!3d6.586871122421971!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b92ed00000001%3A0x2d62ba9f817d94ad!2sTantalizers%20Alapere%20Ketu!5e0!3m2!1sen!2sng!4v1782055007128!5m2!1sen!2sng"
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </MapContainer>
      </main>

      <Footer />
    </>
  );
}

export default AboutPage;
