import NavBar from "../layouts/NavBar.tsx";
import Footer from "../layouts/Footer.tsx";
import { HeartHandshake } from "lucide-react";
import Dr_David_Ogbueli from "../images/Dr._David_Ogbueli.jpg";
import {
  AboutContainer,
  TitleBgColor,
  WhiteColor,
  BlackColor,
} from "./AboutPage.ts";

function AboutPage() {
  return (
    <>
      <NavBar />

      <main>
        <AboutContainer>
          <div className="aboutTitleContainer">
            <p className="title">About Us</p>
            <p>
              A body of believers with 1 vision; raising leaders that transform
              society.
            </p>
          </div>

          <div className="aboutContent">
            <div>
              <div className="leftGridContentA">
                <div>
                  <HeartHandshake
                    style={{
                      background: BlackColor,
                      padding: "0.5rem",
                      borderRadius: "2rem",
                      color: WhiteColor,
                    }}
                  />
                  <p style={{ fontWeight: "bold", padding: "0.3rem 0" }}>
                    CORE VALUES
                  </p>
                  <p>
                    Explore the values that embody the vision of Dominion City
                    Church. Our values reflect our mission to transform the
                    total man so we can impact our communities.
                  </p>
                </div>

                <div>
                  <HeartHandshake
                    style={{
                      background: BlackColor,
                      padding: "0.5rem",
                      borderRadius: "2rem",
                      color: WhiteColor,
                      marginTop: "2rem",
                    }}
                  />
                  <p style={{ fontWeight: "bold", padding: "0.3rem 0" }}>
                    LEADERSHIP INSTITUTE
                  </p>
                  <p>
                    We strongly believe in leadership and transformation. We are
                    committed to raising and developing sons and daughters in
                    Christ, who will transform society at large, through various
                    spheres of life
                  </p>
                </div>
              </div>

              <div className="leftGridContentB">
                <div>
                  <HeartHandshake
                    style={{
                      background: WhiteColor,
                      padding: "0.5rem",
                      borderRadius: "2rem",
                      color: BlackColor,
                    }}
                  />
                  <p style={{ fontWeight: "bold", padding: "0.3rem 0" }}>
                    OUR BELIEFS
                  </p>
                  <p>
                    Discover how we view God, Jesus, the Bible, man, and many
                    significant aspects of our faith. Our beliefs are shaped by
                    biblical truths and our decisions as a church are guided by
                    Scripture.
                  </p>
                </div>

                <div>
                  <HeartHandshake
                    style={{
                      background: WhiteColor,
                      padding: "0.5rem",
                      borderRadius: "2rem",
                      color: BlackColor,
                      marginTop: "2rem",
                    }}
                  />
                  <p style={{ fontWeight: "bold", padding: "0.3rem 0" }}>
                    MINISTRIES
                  </p>
                  <p>
                    Ministries designed to meet the specific needs and desires
                    of our members and the body of Christ at large, while
                    fulfilling its mission to raise leaders that transform
                    society
                  </p>
                </div>
              </div>
            </div>

            <div className="rightGridContentContainer">
              <div>
                <img src={Dr_David_Ogbueli} alt="" />
              </div>

              <div className="rightGridContentB">
                <p
                  style={{
                    fontWeight: "bold",
                    textAlign: "left",
                    paddingTop: "1rem",
                  }}
                >
                  Dr. David Ogbueli
                </p>
                <p className="pstIntro">
                  Dr. David Ogbueli is the founder of the New Covenant Family
                  Ministries and the Senior Pastor of Dominion City,
                  International. He is also the President of the Dominion
                  Leadership Institute, and a Senior Facilitator in the
                  Institute of National Transformation. Dr. David Ogbueli is a
                  minister of the Gospel, and an icon of transformational
                  leadership. His passion for Personal Transformation and
                  National Transformation has produced various initiatives and
                  ministries causing a stir among youth, governments, corporate
                  institutions, the media and other stakeholders both in Africa
                  and globally. He is a Management and Government Consultant who
                  speaks nationally and internationally in organizations,
                  government houses, embassies and churches. He is a widely read
                  author and a social reformer. Dr David Ogbueli is married to
                  Pastor Sarah Ogbueli and they have four children.
                </p>
              </div>
            </div>
          </div>
        </AboutContainer>
      </main>

      <Footer />
    </>
  );
}

export default AboutPage;
