import { Building2, Globe2, BadgeDollarSign, Users } from "lucide-react";

const stats = [
  { label: "Shops added", value: "4,200+", icon: Building2 },
  { label: "Cities operating", value: "180+", icon: Globe2 },
  { label: "Sales with Lookartz", value: "$12.8M", icon: BadgeDollarSign },
  { label: "Active users", value: "95k+", icon: Users },
];

export default function Metrics() {
  return (
    <section className="py-14 md:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map(({ label, value, icon: Icon }) => (
            <div key={label} className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-600/10 text-indigo-600">
                <Icon className="h-6 w-6" />
              </div>
              <div>
                <div className="text-2xl font-bold tracking-tight text-slate-900">{value}</div>
                <div className="text-sm text-slate-600">{label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
