import Image from "next/image";
import Link from "next/link";
import { APP_STORE_LINK, PLAY_STORE_LINK } from "@/lib/constants";
import { AnimateInView } from "@/components/AnimateInView";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-[var(--border)]/60 bg-white/90 backdrop-blur-md animate-fade-in shadow-sm">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center transition-opacity hover:opacity-90">
            <Image
              src="/images/oogyy_wordmark.png"
              alt="Oogyy"
              width={120}
              height={40}
              className="h-8 w-auto md:h-10"
              priority
            />
          </Link>
          <div className="flex items-center gap-6 text-sm font-medium text-[var(--muted)]">
            <a href="#for-travelers" className="transition-colors hover:text-[var(--foreground)]">
              For Travelers
            </a>
            <a href="#for-communities" className="transition-colors hover:text-[var(--foreground)]">
              For Communities
            </a>
            <a href="#download" className="transition-colors hover:text-[var(--foreground)]">
              Download
            </a>
            <Link href="/terms" className="transition-colors hover:text-[var(--foreground)]">
              Terms
            </Link>
            <Link href="/privacy" className="transition-colors hover:text-[var(--foreground)]">
              Privacy
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative flex min-h-screen flex-col items-center justify-center px-6 pt-24 pb-20 text-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero.jpg"
            alt=""
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[var(--foreground)]/30" />
          <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/60 to-white/95" />
        </div>
        <div className="relative z-10 max-w-2xl">
          <h1 className="font-display mb-8 text-4xl font-semibold leading-[1.2] tracking-tight text-[var(--foreground)] sm:text-5xl md:text-6xl animate-fade-in-up animation-delay-100">
            Travel together
          </h1>
          <p className="mb-10 text-base text-[var(--muted)] sm:text-lg animate-fade-in-up animation-delay-200">
            Find your crew. Plan adventures. Explore.
          </p>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row animate-fade-in-up animation-delay-300">
            <a
              href={APP_STORE_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary hover-lift inline-flex h-12 min-w-[160px] items-center justify-center gap-2 rounded-full bg-[var(--primary)] px-5 text-sm font-medium text-white transition-all hover:bg-[var(--primary-dark)]"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.43.07 1.4-.4 2.58-1.13 3.41-.69.8-1.84 1.51-2.95 1.42-.06-1.36.41-2.54 1.12-3.4z" />
              </svg>
              App Store
            </a>
            <a
              href={PLAY_STORE_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="hover-lift inline-flex h-12 min-w-[160px] items-center justify-center gap-2 rounded-full border border-[var(--primary)] bg-transparent px-5 text-sm font-medium text-[var(--primary)] transition-all hover:bg-[var(--primary)] hover:text-white"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" aria-hidden>
                <path fill="currentColor" d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
              </svg>
              Google Play
            </a>
          </div>
        </div>
      </section>

      {/* For Travelers */}
      <section id="for-travelers" className="relative border-t border-[var(--border)] bg-[var(--card-muted)] py-24 px-6">
        <div className="mx-auto max-w-6xl">
          <AnimateInView>
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="font-display mb-4 text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl">
                Oogyy for Travelers
              </h2>
              <p className="text-lg leading-relaxed text-[var(--muted)]">
                Tired of canceled plans or solo trips? Oogyy connects you with travelers ready to explore together. Find a co-traveler or join a trip community — because adventures are better with company.
              </p>
              <ul className="mt-6 space-y-3 text-[var(--muted)]">
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[var(--primary)]" />
                  Find co-travelers who show up
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[var(--primary)]" />
                  No more flaky friends
                </li>
              </ul>
            </div>
            <div className="flex justify-center">
              <div className="hover-lift relative aspect-[4/3] w-full max-w-md overflow-hidden rounded-3xl shadow-xl">
                <Image
                  src="/images/travelers.jpg"
                  alt="Friends traveling together on an adventure"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 448px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--primary)]/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-left">
                  <p className="font-display text-2xl font-bold text-white drop-shadow-md sm:text-3xl">Find your crew</p>
                  <p className="mt-1 text-white/90 text-sm">Download the app to get started</p>
                </div>
              </div>
            </div>
          </div>
          </AnimateInView>
        </div>
      </section>

      {/* For Community Managers */}
      <section id="for-communities" className="relative bg-white py-24 px-6">
        <div className="mx-auto max-w-6xl">
          <AnimateInView>
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div className="order-2 md:order-1 flex justify-center">
              <div className="hover-lift relative aspect-[4/3] w-full max-w-md overflow-hidden rounded-3xl shadow-xl">
                <Image
                  src="/images/community.jpg"
                  alt="Community of people planning and collaborating"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 448px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--primary-dark)]/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-left">
                  <p className="font-display text-2xl font-bold text-white drop-shadow-md sm:text-3xl">Create & manage</p>
                  <p className="mt-1 text-white/90 text-sm">Your community, your rules</p>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="font-display mb-4 text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl">
                Oogyy for Community Managers
              </h2>
              <p className="text-lg leading-relaxed text-[var(--muted)]">
                Create your own travel group on Oogyy — whether it&apos;s for bike rides, vacations, or adventure getaways. Bring like-minded explorers together, plan trips, and choose to keep them open or private.
              </p>
              <ul className="mt-6 space-y-3 text-[var(--muted)]">
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[var(--primary)]" />
                  Create and grow your group
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[var(--primary)]" />
                  Manage trips and members
                </li>
              </ul>
            </div>
          </div>
          </AnimateInView>
        </div>
      </section>

      {/* Stats */}
      <section className="border-t border-[var(--border)] bg-[var(--primary-bg-soft)] py-20 px-6">
        <div className="mx-auto max-w-6xl">
          <AnimateInView>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {[
              { value: "12K+", label: "Communities" },
              { value: "31K+", label: "Members" },
              { value: "1K+", label: "Trips" },
              { value: "1M+", label: "Chats" },
            ].map((stat, i) => (
              <AnimateInView key={stat.label} delay={i * 80}>
              <div className="text-center">
                <p className="font-display text-3xl font-bold text-[var(--primary)] sm:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm font-medium text-[var(--muted)]">{stat.label}</p>
              </div>
              </AnimateInView>
            ))}
          </div>
          </AnimateInView>
        </div>
      </section>

      {/* Travel moments — image strip */}
      <section className="border-t border-[var(--border)] bg-white py-16 px-6">
        <div className="mx-auto max-w-6xl">
          <AnimateInView>
            <p className="font-display mb-8 text-center text-sm font-semibold uppercase tracking-[0.2em] text-[var(--primary)]">
              Adventures await
            </p>
            <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
              {[
                { src: "/images/beach.jpg", alt: "Beach and travel" },
                { src: "/images/hiking.jpg", alt: "Group hiking" },
                { src: "/images/exploration.jpg", alt: "Travel exploration" },
                { src: "/images/camping.jpg", alt: "Camping under the stars" },
              ].map((img) => (
                <div key={img.src} className="hover-lift group relative aspect-[3/4] overflow-hidden rounded-2xl shadow-md">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--primary)]/40 to-transparent" />
                </div>
              ))}
            </div>
          </AnimateInView>
        </div>
      </section>

      {/* Final CTA — Download the app */}
      <section id="download" className="relative bg-gradient-to-b from-[var(--primary-bg-soft)] to-white py-24 px-6">
        <div className="mx-auto max-w-3xl text-center">
          <AnimateInView>
          <h2 className="font-display mb-4 text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl">
            Your next co-traveler is just a tap away
          </h2>
          <p className="mb-10 text-lg text-[var(--muted)]">
            Chat, plan, and travel with joy. Download the Oogyy app and start your adventure.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={APP_STORE_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary hover-lift inline-flex h-14 min-w-[180px] items-center justify-center gap-2 rounded-xl bg-[var(--primary)] px-6 font-display font-semibold text-white shadow-lg transition-all hover:bg-[var(--primary-dark)]"
            >
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.43.07 1.4-.4 2.58-1.13 3.41-.69.8-1.84 1.51-2.95 1.42-.06-1.36.41-2.54 1.12-3.4z" />
              </svg>
              App Store
            </a>
            <a
              href={PLAY_STORE_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="hover-lift inline-flex h-14 min-w-[180px] items-center justify-center gap-2 rounded-xl border-2 border-[var(--primary)] bg-transparent px-6 font-display font-semibold text-[var(--primary)] transition-all hover:bg-[var(--primary)] hover:text-white"
            >
              <svg className="h-6 w-6" viewBox="0 0 24 24" aria-hidden>
                <path fill="currentColor" d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
              </svg>
              Google Play
            </a>
          </div>
          </AnimateInView>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[var(--border)] bg-[var(--foreground)] py-10 px-6">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-white/70">
            © {new Date().getFullYear()} Oogyy. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm font-medium">
            <Link href="/terms" className="text-white/80 transition-colors hover:text-white">
              Terms of Service
            </Link>
            <Link href="/privacy" className="text-white/80 transition-colors hover:text-white">
              Privacy Policy
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
