import { Rocket, Store, Users } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-600/10 via-fuchsia-500/10 to-transparent" />
      <div className="relative mx-auto max-w-7xl px-6 pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-indigo-600/10 px-3 py-1 text-xs font-medium text-indigo-600 ring-1 ring-indigo-600/20">
              <Rocket className="h-4 w-4" />
              Launch your shop online
            </div>
            <h1 className="mt-5 text-4xl font-bold tracking-tight text-slate-900 md:text-6xl">
              Lookartz — your shop, now online.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-600 md:text-lg">
              Lookartz makes it effortless for offline shops to create beautiful online stores.
              Reach new customers, showcase your products, and sell — all from one simple place.
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

            <div className="mt-8 flex items-center gap-6 text-sm text-slate-600">
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

          <div className="relative">
            <div className="relative mx-auto w-full max-w-md rounded-2xl bg-white p-6 shadow-xl ring-1 ring-black/5 md:max-w-lg">
              <div className="grid grid-cols-3 gap-2">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div
                    key={i}
                    className="aspect-square rounded-xl bg-gradient-to-br from-indigo-500 to-fuchsia-500/80 p-0.5"
                  >
                    <div className="flex h-full w-full items-center justify-center rounded-[10px] bg-white/90 text-sm font-semibold text-slate-700">
                      Product {i}
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 rounded-xl bg-slate-50 p-4 text-sm text-slate-600">
                A simple, elegant storefront — created in minutes.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
