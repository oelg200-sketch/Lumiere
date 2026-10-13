import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Products from '@/components/Products';
import Benefits from '@/components/Benefits';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { useScrolled, useScrollReveal } from '@/hooks/useScrollReveal';

export default function App() {
  const scrolled = useScrolled(60);
  useScrollReveal();

  return (
    <div className="min-h-screen bg-blush-50">
      <Navbar scrolled={scrolled} />
      <main>
        <Hero />
        <Products />
        <Benefits />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
