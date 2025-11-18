import { Menu } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="relative z-20">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-indigo-500 to-fuchsia-600 shadow-lg shadow-indigo-900/30" />
          <span className="text-white/90 font-semibold tracking-tight">Pimax AI</span>
        </div>

        <div className="hidden items-center gap-8 text-sm md:flex">
          <a href="#services" className="text-slate-300 hover:text-white transition">Услуги</a>
          <a href="#work" className="text-slate-300 hover:text-white transition">Проекти</a>
          <a href="#contact" className="text-slate-300 hover:text-white transition">Контакт</a>
        </div>

        <button className="md:hidden rounded-lg border border-slate-700/60 p-2 text-slate-200">
          <Menu className="h-5 w-5" />
        </button>
      </nav>
    </header>
  )
}
