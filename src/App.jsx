import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Integrations from './components/Integrations';
import CTA from './components/CTA';

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#070b18] py-10 text-sm text-white/60">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <p>© {new Date().getFullYear()} FluxPay, Inc. All rights reserved.</p>
        <div className="flex items-center gap-5">
          <a href="#" className="hover:text-white">Privacy</a>
          <a href="#" className="hover:text-white">Terms</a>
          <a href="#" className="hover:text-white">Security</a>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#070b18] font-inter">
      <Navbar />
      <Hero />
      <Features />
      <Integrations />
      <CTA />
      <Footer />
    </div>
  );
}
