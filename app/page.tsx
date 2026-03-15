export default function Home() {
  const featuredPosts = [
    {
      category: "Geopolitics",
      title: "The Oil Story No One Tells",
      excerpt:
        "A cinematic long-form breakdown of crude oil, power, the dollar system, and the hidden architecture of the modern world.",
      meta: "March 14, 2026 · 12 min read",
    },
    {
      category: "Finance",
      title: "Why the U.S. Dollar Still Rules the World",
      excerpt:
        "A premium narrative on how one currency became the spine of global trade and strategic influence.",
      meta: "March 10, 2026 · 10 min read",
    },
    {
      category: "Economics",
      title: "Tariffs, Trade Wars, and the Hidden Cost to India",
      excerpt:
        "Protectionism, pressure, pricing, and the real economic consequences behind political language.",
      meta: "March 7, 2026 · 9 min read",
    },
  ];

  const archive = [
    "How Oil Deals Changed the Middle East Forever",
    "The Village Boy's Guide to Building a Bigger Life",
    "What Every Beginner Should Know About SIP",
    "Why Stories Matter More Than Data Alone",
  ];

  const topics = [
    "Finance",
    "Economics",
    "Geopolitics",
    "Power",
    "Society",
    "Ambition",
  ];

  return (
    <main className="min-h-screen bg-[#f6f1e8] text-[#161411]">
      <header className="sticky top-0 z-50 border-b border-black/5 bg-[#f6f1e8]/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
          <div>
            <p className="text-[10px] uppercase tracking-[0.45em] text-black/35">
              Dishu Yadav
            </p>
            <h1 className="mt-1 text-xl font-semibold tracking-tight sm:text-2xl">
              The Editorial Journal
            </h1>
          </div>

          <nav className="hidden items-center gap-8 md:flex">
            {['Home', 'Essays', 'About', 'Archive'].map((item) => (
              <a
                key={item}
                href="#"
                className="text-sm font-medium text-black/65 transition hover:text-black"
              >
                {item}
              </a>
            ))}
          </nav>

          <button className="rounded-full bg-black px-5 py-2.5 text-sm font-medium text-white shadow-sm transition hover:scale-[1.02]">
            Subscribe
          </button>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,0,0,0.04),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(170,130,60,0.16),transparent_28%)]" />
        <div className="mx-auto grid max-w-7xl gap-8 px-6 pb-14 pt-8 lg:grid-cols-[1.2fr_0.8fr] lg:px-10 lg:pb-24 lg:pt-12">
          <div className="relative overflow-hidden rounded-[42px] bg-[#0f0f10] text-white shadow-[0_30px_100px_rgba(0,0,0,0.20)]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.12),transparent_20%),linear-gradient(135deg,rgba(214,189,136,0.12),transparent_35%,rgba(255,255,255,0.03))]" />
            <div className="relative p-8 sm:p-10 lg:p-14 xl:p-16">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] uppercase tracking-[0.28em] text-white/65">
                Featured Editorial
              </div>

              <p className="mt-10 text-xs uppercase tracking-[0.38em] text-[#dcc89f]">
                Money · Power · Ambition · The World
              </p>

              <h2 className="mt-4 max-w-4xl text-5xl font-semibold leading-[0.98] tracking-tight sm:text-6xl xl:text-7xl">
                A blog should not look like a template. It should look like a publication.
              </h2>

              <p className="mt-7 max-w-2xl text-base leading-8 text-white/72 sm:text-lg">
                Deep, story-driven essays on finance, economics, geopolitics, and personal ambition — presented with the calm authority of a premium magazine.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <button className="rounded-full bg-[#ebdcc0] px-7 py-3.5 text-sm font-semibold text-black transition hover:scale-[1.02]">
                  Read the Lead Story
                </button>
                <button className="rounded-full border border-white/12 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10">
                  View Archive
                </button>
              </div>

              <div className="mt-14 grid gap-4 sm:grid-cols-3">
                {[
                  ['Premium', 'Visual identity built to feel editorial, not generic.'],
                  ['Deep', 'Long-form essays designed for serious readers.'],
                  ['Memorable', 'A calm, luxurious layout that makes writing feel important.'],
                ].map(([title, text]) => (
                  <div
                    key={title}
                    className="rounded-[26px] border border-white/10 bg-white/5 p-5 backdrop-blur-sm"
                  >
                    <p className="text-lg font-semibold">{title}</p>
                    <p className="mt-2 text-sm leading-7 text-white/60">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid gap-6">
            <div className="rounded-[34px] bg-white p-7 shadow-[0_20px_60px_rgba(0,0,0,0.08)] ring-1 ring-black/5">
              <p className="text-[11px] uppercase tracking-[0.35em] text-black/38">
                Editorial Note
              </p>
              <h3 className="mt-4 text-3xl font-semibold leading-tight tracking-tight">
                Writing complex things simply — without making them small.
              </h3>
              <p className="mt-4 text-sm leading-8 text-black/65">
                This brand is built around one idea: deep thinking deserves elegant presentation. The goal is not just to publish. The goal is to look serious, feel premium, and read beautifully.
              </p>
            </div>

            <div className="rounded-[34px] bg-[#e8dcc6] p-7 shadow-[0_20px_60px_rgba(0,0,0,0.08)] ring-1 ring-black/5">
              <p className="text-[11px] uppercase tracking-[0.35em] text-black/38">
                Reader Promise
              </p>
              <ul className="mt-4 space-y-4 text-sm leading-7 text-black/68">
                <li>• Elegant design with strong hierarchy</li>
                <li>• Long-form writing that feels intelligent but human</li>
                <li>• Topics that matter beyond daily noise</li>
                <li>• A homepage that feels worthy of your ideas</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-6 lg:px-10 lg:py-10">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[11px] uppercase tracking-[0.35em] text-black/35">
              Lead Stories
            </p>
            <h3 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
              Strong first impressions. Real editorial weight.
            </h3>
          </div>
          <p className="max-w-xl text-sm leading-7 text-black/60">
            The homepage should immediately signal seriousness, taste, and authority. These cards are designed to feel like a premium digital magazine.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <article className="rounded-[34px] bg-white p-8 shadow-[0_20px_60px_rgba(0,0,0,0.08)] ring-1 ring-black/5 sm:p-10">
            <span className="rounded-full bg-[#f1e6d1] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-black/70">
              {featuredPosts[0].category}
            </span>
            <h4 className="mt-6 max-w-3xl text-4xl font-semibold leading-tight tracking-tight">
              {featuredPosts[0].title}
            </h4>
            <p className="mt-5 max-w-2xl text-sm leading-8 text-black/66">
              {featuredPosts[0].excerpt}
            </p>
            <div className="mt-8 flex items-center justify-between border-t border-black/5 pt-5">
              <span className="text-sm text-black/45">{featuredPosts[0].meta}</span>
              <button className="text-sm font-semibold text-black">Read Story →</button>
            </div>
          </article>

          <div className="grid gap-6">
            {featuredPosts.slice(1).map((story) => (
              <article
                key={story.title}
                className="rounded-[30px] bg-white p-7 shadow-[0_20px_60px_rgba(0,0,0,0.08)] ring-1 ring-black/5"
              >
                <span className="rounded-full bg-[#f1e6d1] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-black/70">
                  {story.category}
                </span>
                <h4 className="mt-5 text-2xl font-semibold leading-snug tracking-tight">
                  {story.title}
                </h4>
                <p className="mt-4 text-sm leading-7 text-black/66">{story.excerpt}</p>
                <div className="mt-6 text-sm text-black/45">{story.meta}</div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-10 lg:py-14">
        <div className="rounded-[40px] bg-[#121212] p-8 text-white shadow-[0_30px_100px_rgba(0,0,0,0.18)] sm:p-10 lg:p-14">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-[11px] uppercase tracking-[0.35em] text-white/45">
                Core Topics
              </p>
              <h3 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                A premium publication needs thematic clarity.
              </h3>
              <p className="mt-5 text-sm leading-8 text-white/68">
                The best brands do not feel random. They feel curated. These themes give the website intellectual shape and make the archive feel intentional.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {topics.map((topic) => (
                <span
                  key={topic}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/85"
                >
                  {topic}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-4 lg:px-10 lg:py-8">
        <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
          <div className="rounded-[34px] bg-white p-8 shadow-[0_20px_60px_rgba(0,0,0,0.08)] ring-1 ring-black/5 sm:p-10">
            <p className="text-[11px] uppercase tracking-[0.35em] text-black/35">
              Archive Preview
            </p>
            <h3 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Quiet luxury, not visual chaos.
            </h3>
            <p className="mt-4 max-w-2xl text-sm leading-8 text-black/66">
              Real premium design is less about adding more and more things, and more about spacing, restraint, rhythm, and confidence. This layout is designed to feel expensive because it breathes.
            </p>

            <div className="mt-8 space-y-4">
              {archive.map((item) => (
                <div
                  key={item}
                  className="flex items-center justify-between rounded-[22px] border border-black/5 bg-[#faf7f1] px-5 py-4"
                >
                  <span className="text-sm font-medium text-black/80">{item}</span>
                  <span className="text-black/35">↗</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[34px] bg-[#e8dcc6] p-8 shadow-[0_20px_60px_rgba(0,0,0,0.08)] ring-1 ring-black/5 sm:p-10">
            <p className="text-[11px] uppercase tracking-[0.35em] text-black/35">
              Why this feels better
            </p>
            <div className="mt-5 space-y-5 text-sm leading-8 text-black/68">
              <p>• Bigger headline architecture creates authority.</p>
              <p>• Softer luxury palette makes the brand look expensive.</p>
              <p>• Larger corner radius and deeper shadows add polish.</p>
              <p>• Fewer but stronger sections improve premium perception.</p>
              <p>• Clear hierarchy makes the whole page feel intentional.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16 pt-12 lg:px-10 lg:pb-24 lg:pt-16">
        <div className="overflow-hidden rounded-[40px] bg-white shadow-[0_20px_70px_rgba(0,0,0,0.08)] ring-1 ring-black/5">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
            <div className="p-8 sm:p-10 lg:p-14">
              <p className="text-[11px] uppercase tracking-[0.35em] text-black/35">
                Newsletter
              </p>
              <h3 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
                Build a readership that returns for depth, not noise.
              </h3>
              <p className="mt-5 max-w-2xl text-sm leading-8 text-black/66">
                Get essays, reflections, and sharp observations delivered directly to your inbox. Designed for readers who value clarity, intelligence, and strong narrative thinking.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="h-14 w-full rounded-full border border-black/10 bg-[#faf7f1] px-6 text-sm outline-none sm:max-w-md"
                />
                <button className="h-14 rounded-full bg-black px-8 text-sm font-semibold text-white transition hover:scale-[1.02]">
                  Subscribe Now
                </button>
              </div>
            </div>

            <div className="bg-[linear-gradient(135deg,#111111_0%,#1c1b19_100%)] p-8 text-white sm:p-10 lg:p-14">
              <p className="text-[11px] uppercase tracking-[0.35em] text-white/45">
                Brand Direction
              </p>
              <h4 className="mt-4 text-2xl font-semibold leading-snug tracking-tight">
                The goal is not to look “nice.” The goal is to look undeniable.
              </h4>
              <p className="mt-5 text-sm leading-8 text-white/68">
                A top-tier independent writer’s site needs more than content blocks. It needs conviction in typography, restraint in layout, and confidence in spacing. That is the direction this design is taking.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
