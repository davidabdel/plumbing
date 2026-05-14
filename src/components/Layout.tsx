import { ReactNode } from 'react';
import { PHONE_NUMBER } from '../constants';
import { Link } from 'react-router-dom';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen text-[#1a1a1a] bg-white">
      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <Link to="/" className="font-bold text-navy text-xl md:text-2xl">
            Bondi Emergency Plumbing
          </Link>
          <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold text-navy">
            <Link to="/" className="hover:text-navy underline-offset-4 hover:underline">Home</Link>
            <a href="/#services" className="hover:text-navy underline-offset-4 hover:underline">Services</a>
            <a href="/#areas" className="hover:text-navy underline-offset-4 hover:underline">Areas</a>
            <a href="/#faq" className="hover:text-navy underline-offset-4 hover:underline">FAQ</a>
            <Link to="/blog/burst-pipe-bondi-apartment" className="hover:text-navy underline-offset-4 hover:underline">Blog</Link>
            <a href="/#contact" className="hover:text-navy underline-offset-4 hover:underline">Contact</a>
          </nav>
          <a 
            href={`tel:${PHONE_NUMBER}`}
            className="bg-navy text-white px-6 py-3 rounded font-bold text-base hover:bg-black transition-colors shadow-sm"
          >
            📞 {PHONE_NUMBER}
          </a>
        </div>
      </header>

      <main>
        {children}
      </main>

      {/* FOOTER */}
      <footer className="bg-navy text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div>
              <div className="font-bold text-2xl mb-4">Bondi Emergency Plumbing</div>
              <p className="text-gray-400">Your local 24/7 emergency plumber serving Bondi and the Eastern Suburbs</p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-6 uppercase tracking-wider">Services</h4>
              <ul className="space-y-3 text-gray-400">
                <li>Emergency Plumbing Bondi</li>
                <li>Blocked Drains Bondi</li>
                <li>Hot Water Repairs Bondi</li>
                <li className="hover:text-white"><Link to="/blog/burst-pipe-bondi-apartment">Burst Pipe Guide</Link></li>
                <li>Gas Leak Detection Bondi</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-6 uppercase tracking-wider">Service Areas</h4>
              <ul className="space-y-3 text-gray-400">
                <li>Bondi Beach</li>
                <li>Bondi Junction</li>
                <li>North Bondi</li>
                <li>Eastern Suburbs</li>
                <li>Coogee & Randwick</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-6 uppercase tracking-wider">Contact</h4>
              <ul className="space-y-3 text-gray-400">
                <li className="text-white font-bold"><a href={`tel:${PHONE_NUMBER}`}>{PHONE_NUMBER}</a></li>
                <li>info@bondiemergencyplumbing.com.au</li>
                <li className="text-sm border-t border-gray-700 pt-3 mt-3">Licensed NSW Plumbers</li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
            <p>© 2026 Bondi Emergency Plumbing | All Rights Reserved | Licensed NSW Plumbers</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
