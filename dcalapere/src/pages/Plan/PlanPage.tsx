import NavBar from "../../layouts/NavBar.tsx";
import Footer from "../../layouts/Footer.tsx";
import { MapPin, Clock4, Phone, Mail } from "lucide-react";
// import { GiveContainer, A } from "./GivePage.styles.ts";

function PlanPage() {
  return (
    <>
      <NavBar />

      <main>
        {/* <GiveContainer> */}
        <div className="contactTitleContainer">
          <p className="title">Plan Your Visit</p>
          <p>
            Have a question, prayer request, or just want to say hello? We'd
            love to hear from you.
          </p>
        </div>
        {/* </GiveContainer> */}
      </main>

      <Footer />
    </>
  );
}

export default PlanPage;
