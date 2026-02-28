import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import MemberDirectory from './components/MemberDirectory';
import About from './components/About';
import HowItWorks from './components/HowItWorks';
import JoinUs from './components/JoinUs';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-sbc-white font-sans text-sbc-gray-900 selection:bg-sbc-blue-light selection:text-sbc-blue-dark antialiased">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <MemberDirectory />
        <About />
        <HowItWorks />
        <JoinUs />
      </main>
      <Footer />
    </div>
  );
}

export default App;
