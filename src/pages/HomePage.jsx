import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import IndustryGrid from '../components/IndustryGrid';
import HowItWorks from '../components/HowItWorks';
import Events from '../components/Events';
import About from '../components/About';
import ResourcesPreview from '../components/ResourcesPreview';
import JoinUs from '../components/JoinUs';
import Footer from '../components/Footer';
import usePageMeta from '../lib/usePageMeta';

export default function HomePage() {
    usePageMeta({ path: '/' });
    return (
        <>
            <Navbar />
            <main id="main">
                <Hero />
                <IndustryGrid />
                <HowItWorks />
                <Events />
                <About />
                <ResourcesPreview />
                <JoinUs />
            </main>
            <Footer />
        </>
    );
}
