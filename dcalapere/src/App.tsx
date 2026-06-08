import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "./layouts/NavBar.tsx";
import HeroSection from "./sections/HeroSection.tsx";
import ServiceTimeSection from "./sections/ServiceTimeSection.tsx";
import DailyDevotional from "./sections/DailyDevotional.tsx";
import SermonSection from "./sections/SermonSection.tsx";
import EventsSection from "./sections/EventsSection/EventsSection.tsx";
import AdminDashboard from "./admin/AdminDashboard.tsx";
import AdminLogin from "./admin/AdminLogin.tsx";
import WelcomeSection from "./sections/WelcomeSection.tsx";
import Footer from "./layouts/Footer.tsx";

import ScrollToTop from "./components/ScrollToTop.tsx";
import AboutPage from "./pages/AboutPage.tsx";
import EventsPage from "./pages/Events/EventsPage.tsx";
import SermonsPage from "./pages/Sermons/SermonsPage.tsx";
import SermonDetails from "./pages/Sermons/SermonDetails.tsx"

function HomePage() {
  return (
    <>
      <NavBar />
      <main>
        <HeroSection />
        <ServiceTimeSection />
        <DailyDevotional />
        <EventsSection />
        <SermonSection />
        <WelcomeSection />
      </main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/about" element={<AboutPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/sermons" element={<SermonsPage />} />
        <Route path="/sermons/:id" element={<SermonDetails />} />

        <Route path="/dcalapere-login-26" element={<AdminLogin />} />
        <Route path="/dcalapere-access-26" element={<AdminDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
