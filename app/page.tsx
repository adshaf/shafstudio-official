import Header from "./components/Header";
import Hero from "./components/Hero";
import SloganSection from "./components/SloganSection";
import TeamSection from "./components/TeamSection";
import FeaturedWork from "./components/FeaturedWork";
import Testimonials from "./components/Testimonials";
import Services from "./components/Services";
import Process from "./components/Process";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="relative flex flex-col min-h-screen w-full bg-background-light text-slate-900 font-display overflow-x-hidden antialiased selection:bg-primary selection:text-white">
      <Header />
      <Hero />
      <SloganSection />
      <TeamSection />
      <FeaturedWork />
      <Testimonials />
      <Services />
      <Process />
      <Contact />
      <Footer />
    </div>
  );
}
