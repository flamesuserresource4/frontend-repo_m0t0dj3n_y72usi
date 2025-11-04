export default function FAQ() {
  const faqs = [
    {
      q: "Do I need technical skills to use Lookartz?",
      a: "No. Lookartz is built for shop owners. Set up your store with guided steps and pre-made sections—no code required.",
    },
    {
      q: "Where do customers buy?",
      a: "Customers browse and purchase directly on the Lookartz website, where all stores are discoverable and easy to shop.",
    },
    {
      q: "Can I offer local pickup or delivery?",
      a: "Yes. Pickup and local delivery options are built-in so you can serve nearby customers effortlessly.",
    },
    {
      q: "How fast can I launch?",
      a: "Most shops publish their first products in under an hour and go live the same day.",
    },
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">Frequently asked questions</h2>
          <p className="mt-3 text-slate-600">
            Everything you need to know about getting your shop online with Lookartz.
          </p>
        </div>
        <div className="mt-10 divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white">
          {faqs.map(({ q, a }) => (
            <div key={q} className="px-6 py-5">
              <h3 className="text-base font-semibold text-slate-900">{q}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
