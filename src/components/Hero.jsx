import Spline from "@splinetool/react-spline";
import { Rocket, Store, Users } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-[640px] w-full md:h-[760px]">
      {/* Spline background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/4Tf9WOIaWs6LOezG/scene.splinecode"
          style={{ width: "100%", height: "100%" }}
        />
        {/* Gradient overlays should not block Spline interactions */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/30 to-white/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-indigo-600/10 px-3 py-1 text-xs font-medium text-indigo-600 ring-1 ring-indigo-600/20">
            <Rocket className="h-4 w-4" />
            Open fast. Sell faster.
          </div>
          <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-slate-900 md:text-6xl">
            Lookartz — your shop, now online.
          </h1>
          <p className="mt-4 text-[11px] uppercase tracking-[0.35em] text-slate-700 md:text-xs">
            SCROLL. SPOT. SHOP.
          </p>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-700 md:text-lg">
            Turn foot traffic into web traffic. Launch a modern storefront in minutes and let customers
            discover, love, and buy from your local brand.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#get-started"
              className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-5 py-3 text-white shadow-sm transition hover:bg-indigo-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
            >
              Create your store
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-5 py-3 text-slate-700 shadow-sm transition hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400"
            >
              Explore how it works
            </a>
          </div>

          <div className="mt-8 flex items-center gap-6 text-sm text-slate-700">
            <div className="flex items-center gap-2">
              <Store className="h-4 w-4 text-indigo-600" />
              Built for local shops
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4 text-indigo-600" />
              Customers buy on Lookartz
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
