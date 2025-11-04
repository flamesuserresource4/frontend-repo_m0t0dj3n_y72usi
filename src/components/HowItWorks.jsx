import { User, Settings, ShoppingBag } from "lucide-react";

const steps = [
  {
    title: "Sign up",
    description: "Create a Lookartz account for your shop in a few clicks.",
    icon: User,
  },
  {
    title: "Set up your store",
    description:
      "Add products, photos, prices, and pickup/delivery options. Customize your look.",
    icon: Settings,
  },
  {
    title: "Go live & sell",
    description:
      "Customers discover and buy from your store directly on the Lookartz website.",
    icon: ShoppingBag,
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            How Lookartz works
          </h2>
          <p className="mt-4 text-slate-600">
            Turn your offline shop into an online storefront in three simple steps.
          </p>
        </div>

        <ol className="mt-12 grid gap-6 md:grid-cols-3">
          {steps.map(({ title, description, icon: Icon }, idx) => (
            <li key={title} className="relative">
              <div className="h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-fuchsia-600/10 text-fuchsia-600">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="ml-auto text-sm font-semibold text-slate-400">0{idx + 1}</div>
                </div>
                <h3 className="mt-4 text-lg font-semibold text-slate-900">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
