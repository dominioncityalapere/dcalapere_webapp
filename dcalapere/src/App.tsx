import './App.css'
import NavBar from './layouts/NavBar.tsx'
import HeroSection from './sections/HeroSection.tsx'
import ServiceTimeSection from './sections/ServiceTimeSection.tsx'

function App() {

  return (
    <>
      <NavBar />
      <main>
        <HeroSection />
        <ServiceTimeSection />
      </main>
    </>
  );
}

export default App
