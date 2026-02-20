import HeroSection from "./components/sections/HeroSection";
import AboutSection from "./components/sections/AboutSection";
import ServicesSection from "./components/sections/ServicesSection";
import WorkflowSection from "./components/sections/WorkflowSection";
import ContactSection from "./components/sections/ContactSection";
import BlogSection from "./components/sections/BlogSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <main className="mx-auto flex max-w-7xl flex-col gap-16 px-6 pb-24 pt-12 md:pt-16">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <WorkflowSection />
        <ContactSection />
        <BlogSection />
      </main>
    </div>
  );
}
