export default function CTA() {
  return (
    <section id="contact" className="relative z-10 mx-auto max-w-7xl px-6 pb-24 md:px-10">
      <div className="overflow-hidden rounded-3xl border border-indigo-500/30 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 p-8 shadow-2xl ring-1 ring-indigo-500/20 md:p-12">
        <div className="flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <h3 className="text-2xl font-bold text-white md:text-3xl">
              Готови ли сте да ускорим бизнеса ви с AI?
            </h3>
            <p className="mt-2 max-w-xl text-slate-300/85">
              Ще изградим правилната система: автоматизации, уебсайт и маркетинг — под един покрив.
            </p>
          </div>

          <a
            href="mailto:hello@pimax.ai"
            className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-indigo-500 to-fuchsia-500 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-indigo-900/30 transition hover:opacity-90"
          >
            Свържи се с нас
          </a>
        </div>
      </div>
    </section>
  )
}
