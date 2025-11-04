import { useEffect, useRef } from "react";

const logos = [
  { name: "Bloom & Leaf", src: "https://dummyimage.com/140x40/111827/ffffff&text=Bloom+%26+Leaf" },
  { name: "Street Brew", src: "https://dummyimage.com/140x40/111827/ffffff&text=Street+Brew" },
  { name: "Craft n' Clay", src: "https://dummyimage.com/140x40/111827/ffffff&text=Craft+n'+Clay" },
  { name: "Peak Performance", src: "https://dummyimage.com/140x40/111827/ffffff&text=Peak+Performance" },
  { name: "Petal&Pine", src: "https://dummyimage.com/140x40/111827/ffffff&text=Petal+%26+Pine" },
  { name: "Urban Greens", src: "https://dummyimage.com/140x40/111827/ffffff&text=Urban+Greens" },
  { name: "Bakehouse 27", src: "https://dummyimage.com/140x40/111827/ffffff&text=Bakehouse+27" },
  { name: "Cycle City", src: "https://dummyimage.com/140x40/111827/ffffff&text=Cycle+City" },
];

export default function LogoCarousel() {
  const trackRef = useRef(null);

  // Duplicate for seamless loop
  const items = [...logos, ...logos, ...logos];

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let raf;
    const speed = 0.5; // px per frame
    const animate = () => {
      track.scrollLeft += speed;
      if (track.scrollLeft >= track.scrollWidth / 3) {
        track.scrollLeft = 0;
      }
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <section className="py-12">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-center text-xs font-medium uppercase tracking-wider text-slate-500">Shops live on Lookartz</p>
        <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white/70 p-4 backdrop-blur">
          <div
            ref={trackRef}
            className="flex items-center gap-10 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            style={{ scrollBehavior: "auto" }}
          >
            {items.map((logo, idx) => (
              <div key={`${logo.name}-${idx}`} className="shrink-0 opacity-70 transition hover:opacity-100">
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="h-8 w-auto grayscale"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
