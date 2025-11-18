import { Rocket, Bot, Globe, Megaphone, Wand2, LineChart } from 'lucide-react'

const services = [
  {
    icon: Bot,
    title: 'Автоматизации',
    desc: 'Ние проектираме и внедряваме AI и no-code/low-code автоматизации, които пестят време и пари.'
  },
  {
    icon: Globe,
    title: 'Уебсайтове',
    desc: 'Създаваме бързи, SEO-оптимизирани сайтове с модерен дизайн и висока конверсия.'
  },
  {
    icon: Megaphone,
    title: 'Маркетинг',
    desc: 'Изграждаме фунии, имейл кампании и реклами, за да увеличим трафика и продажбите.'
  },
  {
    icon: LineChart,
    title: 'Консултации',
    desc: 'Откриваме най-големите възможности за растеж и изграждаме план за изпълнение.'
  },
  {
    icon: Wand2,
    title: 'Custom AI',
    desc: 'Персонализирани GPT агенти, ботове и интеграции с вашите системи.'
  },
  {
    icon: Rocket,
    title: 'Go-to-Market',
    desc: 'От стратегия до изпълнение — помагаме да стартирате и скалирате бързо.'
  },
]

export default function Services() {
  return (
    <section id="services" className="relative z-10 mx-auto max-w-7xl px-6 py-20 md:py-28 md:px-10">
      <div className="mb-10 flex items-end justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold text-white md:text-4xl">Какво правим</h2>
          <p className="mt-2 text-slate-300/80">Експертни услуги за растеж, автоматизация и дигитално присъствие</p>
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="group rounded-2xl border border-slate-800/80 bg-slate-900/60 p-6 backdrop-blur transition hover:border-indigo-500/40 hover:bg-slate-900/80">
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-content-center rounded-xl bg-gradient-to-br from-indigo-500/20 to-fuchsia-500/20 text-indigo-300 ring-1 ring-inset ring-indigo-500/30">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="text-lg font-semibold text-white">{title}</h3>
            </div>
            <p className="mt-3 text-slate-300/80">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
