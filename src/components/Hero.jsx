import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative min-h-[88vh] w-full overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/yji5KWXyD-xKVkWj/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Subtle vignette + brand gradient overlays (don't block interaction) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/40 to-slate-950/90" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_300px_at_20%_20%,rgba(99,102,241,0.25),transparent),radial-gradient(600px_300px_at_80%_30%,rgba(56,189,248,0.18),transparent)]" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-28 pb-20 md:px-10 lg:pt-36">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-400/30 bg-slate-900/40 px-3 py-1 text-xs font-medium text-indigo-200/90 backdrop-blur">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-indigo-400" />
            AI Automation & Growth Studio
          </div>

          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-6xl leading-[1.05]">
            Pimax AI
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-sky-300 to-fuchsia-400"> — Вашият бизнес. Ускорен с AI</span>
          </h1>

          <p className="mt-6 text-lg text-slate-200/80 md:text-xl">
            Автоматизации, уебсайтове, маркетинг и консултации – интегрирани в един мощен поток, за да скалирате по-бързо и по-умно.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a href="#contact" className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-indigo-500 to-fuchsia-500 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-indigo-900/30 transition hover:opacity-90">
              Започни проект
            </a>
            <a href="#services" className="inline-flex items-center justify-center rounded-xl border border-slate-700/70 bg-slate-900/60 px-6 py-3 text-base font-semibold text-slate-200 backdrop-blur transition hover:bg-slate-800/70">
              Виж услугите
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
