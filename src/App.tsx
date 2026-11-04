import React, { useEffect } from 'react';
import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { SearchModal } from './components/SearchModal';
import { GlobalOverlays } from './components/MediaDrawer';

import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { OnlineServicePage } from './pages/OnlineServicePage';
import { EventsPage } from './pages/EventsPage';
import { TestimoniesPage } from './pages/TestimoniesPage';
import { SalvationPage } from './pages/SalvationPage';
import { DailyReadingsPage } from './pages/DailyReadingsPage';
import { GivePage } from './pages/GivePage';
import { JoinPage } from './pages/JoinPage';
import { ResourcesPage } from './pages/ResourcesPage';
import { ContactPage } from './pages/ContactPage';

const ScrollManager: React.FC = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        window.setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 60);
        return;
      }
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
  }, [pathname, hash]);

  return null;
};

export const App: React.FC = () => {
  return (
    <AppProvider>
      <BrowserRouter>
        <ScrollManager />
        <Header />
        <main id="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/welcome" element={<Navigate to="/about#welcome" replace />} />
            <Route path="/online-service" element={<OnlineServicePage />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/testimonies" element={<TestimoniesPage />} />
            <Route path="/salvation" element={<SalvationPage />} />
            <Route path="/daily-readings" element={<DailyReadingsPage />} />
            <Route path="/give" element={<GivePage />} />
            <Route path="/join" element={<JoinPage />} />
            <Route path="/resources" element={<ResourcesPage />} />
            <Route path="/extras" element={<Navigate to="/resources" replace />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
        <SearchModal />
        <GlobalOverlays />
      </BrowserRouter>
    </AppProvider>
  );
};

export default App;
