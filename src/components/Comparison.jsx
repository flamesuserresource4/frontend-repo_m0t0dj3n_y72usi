import { Check, Minus } from "lucide-react";

export default function Comparison() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            Pro‑grade polish, tailored for local shops
          </h2>
          <p className="mt-3 text-slate-600">
            Lookartz gives you the ease of setting up an online store, with workflows designed for walk‑ins,
            pickups, local delivery, and neighborhood loyalty.
          </p>
        </div>

        <div className="mt-10 grid items-start gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">Lookartz</h3>
            <ul className="mt-4 space-y-3 text-sm">
              {[
                "No-code store setup in minutes",
                "Local pickup and delivery built-in",
                "Simple product and order management",
                "Beautiful themes optimized for small businesses",
                "Customers discover and buy on Lookartz website",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check className="mt-0.5 h-5 w-5 text-emerald-600" />
                  <span className="text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 opacity-90 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">Generic e‑commerce</h3>
            <ul className="mt-4 space-y-3 text-sm">
              {[
                "Complex setup and plugins",
                "Local workflows are an afterthought",
                "Overwhelming dashboards",
                "Generic themes not tuned for local shops",
                "Customers routed away from your community",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Minus className="mt-0.5 h-5 w-5 text-slate-400" />
                  <span className="text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
