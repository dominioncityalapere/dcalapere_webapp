import NavBar from "../../layouts/NavBar.tsx";
import Footer from "../../layouts/Footer.tsx";
import { Quote } from "lucide-react";
import { GiveContainer, A } from "./GivePage.styles.ts";
import uba from "../../assets/images/uba.png";
import fcmb from "../../assets/images/fcmb.png";

function GivePage() {
  return (
    <>
      <NavBar />

      <main>
        <GiveContainer>
          <div className="contactTitleContainer">
            <p className="title">Give</p>
            <p>
              Your generosity helps us touch lives, strengthen our community,
              and advance God's purpose. <br className="desktopBreak tabBreak" />
              Every gift makes an eternal impact.
            </p>
          </div>

          <div className="bibleQuoteContainer">
            <p>
              <Quote size={40} />
            </p>
            <p className="bibleVerse">
              Each of you should give what you have decided in your heart to
              give,
              <br className="desktopBreak" /> not reluctantly or under
              compulsion, for God loves a cheerful giver.
            </p>
            <p className="bookOfTheBible">2 Corinthians 9:7</p>
            <p className="bibleVersion">New International Version</p>
          </div>

          <div className="accountContainer">
            <p className="title">Ready to Give?</p>
            <p>
              Make a secure transfer to our account and be part of what God is
              doing.
            </p>

            <div className="accountBoxGrid">
              <div className="accountDetailsContainer">
                <div>
                  <p>TITHE</p>
                  <br />
                  <p style={{ fontWeight: 800 }}>1020046386</p>
                  <p>DOMINION CITY ORIOKE</p>
                </div>

                <img
                  src={uba}
                  alt="UBA logo"
                  style={{ width: "10rem", borderRadius: "0 1rem 1rem 0" }}
                />
              </div>

              <div className="accountDetailsContainer">
                <div>
                  <p>PROJECTS</p>
                  <br />
                  <p style={{ fontWeight: 800 }}>6999253019</p>
                  <p>OLAYINKA & GIUGLARIS JOSEPH</p>
                </div>

                <img
                  src={fcmb}
                  alt="UBA logo"
                  style={{ width: "10rem", borderRadius: "0 1rem 1rem 0" }}
                />
              </div>
            </div>
          </div>

          <div className="questionContainer">
            <p className="questionTitle">Questions About Giving?</p>
            <p className="questionDetail">
              Our team is glad to serve you. If you have any questions about
              giving <br className="desktopBreak"/>
              or how your seed supports the work of the ministry, feel free to
              reach out at any time.
            </p>
            <A to="/contact">
              <span>Contact Us</span>
            </A>
          </div>
        </GiveContainer>
      </main>

      <Footer />
    </>
  );
}

export default GivePage;
