const QUOTES = [
  {
    name: "Mr. Rakesh Singh",
    child: "Parent of Shaurya Singh, Pre-Nursery",
    quote:
      "My child always talks about school and the work he is doing, he is getting on really well. I am so pleased with how my child has progressed, thank you.",
  },
  {
    name: "Mrs. Urvi Rastogi Sharma",
    child: "Parent of Yashil, Pre-Nursery",
    quote:
      "We just wanted to thank all the staff at SKS World School. I am amazed at the great progress Yashil has made since joining in October. He loves being at school and tells me it's 'just like being at home, being part of a family'. I feel the great sense of community that runs throughout the school makes SKS World School very special.",
  },
  {
    name: "Mr. Vivek",
    child: "Parent of Aaradya, Class I-D",
    quote:
      "My ward is doing well in her studies & ma'am has also shown her great efforts.",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="band-maroon">
      <div className="section">
        <div className="mb-10">
          <span className="eyebrow">Parent Voices</span>
          <h2 className="h2">What Parents Say</h2>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {QUOTES.map((q) => (
            <figure
              key={q.name}
              className="flex flex-col rounded-card border border-cream-border bg-white p-6 text-ink shadow-card"
            >
              <span className="font-display text-5xl leading-none text-gold" aria-hidden="true">
                &ldquo;
              </span>
              <blockquote className="-mt-2 grow text-sm text-ink/80">{q.quote}</blockquote>
              <figcaption className="mt-4 border-t border-cream-border pt-4">
                <span className="block font-display text-lg text-brand">{q.name}</span>
                <span className="block text-xs text-ink/60">{q.child}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
