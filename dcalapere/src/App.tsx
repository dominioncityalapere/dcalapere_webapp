import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from './layouts/NavBar.tsx'
import HeroSection from './sections/HeroSection.tsx'
import ServiceTimeSection from './sections/ServiceTimeSection.tsx'
import DailyDevotional from './sections/DailyDevotional.tsx'
import SermonSection from './sections/SermonSection.tsx'
import EventsSection from './sections/EventsSection.tsx'
import AdminDashboard from './admin/AdminDashboard.tsx'
import AdminLogin from './admin/AdminLogin.tsx';
import WelcomeSection from './sections/WelcomeSection.tsx';

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
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/dcalapere-login-26" element={<AdminLogin />} />
        <Route path="/dcalapere-access-26" element={<AdminDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
