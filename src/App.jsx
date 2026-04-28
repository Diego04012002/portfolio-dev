import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import { Toaster } from "./components/ui/sonner";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import TechTicker from "./components/TechTicker";
import Stats from "./components/Stats";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollProgress from "./components/ScrollProgress";
import BackToTop from "./components/BackToTop";
import CommandPalette from "./components/CommandPalette";
import NotFound from "./components/NotFound";

const Portfolio = () => {
  useEffect(() => {
    const css = (c) => `color:${c};font-weight:600;font-family:JetBrains Mono,monospace;`;
    // eslint-disable-next-line no-console
    console.log(
      "%c👋 Hey there!\n%cIf you're inspecting this — you're my kind of person.\n%c\nDiego · Full Stack Developer · Vigo, ES\n→ github.com  ·  linkedin.com\n\nPro tip: hit %c⌘ K%c (or Ctrl+K) anywhere on the site.",
      css("#10b981") + "font-size:18px;",
      css("#9ca3af") + "font-size:13px;",
      css("#34d399") + "font-size:12px;",
      css("#10b981") + "background:#064e3b;padding:2px 6px;border-radius:4px;",
      css("#9ca3af") + "font-size:12px;"
    );
  }, []);

  return (
    <div className="App bg-background text-foreground antialiased">
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <TechTicker />
        <Stats />
        <Projects />
        <Skills />
        <Experience />
        <Certifications />
        {/* <Contact /> */}
      </main>
      <Footer />
      <BackToTop />
      <CommandPalette />
      <Toaster richColors position="bottom-right" />
    </div>
  );
};

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Portfolio />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
