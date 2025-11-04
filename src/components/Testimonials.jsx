import { useEffect, useState } from "react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "We launched our online store on Lookartz in a weekend. Simple, fast, and designed for how local shops actually work.",
    author: "Maya, Bloom & Leaf",
  },
  {
    quote:
      "Our regulars now order pickup online. The setup was frictionless and the storefront looks premium.",
    author: "Jon, Street Brew",
  },
  {
    quote:
      "Inventory and orders are clear and simple. Exactly what we needed to bring our boutique online.",
    author: "Priya, Craft n' Clay",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % testimonials.length), 4000);
    return () => clearInterval(id);
  }, []);

  const current = testimonials[index];

  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-600/10 text-indigo-600">
          <Quote className="h-6 w-6" />
        </div>
        <p className="mt-6 text-xl leading-8 text-slate-800 md:text-2xl">“{current.quote}”</p>
        <p className="mt-3 text-sm font-medium text-slate-500">{current.author}</p>

        <div className="mt-6 flex justify-center gap-2">
          {testimonials.map((_, i) => (
            <span
              key={i}
              className={`h-2 w-2 rounded-full ${i === index ? "bg-indigo-600" : "bg-slate-300"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
