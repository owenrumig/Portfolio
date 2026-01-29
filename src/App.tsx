import { Analytics } from "@vercel/analytics/react";
import About from "./components/About";
import Career from "./components/Career";
import Interests from "./components/Interests";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Interests />
      <Career />
      <Footer />
      <Analytics />
    </main>
  );
}
