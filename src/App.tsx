import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Navbar, Footer, QuoteForm } from './components/Common';
import { Home } from './pages/Home';
import { About, Gutters, HomeImprovement, Windows, Contact } from './pages/ContentPages';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services/gutters" element={<Gutters />} />
            <Route path="/services/home-improvement" element={<HomeImprovement />} />
            <Route path="/services/windows" element={<Windows />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <QuoteForm />
        <Footer />
      </div>
    </Router>
  );
}

