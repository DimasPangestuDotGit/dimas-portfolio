import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import Background from "@/components/ui/Background";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Education from "@/components/sections/Education";
import Contact from "@/components/sections/Contact";
// import IDCard from "@/components/ui/IDCard";
// import Scorpio from "@/components/ui/Scorpio";

export default function Home() {
  return (
    <>
      <Background />
      {/* <Scorpio /> */}
      <main style={{ position: "relative", zIndex: 1 }}>
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Contact />
        <Footer />
      </main>
      {/* <IDCard /> */}
    </>
  );
}
