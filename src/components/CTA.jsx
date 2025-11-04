import { Rocket } from "lucide-react";

export default function CTA() {
  return (
    <section id="get-started" className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-600 via-fuchsia-500 to-rose-500">
          <div className="px-8 py-12 md:px-12 md:py-16">
            <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/90 ring-1 ring-white/20">
                  <Rocket className="h-4 w-4" />
                  Start in minutes
                </div>
                <h3 className="mt-4 text-2xl font-bold text-white md:text-3xl">
                  Open your Lookartz store today
                </h3>
                <p className="mt-2 max-w-xl text-white/90">
                  Create your online store and let customers browse and buy on the Lookartz website.
                </p>
              </div>
              <a
                href="#get-started"
                className="inline-flex items-center justify-center rounded-lg bg-white px-5 py-3 font-medium text-slate-900 shadow-sm transition hover:bg-white/90"
              >
                Get started — it’s free
              </a>
            </div>
          </div>
        </div>
        <p className="mt-6 text-center text-xs text-slate-500">
          By continuing you agree to the Terms and Privacy Policy.
        </p>
      </div>
    </section>
  );
}
