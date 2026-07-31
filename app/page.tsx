import Link from "next/link";

const posts = [
  {
    title: "The Ocean We Become",
    category: "Society",
    time: "12 min read",
    desc: "How collective consciousness shapes the destiny of nations.",
  },
  {
    title: "Hospital Ke Bahar Baitha Ek Insaan",
    category: "Personal Essay",
    time: "9 min read",
    desc: "A story about hope, fear and waiting outside a hospital.",
  },
  {
    title: "Do Naam",
    category: "Memoir",
    time: "8 min read",
    desc: "One name for the world. One name for home.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F7F3EC] text-black">

      {/* Navbar */}

      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-7">

        <Link
          href="/"
          className="text-2xl font-bold tracking-tight"
        >
          Dishu Yadav
        </Link>

        <div className="hidden gap-8 text-sm md:flex">
          <Link href="/">Home</Link>
          <Link href="/essays">Essays</Link>
          <Link href="/about">About</Link>
          <Link href="/archive">Archive</Link>
        </div>

      </nav>

      {/* Hero */}

      <section className="mx-auto mt-6 max-w-6xl px-6">

        <div className="rounded-[36px] bg-black px-10 py-20 text-white">

          <p className="mb-4 uppercase tracking-[0.35em] text-gray-400">
            Editorial Journal
          </p>

          <h1 className="max-w-3xl text-5xl font-bold leading-tight md:text-7xl">
            Essays that explore society, technology,
            economics and the human condition.
          </h1>

          <p className="mt-8 max-w-2xl text-lg text-gray-300">
            Long-form writing crafted with clarity,
            depth and curiosity.
          </p>

          <div className="mt-10 flex gap-4">

            <Link
              href="/essays"
              className="rounded-full bg-white px-6 py-3 font-medium text-black"
            >
              Read Essays
            </Link>

            <Link
              href="/about"
              className="rounded-full border border-white px-6 py-3"
            >
              About
            </Link>

          </div>

        </div>

      </section>

      {/* Latest Essays */}

      <section className="mx-auto mt-20 max-w-6xl px-6">

        <h2 className="mb-10 text-4xl font-bold">
          Latest Essays
        </h2>

        <div className="grid gap-8 md:grid-cols-3">

          {posts.map((post) => (
            <article
              key={post.title}
              className="rounded-3xl bg-white p-8 shadow-sm transition hover:-translate-y-2"
            >
              <div className="mb-5 text-sm text-gray-500">
                {post.category} • {post.time}
              </div>

              <h3 className="text-2xl font-bold">
                {post.title}
              </h3>

              <p className="mt-4 text-gray-600">
                {post.desc}
              </p>

              <button className="mt-8 font-semibold">
                Read →
              </button>

            </article>
          ))}

        </div>

      </section>

      {/* Topics */}

      <section className="mx-auto mt-24 max-w-6xl px-6">

        <h2 className="mb-8 text-3xl font-bold">
          Browse Topics
        </h2>

        <div className="flex flex-wrap gap-4">

          {[
            "Society",
            "Technology",
            "Economics",
            "Geopolitics",
            "Personal Essays",
          ].map((topic) => (
            <span
              key={topic}
              className="rounded-full bg-white px-5 py-3"
            >
              {topic}
            </span>
          ))}

        </div>

      </section>

      {/* Newsletter */}

      <section className="mx-auto mt-24 mb-24 max-w-6xl px-6">

        <div className="rounded-3xl bg-white p-10">

          <h2 className="text-3xl font-bold">
            Join the Newsletter
          </h2>

          <p className="mt-3 max-w-xl text-gray-600">
            Receive new essays directly in your inbox.
            No spam. Just thoughtful writing.
          </p>

          <div className="mt-8 flex flex-col gap-4 md:flex-row">

            <input
              placeholder="Email address"
              className="flex-1 rounded-full border px-5 py-4 outline-none"
            />

            <button className="rounded-full bg-black px-8 py-4 text-white">
              Subscribe
            </button>

          </div>

        </div>

      </section>

    </main>
  );
}
