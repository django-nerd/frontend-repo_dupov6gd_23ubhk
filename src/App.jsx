import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen w-full bg-slate-950">
      {/* Background gradient accents */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute -top-32 left-1/2 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.08),transparent_60%)]" />
        <div className="absolute bottom-0 left-0 right-0 h-72 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
      </div>

      <Navbar />
      <Hero />
      <Services />
      <CTA />

      {/* Footer */}
      <footer className="relative z-10 border-t border-slate-800/60 py-10">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-slate-400">© {new Date().getFullYear()} Pimax AI. All rights reserved.</p>
            <div className="text-sm text-slate-500">Автоматизации • Уебсайтове • Маркетинг • Консултации</div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
