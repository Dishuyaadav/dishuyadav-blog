import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Search, Menu, X, ArrowRight, Clock3, CalendarDays, BookOpen, Mail, SunMoon, ChevronRight } from "lucide-react";

const site = {
  name: "Dishu Yadav",
  tagline: "Essays on Money, Power, Ambition & the World",
  description:
    "Deep, story-driven writing on finance, economics, geopolitics, society, and self-development — crafted with clarity, elegance, and seriousness.",
  email: "hello@dishuyadav.in",
};

const posts = [
  {
    id: "oil-story-no-one-tells",
    category: "Geopolitics",
    title: "The Oil Story No One Tells",
    excerpt:
      "A deep breakdown of crude oil, energy power, the U.S. dollar system, and how nations use resources to shape global influence.",
    date: "March 14, 2026",
    readTime: "12 min read",
    featured: true,
    image:
      "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=1600&q=80",
    content: [
      "Oil is not just a commodity. It is strategy, currency, diplomacy, and war compressed into liquid form. Many people think oil matters only because cars need fuel, factories need diesel, or planes need aviation turbine fuel. But the real story is bigger. Oil decides which countries gain leverage, which alliances survive, and which financial systems remain strong.",
      "After the collapse of the gold standard era, the world needed another anchor. That anchor gradually became the energy system tied to the dollar. If countries needed oil, and oil was largely priced in dollars, then countries needed dollars too. This created demand not only for fuel, but for the currency that sat behind it.",
      "That is why oil is never merely about wells, pipelines, and tankers. It is about power. Whoever influences energy flows influences industry, trade, inflation, military readiness, and the stability of governments. Oil is a physical resource with financial consequences and geopolitical meaning.",
      "To understand the modern world, you do not just study economics. You study the relationship between energy, statecraft, and narrative. Oil sits right at the center of that triangle."
    ],
  },
  {
    id: "why-dollar-still-rules",
    category: "Finance",
    title: "Why the U.S. Dollar Still Rules the World",
    excerpt:
      "From Bretton Woods to the petrodollar era, a clean and simple explanation of how the dollar became the backbone of global trade.",
    date: "March 10, 2026",
    readTime: "10 min read",
    image:
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1400&q=80",
    content: [
      "Currencies become powerful when the world trusts them, needs them, and cannot easily replace them. The dollar achieved all three. It became the language of trade, the reserve of central banks, and the preferred shelter during uncertainty.",
      "Its dominance did not emerge by accident. It was built through industrial strength, military reach, institutional confidence, financial markets, and repeated moments in history where the United States positioned itself at the center of global settlement.",
      "The dollar is strong not because it is perfect, but because alternatives remain weaker, narrower, or less trusted."
    ],
  },
  {
    id: "tariffs-hidden-cost-india",
    category: "Economics",
    title: "Tariffs, Trade Wars, and the Hidden Cost to India",
    excerpt:
      "What tariffs really do, why governments use them, and how policy shocks travel through prices, jobs, and supply chains.",
    date: "March 7, 2026",
    readTime: "9 min read",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1400&q=80",
    content: [
      "Tariffs are often sold as shields. Sometimes they are. But shields are heavy. Someone pays the cost — consumers, exporters, manufacturers, or workers. The visible message is protection. The hidden message is distortion.",
      "For India, the global tariff environment matters because India sits inside a larger web of supply chains, commodity imports, export markets, and investment flows. What happens between major powers does not stay between major powers. It travels."
    ],
  },
  {
    id: "village-boy-bigger-life",
    category: "Ideas",
    title: "The Village Boy’s Guide to Building a Bigger Life",
    excerpt:
      "Ambition, self-respect, discipline, and the long road from survival to scale.",
    date: "March 3, 2026",
    readTime: "8 min read",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=80",
    content: [
      "A bigger life is not built in one dramatic leap. It is built in thousands of small decisions repeated with honesty. Waking up when you said you would. Learning when nobody is praising you. Continuing when your background offers more excuses than advantages.",
      "Ambition is not arrogance. It is responsibility toward your own unrealized potential."
    ],
  },
  {
    id: "oil-deals-middle-east",
    category: "Geopolitics",
    title: "How Oil Deals Changed the Middle East Forever",
    excerpt:
      "Energy alliances, military protection, and the bargains that reshaped the strategic map after gold lost its throne.",
    date: "February 28, 2026",
    readTime: "11 min read",
    image:
      "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&fit=crop&w=1400&q=80",
    content: [
      "No region illustrates the marriage of energy and geopolitics more dramatically than the Middle East. Oil wealth created opportunity, vulnerability, dependence, ambition, and deep foreign interest all at once.",
      "Deals that looked commercial were often strategic. Security arrangements that looked military were often monetary."
    ],
  },
  {
    id: "sip-for-beginners",
    category: "Finance",
    title: "What Every Beginner Should Know About SIP",
    excerpt:
      "A calm guide to disciplined investing, compounding, and why consistency matters more than excitement.",
    date: "February 24, 2026",
    readTime: "7 min read",
    image:
      "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&w=1400&q=80",
    content: [
      "A SIP is less about chasing market magic and more about building an investing habit. You commit a fixed amount regularly, and that discipline protects you from emotional decision-making.",
      "The beauty of a SIP lies in time. It lets small amounts become meaningful not through drama, but through patience."
    ],
  },
];

const categories = ["All", "Finance", "Economics", "Geopolitics", "Ideas"];

function formatPostMeta(post) {
  return `${post.date} • ${post.readTime}`;
}

function Navbar({ currentPage, setCurrentPage, darkMode, setDarkMode }) {
  const [open, setOpen] = useState(false);
  const navItems = [
    ["home", "Home"],
    ["articles", "Articles"],
    ["about", "About"],
    ["newsletter", "Newsletter"],
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-[#f7f3ec]/90 backdrop-blur dark:border-white/10 dark:bg-[#0f0f10]/90">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <button onClick={() => setCurrentPage("home")} className="text-left">
          <p className="text-[10px] uppercase tracking-[0.35em] text-black/45 dark:text-white/45">Dishu Yadav</p>
          <h1 className="text-lg font-semibold tracking-tight text-[#151515] dark:text-white sm:text-xl">Premium Journal</h1>
        </button>

        <nav className="hidden items-center gap-7 md:flex">
          {navItems.map(([key, label]) => (
            <button
              key={key}
              onClick={() => setCurrentPage(key)}
              className={`text-sm transition ${currentPage === key ? "font-semibold text-black dark:text-white" : "text-black/65 hover:text-black dark:text-white/65 dark:hover:text-white"}`}
            >
              {label}
            </button>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="rounded-full border border-black/10 bg-white px-4 py-2 text-sm text-black shadow-sm transition hover:scale-[1.02] dark:border-white/10 dark:bg-white/5 dark:text-white"
          >
            <span className="flex items-center gap-2"><SunMoon className="h-4 w-4" /> Theme</span>
          </button>
          <button
            onClick={() => setCurrentPage("newsletter")}
            className="rounded-full bg-black px-5 py-2.5 text-sm font-medium text-white shadow-sm transition hover:scale-[1.02] dark:bg-white dark:text-black"
          >
            Subscribe
          </button>
        </div>

        <button
          className="rounded-full border border-black/10 p-2 md:hidden dark:border-white/10 dark:text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-black/5 bg-[#f7f3ec] px-5 py-4 dark:border-white/10 dark:bg-[#0f0f10] md:hidden">
          <div className="flex flex-col gap-3">
            {navItems.map(([key, label]) => (
              <button
                key={key}
                onClick={() => {
                  setCurrentPage(key);
                  setOpen(false);
                }}
                className="text-left text-sm font-medium text-black/75 dark:text-white/75"
              >
                {label}
              </button>
            ))}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="mt-2 rounded-full border border-black/10 px-4 py-2 text-sm text-black dark:border-white/10 dark:text-white"
            >
              Toggle Theme
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

function Hero({ setCurrentPage, openPost }) {
  const featured = posts.find((p) => p.featured) || posts[0];

  return (
    <section className="mx-auto grid max-w-7xl gap-8 px-5 pb-14 pt-8 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:pt-12">
      <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} className="overflow-hidden rounded-[34px] bg-[#121212] text-white shadow-2xl">
        <div className="grid h-full lg:grid-cols-[1fr_0.92fr]">
          <div className="p-8 sm:p-10 lg:p-12">
            <div className="inline-flex rounded-full border border-white/15 px-4 py-2 text-[11px] uppercase tracking-[0.25em] text-white/65">
              Featured Essay
            </div>
            <p className="mt-7 text-xs uppercase tracking-[0.3em] text-[#dac8a3]">{featured.category}</p>
            <h2 className="mt-3 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">{featured.title}</h2>
            <p className="mt-5 max-w-xl text-sm leading-8 text-white/72 sm:text-base">{featured.excerpt}</p>
            <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-white/55">
              <span>{featured.date}</span>
              <span className="h-1 w-1 rounded-full bg-white/35" />
              <span>{featured.readTime}</span>
            </div>
            <div className="mt-9 flex flex-wrap gap-4">
              <button
                onClick={() => openPost(featured.id)}
                className="rounded-full bg-[#efe4cf] px-6 py-3 text-sm font-semibold text-black transition hover:scale-[1.02]"
              >
                Read Article
              </button>
              <button
                onClick={() => setCurrentPage("articles")}
                className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Explore Archive
              </button>
            </div>
          </div>
          <div className="min-h-[280px] bg-cover bg-center" style={{ backgroundImage: `url(${featured.image})` }} />
        </div>
      </motion.div>

      <div className="space-y-6">
        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.06 }} className="rounded-[28px] bg-white p-7 shadow-xl ring-1 ring-black/5 dark:bg-white/5 dark:ring-white/10">
          <p className="text-[11px] uppercase tracking-[0.3em] text-black/45 dark:text-white/45">About the Author</p>
          <h3 className="mt-3 text-2xl font-semibold tracking-tight text-black dark:text-white">Writing complex things simply.</h3>
          <p className="mt-4 text-sm leading-7 text-black/68 dark:text-white/70">
            Essays that combine research, narrative, and clarity — made for readers who want depth without confusion.
          </p>
          <button
            onClick={() => setCurrentPage("about")}
            className="mt-6 rounded-full border border-black/10 px-5 py-3 text-sm font-semibold transition hover:bg-black hover:text-white dark:border-white/10 dark:text-white dark:hover:bg-white dark:hover:text-black"
          >
            Know More
          </button>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="rounded-[28px] bg-[#efe4cf] p-7 shadow-xl ring-1 ring-black/5 dark:bg-[#1a1a1c] dark:ring-white/10">
          <p className="text-[11px] uppercase tracking-[0.3em] text-black/45 dark:text-white/45">Editorial Standard</p>
          <ul className="mt-4 space-y-4 text-sm leading-7 text-black/70 dark:text-white/72">
            <li>• Deep research, simple language</li>
            <li>• Premium editorial design</li>
            <li>• Storytelling with intellectual weight</li>
            <li>• Clean reading experience across devices</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}

function SectionHeader({ eyebrow, title, description, action, onAction }) {
  return (
    <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <p className="text-[11px] uppercase tracking-[0.3em] text-black/45 dark:text-white/45">{eyebrow}</p>
        <h3 className="mt-2 text-3xl font-semibold tracking-tight text-black dark:text-white sm:text-4xl">{title}</h3>
      </div>
      <div className="max-w-xl">
        <p className="text-sm leading-7 text-black/62 dark:text-white/65">{description}</p>
        {action && (
          <button onClick={onAction} className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-black dark:text-white">
            {action} <ArrowRight className="h-4 w-4" />
          </button>
        )}
      </div>
    </div>
  );
}

function PostCard({ post, openPost }) {
  return (
    <article className="group overflow-hidden rounded-[30px] bg-white shadow-xl ring-1 ring-black/5 transition duration-300 hover:-translate-y-1 hover:shadow-2xl dark:bg-white/5 dark:ring-white/10">
      <div className="h-56 bg-cover bg-center" style={{ backgroundImage: `url(${post.image})` }} />
      <div className="p-6">
        <div className="mb-5 flex items-center justify-between gap-3">
          <span className="rounded-full bg-[#f3ecde] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-black/75 dark:bg-white/10 dark:text-white/80">
            {post.category}
          </span>
          <span className="text-xs text-black/45 dark:text-white/45">{post.readTime}</span>
        </div>
        <h4 className="text-2xl font-semibold leading-snug tracking-tight text-black transition group-hover:opacity-80 dark:text-white">{post.title}</h4>
        <p className="mt-4 text-sm leading-7 text-black/65 dark:text-white/68">{post.excerpt}</p>
        <div className="mt-8 flex items-center justify-between border-t border-black/5 pt-5 dark:border-white/10">
          <span className="text-sm text-black/45 dark:text-white/45">{post.date}</span>
          <button onClick={() => openPost(post.id)} className="inline-flex items-center gap-2 text-sm font-semibold text-black dark:text-white">
            Read More <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </article>
  );
}

function HomePage({ setCurrentPage, openPost }) {
  return (
    <>
      <Hero setCurrentPage={setCurrentPage} openPost={openPost} />
      <section className="mx-auto max-w-7xl px-5 py-4 lg:px-8 lg:py-8">
        <SectionHeader
          eyebrow="Latest Articles"
          title="The archive of ideas"
          description="Long-form essays for serious readers — designed to feel premium, thoughtful, and memorable."
          action="See all articles"
          onAction={() => setCurrentPage("articles")}
        />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {posts.slice(1, 7).map((post) => (
            <PostCard key={post.id} post={post} openPost={openPost} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-10 lg:px-8 lg:py-14">
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="rounded-[30px] bg-[#121212] p-8 text-white shadow-xl lg:col-span-2">
            <p className="text-[11px] uppercase tracking-[0.3em] text-white/45">Editorial Philosophy</p>
            <h3 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Not fast content. Just work that lasts.</h3>
            <p className="mt-5 max-w-3xl text-sm leading-8 text-white/72 sm:text-base">
              This platform is built for readers who are tired of shallow noise. Every essay is shaped around clarity, conviction, and narrative depth so complex topics feel alive, human, and useful.
            </p>
          </div>
          <div className="rounded-[30px] bg-white p-8 shadow-xl ring-1 ring-black/5 dark:bg-white/5 dark:ring-white/10">
            <p className="text-[11px] uppercase tracking-[0.3em] text-black/45 dark:text-white/45">Reader Promise</p>
            <ul className="mt-4 space-y-4 text-sm leading-7 text-black/70 dark:text-white/70">
              <li>• Strong ideas, simple words</li>
              <li>• Serious visual identity</li>
              <li>• Essays designed for long attention spans</li>
              <li>• A brand that feels premium and timeless</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

function ArticlesPage({ openPost }) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [query, setQuery] = useState("");

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const categoryMatch = activeCategory === "All" || post.category === activeCategory;
      const queryMatch =
        post.title.toLowerCase().includes(query.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(query.toLowerCase()) ||
        post.category.toLowerCase().includes(query.toLowerCase());
      return categoryMatch && queryMatch;
    });
  }, [activeCategory, query]);

  return (
    <section className="mx-auto max-w-7xl px-5 py-10 lg:px-8 lg:py-14">
      <SectionHeader
        eyebrow="Articles"
        title="A premium reading archive"
        description="Explore essays across finance, economics, geopolitics, and ambition through a clean, luxurious reading experience."
      />

      <div className="mb-8 flex flex-col gap-4 rounded-[26px] bg-white p-5 shadow-lg ring-1 ring-black/5 dark:bg-white/5 dark:ring-white/10 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${activeCategory === category
                  ? "bg-black text-white dark:bg-white dark:text-black"
                  : "border border-black/10 bg-transparent text-black/70 dark:border-white/10 dark:text-white/70"
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="relative w-full lg:max-w-sm">
          <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-black/35 dark:text-white/35" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search essays"
            className="h-12 w-full rounded-full border border-black/10 bg-[#f8f4ed] pl-11 pr-4 text-sm outline-none dark:border-white/10 dark:bg-white/5 dark:text-white"
          />
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {filteredPosts.map((post) => (
          <PostCard key={post.id} post={post} openPost={openPost} />
        ))}
      </div>
    </section>
  );
}

function ArticlePage({ post, goBack }) {
  const [progress, setProgress] = useState(0);

  React.useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const current = window.scrollY;
      const next = totalHeight > 0 ? Math.min(100, (current / totalHeight) * 100) : 0;
      setProgress(next);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="pb-16">
      <div className="sticky top-[72px] z-40 h-1 w-full bg-transparent">
        <div className="h-full bg-black transition-all duration-150 dark:bg-white" style={{ width: `${progress}%` }} />
      </div>

      <section className="mx-auto max-w-5xl px-5 pt-8 lg:px-8 lg:pt-12">
        <button onClick={goBack} className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-black/70 dark:text-white/70">
          ← Back to articles
        </button>

        <div className="overflow-hidden rounded-[34px] bg-white shadow-xl ring-1 ring-black/5 dark:bg-white/5 dark:ring-white/10">
          <div className="h-[280px] sm:h-[380px] bg-cover bg-center" style={{ backgroundImage: `url(${post.image})` }} />
          <div className="p-7 sm:p-10 lg:p-14">
            <div className="mb-4 flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-[#f3ecde] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-black/75 dark:bg-white/10 dark:text-white/80">
                {post.category}
              </span>
              <span className="inline-flex items-center gap-1 text-sm text-black/45 dark:text-white/45"><CalendarDays className="h-4 w-4" /> {post.date}</span>
              <span className="inline-flex items-center gap-1 text-sm text-black/45 dark:text-white/45"><Clock3 className="h-4 w-4" /> {post.readTime}</span>
            </div>

            <h1 className="max-w-4xl text-4xl font-semibold leading-tight tracking-tight text-black dark:text-white sm:text-5xl">{post.title}</h1>
            <p className="mt-5 max-w-3xl text-base leading-8 text-black/68 dark:text-white/70">{post.excerpt}</p>

            <div className="mt-10 grid gap-10 lg:grid-cols-[0.78fr_0.22fr]">
              <article className="prose prose-lg max-w-none prose-p:leading-9 prose-p:text-black/78 dark:prose-invert dark:prose-p:text-white/78">
                {post.content.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </article>

              <aside className="rounded-[24px] bg-[#f8f4ed] p-5 ring-1 ring-black/5 dark:bg-white/5 dark:ring-white/10">
                <p className="text-[11px] uppercase tracking-[0.3em] text-black/45 dark:text-white/45">In this article</p>
                <div className="mt-4 space-y-4 text-sm text-black/70 dark:text-white/70">
                  <div className="flex items-center gap-2"><BookOpen className="h-4 w-4" /> Long-form editorial</div>
                  <div className="flex items-center gap-2"><Clock3 className="h-4 w-4" /> {post.readTime}</div>
                  <div className="flex items-center gap-2"><CalendarDays className="h-4 w-4" /> {post.date}</div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function AboutPage() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-10 lg:px-8 lg:py-14">
      <div className="grid gap-8 rounded-[34px] bg-white p-8 shadow-xl ring-1 ring-black/5 dark:bg-white/5 dark:ring-white/10 lg:grid-cols-[0.9fr_1.1fr] lg:p-12">
        <div>
          <p className="text-[11px] uppercase tracking-[0.3em] text-black/45 dark:text-white/45">About</p>
          <h2 className="mt-3 text-4xl font-semibold tracking-tight text-black dark:text-white">Dishu Yadav</h2>
          <p className="mt-4 text-sm leading-8 text-black/68 dark:text-white/70">Writer, researcher, storyteller, and builder of premium digital presence.</p>
        </div>
        <div className="space-y-5 text-base leading-8 text-black/72 dark:text-white/74">
          <p>
            I write deeply researched essays on finance, economics, geopolitics, society, and personal ambition. My work is built for readers who want serious content presented with warmth, elegance, and clarity.
          </p>
          <p>
            This website is designed to look and feel like a top-tier editorial brand: premium layouts, clean hierarchy, thoughtful spacing, and long-form reading comfort.
          </p>
          <p>
            The goal is simple — create a space where complex ideas feel readable, memorable, and beautiful.
          </p>
        </div>
      </div>
    </section>
  );
}

function NewsletterPage() {
  return (
    <section className="mx-auto max-w-5xl px-5 py-10 lg:px-8 lg:py-14">
      <div className="rounded-[36px] bg-[#efe4cf] px-8 py-10 shadow-xl ring-1 ring-black/5 dark:bg-[#1a1a1c] dark:ring-white/10 sm:px-10 sm:py-12 lg:px-14 lg:py-16">
        <p className="text-[11px] uppercase tracking-[0.3em] text-black/45 dark:text-white/45">Newsletter</p>
        <h2 className="mt-3 max-w-3xl text-4xl font-semibold tracking-tight text-black dark:text-white sm:text-5xl">Join readers who want depth, clarity, and better ideas.</h2>
        <p className="mt-5 max-w-3xl text-sm leading-8 text-black/70 dark:text-white/72 sm:text-base">
          Get new essays, reflections, and powerful observations directly in your inbox. No spam. No shallow noise. Just high-quality writing.
        </p>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
          <div className="relative w-full sm:max-w-md">
            <Mail className="pointer-events-none absolute left-5 top-1/2 h-4 w-4 -translate-y-1/2 text-black/35 dark:text-white/35" />
            <input
              type="email"
              placeholder="Enter your email"
              className="h-14 w-full rounded-full border border-black/10 bg-white pl-12 pr-5 text-sm outline-none dark:border-white/10 dark:bg-white/5 dark:text-white"
            />
          </div>
          <button className="h-14 rounded-full bg-black px-8 text-sm font-semibold text-white transition hover:scale-[1.02] dark:bg-white dark:text-black">
            Subscribe Now
          </button>
        </div>
      </div>
    </section>
  );
}

function Footer({ setCurrentPage }) {
  return (
    <footer className="border-t border-black/5 bg-white dark:border-white/10 dark:bg-[#111113]">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-10 text-sm text-black/55 dark:text-white/55 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div>
          <p className="font-semibold text-black dark:text-white">{site.name}</p>
          <p className="mt-1">{site.tagline}</p>
        </div>
        <div className="flex flex-wrap gap-6">
          <button onClick={() => setCurrentPage("home")} className="hover:text-black dark:hover:text-white">Home</button>
          <button onClick={() => setCurrentPage("articles")} className="hover:text-black dark:hover:text-white">Articles</button>
          <button onClick={() => setCurrentPage("about")} className="hover:text-black dark:hover:text-white">About</button>
          <button onClick={() => setCurrentPage("newsletter")} className="hover:text-black dark:hover:text-white">Newsletter</button>
        </div>
      </div>
    </footer>
  );
}

export default function DishuYadavPremiumBlogPackage() {
  const [currentPage, setCurrentPage] = useState("home");
  const [activePostId, setActivePostId] = useState(posts[0].id);
  const [darkMode, setDarkMode] = useState(false);

  const activePost = posts.find((post) => post.id === activePostId) || posts[0];

  const openPost = (postId) => {
    setActivePostId(postId);
    setCurrentPage("article");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="min-h-screen bg-[#f7f3ec] text-[#1a1a18] transition-colors dark:bg-[#0f0f10] dark:text-white">
        <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} darkMode={darkMode} setDarkMode={setDarkMode} />

        {currentPage === "home" && <HomePage setCurrentPage={setCurrentPage} openPost={openPost} />}
        {currentPage === "articles" && <ArticlesPage openPost={openPost} />}
        {currentPage === "article" && <ArticlePage post={activePost} goBack={() => setCurrentPage("articles")} />}
        {currentPage === "about" && <AboutPage />}
        {currentPage === "newsletter" && <NewsletterPage />}

        <Footer setCurrentPage={setCurrentPage} />
      </div>
    </div>
  );
}
