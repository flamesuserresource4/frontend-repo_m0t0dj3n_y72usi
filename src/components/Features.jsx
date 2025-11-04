import { Store, CreditCard, BarChart, Shield } from "lucide-react";

const features = [
  {
    title: "No-code store builder",
    description:
      "Create a beautiful storefront with ready-made blocks. Add products, images, and pricing in minutes.",
    icon: Store,
  },
  {
    title: "Payments-ready",
    description:
      "Secure checkout with trusted providers. Manage orders, taxes, and receipts from one place.",
    icon: CreditCard,
  },
  {
    title: "Analytics that matter",
    description:
      "Understand what sells. Track views, conversions, and repeat customers to grow faster.",
    icon: BarChart,
  },
  {
    title: "Secure & reliable",
    description:
      "Enterprise-grade security, daily backups, and always-on infrastructure so you never miss a sale.",
    icon: Shield,
  },
];

export default function Features() {
  return (
    <section id="features" className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            Everything you need to sell online
          </h2>
          <p className="mt-4 text-slate-600">
            Lookartz brings your physical shop to the web with tools that are powerful, yet simple.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ title, description, icon: Icon }) => (
            <div
              key={title}
              className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-600/10 text-indigo-600">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
