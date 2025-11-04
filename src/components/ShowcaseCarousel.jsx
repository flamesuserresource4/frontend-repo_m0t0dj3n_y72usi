import { useRef } from "react";
import { ChevronLeft, ChevronRight, ShoppingBag, Star } from "lucide-react";

const stores = [
  {
    name: "Bloom & Leaf Florist",
    category: "Flowers",
    rating: 4.9,
    img: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=1600&auto=format&fit=crop",
  },
  {
    name: "Street Brew Coffee",
    category: "Cafe",
    rating: 4.8,
    img: "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?q=80&w=1600&auto=format&fit=crop",
  },
  {
    name: "Craft n' Clay",
    category: "Home & Decor",
    rating: 4.7,
    img: "https://images.unsplash.com/photo-1493666438817-866a91353ca9?q=80&w=1600&auto=format&fit=crop",
  },
  {
    name: "Peak Performance",
    category: "Sportswear",
    rating: 4.8,
    img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1600&auto=format&fit=crop",
  },
  {
    name: "Petal & Pine Bakery",
    category: "Bakery",
    rating: 4.9,
    img: "https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=1600&auto=format&fit=crop",
  },
];

export default function ShowcaseCarousel() {
  const trackRef = useRef(null);

  const scrollBy = (amount) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
              Storefronts built on Lookartz
            </h2>
            <p className="mt-2 text-slate-600">
              Clean, modern, and fast — crafted for local businesses.
            </p>
          </div>
          <div className="hidden gap-2 md:flex">
            <button
              aria-label="Previous"
              onClick={() => scrollBy(-360)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-700 shadow-sm hover:bg-slate-50"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              aria-label="Next"
              onClick={() => scrollBy(360)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-700 shadow-sm hover:bg-slate-50"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="mt-8 overflow-hidden">
          <div
            ref={trackRef}
            className="flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {stores.map((s) => (
              <article
                key={s.name}
                className="group relative h-64 w-72 flex-none snap-start overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
              >
                <img
                  src={s.img}
                  alt={s.name}
                  className="h-40 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="p-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-slate-900">{s.name}</h3>
                    <div className="flex items-center gap-1 text-amber-500">
                      <Star className="h-4 w-4 fill-current" />
                      <span className="text-sm font-medium text-slate-700">{s.rating}</span>
                    </div>
                  </div>
                  <p className="mt-1 text-sm text-slate-600">{s.category}</p>
                  <div className="mt-3 inline-flex items-center gap-2 text-sm text-indigo-600">
                    <ShoppingBag className="h-4 w-4" />
                    Shop this style
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
