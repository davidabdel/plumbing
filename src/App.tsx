import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Home from './pages/Home';
import BurstPipeBondi from './pages/blog/BurstPipeBondi';
import PlumbingCostBondi from './pages/blog/PlumbingCostBondi';
import CommonEmergenciesBondi from './pages/blog/CommonEmergenciesBondi';
import Blog from './pages/Blog';
import Layout from './components/Layout';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    } else {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [pathname, hash]);

  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/burst-pipe-bondi-apartment" element={<BurstPipeBondi />} />
          <Route path="/blog/emergency-plumber-cost-bondi" element={<PlumbingCostBondi />} />
          <Route path="/blog/common-plumbing-emergencies-bondi-beach" element={<CommonEmergenciesBondi />} />
          {/* Fallback to home */}
          <Route path="*" element={<Home />} />
        </Routes>
      </Layout>
    </Router>
  );
}
