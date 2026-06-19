import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "./layouts/NavBar.tsx";
import HeroSection from "./pages/Home/sections/HeroSection/HeroSection.tsx";
import ServiceTimeSection from "./pages/Home/sections/ServiceTimeSection/ServiceTimeSection.tsx";
import DailyDevotional from "./pages/Home/sections/DailyDevotional/DailyDevotional.tsx";
import SermonSection from "./pages/Home/sections/SermonSection/SermonSection.tsx";
import EventsSection from "./pages/Home/sections/EventsSection/EventsSection.tsx";
import AdminDashboard from "./pages/Admin/AdminDashboard.tsx";
import AdminLogin from "./pages/Admin/AdminLogin.tsx";
import WelcomeSection from "./pages/Home/sections/WelcomeSection/WelcomeSection.tsx";
import Footer from "./layouts/Footer.tsx";

import ScrollToTop from "./components/common/ScrollToTop.tsx";
import AboutPage from "./pages/About/AboutPage.tsx";
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
