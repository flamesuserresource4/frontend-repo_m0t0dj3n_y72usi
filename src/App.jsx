import Hero from "./components/Hero";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import CTA from "./components/CTA";
import ShowcaseCarousel from "./components/ShowcaseCarousel";
import Testimonials from "./components/Testimonials";
import Comparison from "./components/Comparison";
import FAQ from "./components/FAQ";
import LogoCarousel from "./components/LogoCarousel";
import Metrics from "./components/Metrics";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50">
      <header className="sticky top-0 z-30 border-b border-slate-200/60 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-600 to-fuchsia-500 text-white">
              L
            </div>
            <span className="text-lg font-semibold tracking-tight text-slate-900">Lookartz</span>
          </a>
          <nav className="hidden items-center gap-6 text-sm text-slate-700 md:flex">
            <a href="#features" className="hover:text-slate-900">Features</a>
            <a href="#how-it-works" className="hover:text-slate-900">How it works</a>
            <a href="#get-started" className="hover:text-slate-900">Get started</a>
          </nav>
          <div className="flex items-center gap-3">
            <a
              href="https://app.lookartz.com"
              className="hidden rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-700 shadow-sm hover:bg-slate-50 md:inline-flex"
            >
              Sign in
            </a>
            <a
              href="https://app.lookartz.com"
              className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-indigo-700"
            >
              Create store
            </a>
          </div>
        </div>
      </header>

      <main>
        <Hero />
        <LogoCarousel />
        <Metrics />
        <Features />
        <Comparison />
        <ShowcaseCarousel />
        <Testimonials />
        <HowItWorks />
        <FAQ />
        <CTA />
      </main>

      <footer className="border-t border-slate-200/60 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-10 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} Lookartz. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
