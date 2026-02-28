import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import MemberDirectory from '../components/MemberDirectory';
import About from '../components/About';
import HowItWorks from '../components/HowItWorks';
import JoinUs from '../components/JoinUs';
import Footer from '../components/Footer';

export default function HomePage() {
    return (
        <>
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
        </>
    );
}
