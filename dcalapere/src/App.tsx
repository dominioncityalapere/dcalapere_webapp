import './App.css'
import NavBar from './layouts/NavBar.tsx'
import HeroSection from './sections/HeroSection.tsx'
import ServiceTimeSection from './sections/ServiceTimeSection.tsx'
import DailyDevotional from './sections/DailyDevotional.tsx'

function App() {

  return (
    <>
      <NavBar />
      <main>
        <HeroSection />
        <ServiceTimeSection />
        <DailyDevotional />
      </main>
    </>
  );
}

export default App
