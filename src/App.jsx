import { useEffect } from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DirectoryPage from './pages/DirectoryPage';
import MemberProfile from './pages/MemberProfile';
import ResourcesPage from './pages/ResourcesPage';
import ResourceArticle from './pages/ResourceArticle';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Terms from './pages/Terms';
import ThankYou from './pages/ThankYou';

/**
 * Restores the top of the page on navigation, but honours in-page hash links
 * (e.g. /#about from the Directory page) once the target has rendered.
 */
function ScrollManager() {
    const { pathname, hash } = useLocation();

    // NOTE: `search` is deliberately NOT a dependency. The directory writes its
    // query and filters into the URL as the user types, and scrolling to the top
    // on every keystroke would be maddening.
    useEffect(() => {
        if (!hash) {
            window.scrollTo(0, 0);
            return;
        }
        // The target section may not have mounted yet when arriving from another
        // route, so try on the next frame and give up after a short grace period.
        let frame;
        const started = Date.now();
        const tryScroll = () => {
            const el = document.querySelector(hash);
            if (el) {
                el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            } else if (Date.now() - started < 600) {
                frame = requestAnimationFrame(tryScroll);
            }
        };
        frame = requestAnimationFrame(tryScroll);
        return () => cancelAnimationFrame(frame);
    }, [pathname, hash]);

    return null;
}

export default function App() {
    return (
        <>
            <a href="#main" className="skip-link">Skip to main content</a>
            <ScrollManager />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/directory" element={<DirectoryPage />} />
                <Route path="/directory/:slug" element={<MemberProfile />} />
                <Route path="/resources" element={<ResourcesPage />} />
                <Route path="/resources/:slug" element={<ResourceArticle />} />
                <Route path="/privacy" element={<PrivacyPolicy />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="/thank-you" element={<ThankYou />} />
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </>
    );
}
