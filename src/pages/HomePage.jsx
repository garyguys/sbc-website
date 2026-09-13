import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import NeedsGrid from '../components/NeedsGrid';
import DirectoryPreview from '../components/DirectoryPreview';
import About from '../components/About';
import HowItWorks from '../components/HowItWorks';
import ResourcesPreview from '../components/ResourcesPreview';
import JoinUs from '../components/JoinUs';
import Footer from '../components/Footer';

export default function HomePage() {
    return (
        <>
            <Navbar />
            <main id="main">
                <Hero />
                <NeedsGrid />
                <DirectoryPreview />
                <About />
                <HowItWorks />
                <ResourcesPreview />
                <JoinUs />
            </main>
            <Footer />
        </>
    );
}
