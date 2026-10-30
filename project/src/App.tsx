import { useState } from 'react';
import { ArrowDown, ArrowRight, Clock3, Droplets, Menu, Play, Sparkles, X } from 'lucide-react';

const bottleImage = 'https://images.pexels.com/photos/29611647/pexels-photo-29611647.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';

const notes = [
  { label: 'Верхние ноты', name: 'Бергамот · Нероли', detail: 'светлое первое дыхание', color: 'from-[#ffc98e]' },
  { label: 'Сердечные ноты', name: 'Ирис · Жасмин', detail: 'бархатная тишина вечера', color: 'from-[#9db9c3]' },
  { label: 'Базовые ноты', name: 'Сандал · Амбра', detail: 'тёплый след на коже', color: 'from-[#a67b55]' },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showNotes, setShowNotes] = useState(false);

  return (
    <main className="min-h-screen overflow-hidden bg-[#0a1114] text-[#f6efe4]">
      <header className="absolute inset-x-0 top-0 z-30 px-6 py-6 sm:px-10 lg:px-16">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between">
          <a href="#top" className="group flex items-center gap-3" aria-label="Nuit Lumière — в начало">
            <span className="relative block h-11 w-11 overflow-hidden rounded-full border border-white/40 bg-[#dfd1bf] shadow-xl shadow-black/20">
              <img src="/logo.jpg" alt="" className="h-full w-full object-cover" />
            </span>
            <span className="font-serif text-xl tracking-[0.18em] text-white transition-opacity group-hover:opacity-75">Nuit Lumière</span>
          </a>
          <nav className="hidden items-center gap-10 text-[11px] uppercase tracking-[0.26em] text-white/65 md:flex">
            <a className="transition-colors hover:text-white" href="#story">История</a>
            <a className="transition-colors hover:text-white" href="#notes">Ноты</a>
            <a className="transition-colors hover:text-white" href="#ritual">Ритуал</a>
          </nav>
          <button onClick={() => setMenuOpen(!menuOpen)} className="flex h-11 w-11 items-center justify-center rounded-full border border-white/25 bg-black/10 text-white backdrop-blur-sm md:hidden" aria-label={menuOpen ? 'Закрыть меню' : 'Открыть меню'}>
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
          {menuOpen && (
            <nav className="absolute right-6 top-20 flex w-48 flex-col gap-5 rounded-2xl border border-white/15 bg-[#111c20]/95 p-5 text-xs uppercase tracking-[0.2em] shadow-2xl backdrop-blur-xl md:hidden">
              <a href="#story" onClick={() => setMenuOpen(false)}>История</a>
              <a href="#notes" onClick={() => setMenuOpen(false)}>Ноты</a>
              <a href="#ritual" onClick={() => setMenuOpen(false)}>Ритуал</a>
            </nav>
          )}
        </div>
      </header>

      <section id="top" className="relative flex min-h-[760px] items-end overflow-hidden px-6 pb-14 pt-32 sm:px-10 lg:min-h-screen lg:px-16 lg:pb-20">
        <div className="absolute inset-0 bg-[#071014]" />
        <img src="/48a8520e-3618-49a9-bfd3-52b40924466a.png" alt="Элегантная женщина в мягком ночном свете" className="absolute inset-0 h-full w-full object-cover object-center opacity-90 mix-blend-screen" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_65%_38%,rgba(93,171,198,0.14),transparent_24%),linear-gradient(90deg,#071014_4%,rgba(7,16,20,0.58)_43%,rgba(7,16,20,0.13)_100%)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#071014] via-transparent to-[#071014]/20" />
        <div className="firefly left-[12%] top-[27%] h-2 w-2" /><div className="firefly left-[24%] top-[43%] h-1.5 w-1.5 [animation-delay:1.5s]" /><div className="firefly right-[20%] top-[28%] h-2 w-2 [animation-delay:.7s]" /><div className="firefly right-[12%] top-[61%] h-1.5 w-1.5 [animation-delay:2.1s]" /><div className="firefly left-[48%] top-[18%] h-1.5 w-1.5 [animation-delay:1s]" />
        <div className="relative z-10 mx-auto grid w-full max-w-[1400px] items-end gap-12 lg:grid-cols-[1.15fr_.85fr]">
          <div className="max-w-2xl animate-rise">
            <p className="mb-6 flex items-center gap-3 text-[10px] uppercase tracking-[0.35em] text-[#d4b58b]"><span className="h-px w-8 bg-[#d4b58b]" /> Eau de parfum · 01</p>
            <h1 className="font-serif text-[clamp(4.2rem,10vw,9.5rem)] leading-[.83] tracking-[-0.055em] text-[#f8f0e5]">Nuit<br /><em className="ml-[.65em] font-light text-[#a6c8cf]">Lumière</em></h1>
            <p className="mt-9 max-w-md text-base leading-7 text-white/65 sm:text-lg">Аромат, который начинается с шёпота и остаётся мягким светом на коже.</p>
            <div className="mt-10 flex flex-wrap items-center gap-5">
              <a href="#ritual" className="group inline-flex items-center gap-3 rounded-full bg-[#ead7bc] px-6 py-3.5 text-[11px] uppercase tracking-[0.18em] text-[#152125] transition-all hover:bg-white hover:shadow-[0_0_30px_rgba(234,215,188,.25)]">Открыть свой вечер <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" /></a>
              <button onClick={() => setShowNotes(!showNotes)} className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.18em] text-white/65 transition-colors hover:text-white"><span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/30"><Play size={12} fill="currentColor" /></span> Смотреть сцену</button>
            </div>
          </div>
          <div className="hidden justify-self-end pb-2 lg:block">
            <div className="flex items-center gap-4 text-[10px] uppercase tracking-[0.26em] text-white/50 [writing-mode:vertical-rl]"><span>Почувствуй свой вечерний аромат</span><span className="h-16 w-px bg-white/30" /><span>01 — 03</span></div>
          </div>
        </div>
        <a href="#story" className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-white/40 transition-colors hover:text-white md:flex">Листать <ArrowDown size={14} className="animate-bounce" /></a>
      </section>

      <section id="story" className="relative bg-[#f1e9dc] px-6 py-24 text-[#18272a] sm:px-10 lg:px-16 lg:py-32">
        <div className="mx-auto grid max-w-[1240px] gap-16 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
          <div><p className="mb-5 text-[10px] uppercase tracking-[0.32em] text-[#9a7651]">Вечер начинается здесь</p><h2 className="max-w-md font-serif text-5xl leading-[.95] tracking-[-.04em] sm:text-6xl">Свет, который<br /><em className="font-light text-[#76949a]">остаётся</em></h2></div>
          <div className="max-w-xl lg:pb-2"><p className="text-xl leading-8 text-[#536367]">Nuit Lumière создана для тех мгновений, когда день уже стих, а ночь только набирает глубину.</p><p className="mt-6 text-sm leading-7 text-[#788487]">Один жест. Тёплая кожа. Тихая уверенность быть именно собой. Позвольте аромату рассказать остальное.</p></div>
        </div>
      </section>

      <section id="notes" className="bg-[#dfe9e8] px-6 py-24 text-[#142326] sm:px-10 lg:px-16 lg:py-32">
        <div className="mx-auto max-w-[1240px]">
          <div className="mb-14 flex flex-col justify-between gap-6 sm:flex-row sm:items-end"><div><p className="mb-5 text-[10px] uppercase tracking-[0.32em] text-[#71898c]">Композиция</p><h2 className="font-serif text-5xl tracking-[-0.04em] sm:text-6xl">Три слоя<br /><em className="font-light text-[#71898c]">одного вечера</em></h2></div><p className="max-w-xs text-sm leading-6 text-[#627377]">Каждая нота раскрывается медленно, оставляя пространство для вашего собственного звучания.</p></div>
          <div className="grid gap-px overflow-hidden rounded-2xl bg-[#b9cdcc] md:grid-cols-3">{notes.map((note, index) => <article key={note.label} className="group relative min-h-[265px] overflow-hidden bg-[#dfe9e8] p-7 transition-colors hover:bg-[#d4e2e1]"><span className={`absolute -right-10 -top-10 h-36 w-36 rounded-full bg-gradient-to-br ${note.color} to-transparent opacity-30 blur-2xl transition-transform duration-700 group-hover:scale-150`} /><span className="relative text-[10px] uppercase tracking-[0.26em] text-[#789094]">0{index + 1} / {note.label}</span><h3 className="relative mt-16 font-serif text-3xl">{note.name}</h3><p className="relative mt-3 text-sm italic text-[#738487]">{note.detail}</p></article>)}</div>
        </div>
      </section>

      <section id="ritual" className="relative overflow-hidden bg-[#0c171a] px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
        <div className="mx-auto grid max-w-[1240px] items-center gap-14 lg:grid-cols-[1fr_.8fr]">
          <div className="relative order-2 aspect-[4/5] max-w-md overflow-hidden rounded-[180px_180px_20px_20px] border border-white/15 bg-[#19262a] lg:order-1 lg:mx-auto"><img src={bottleImage} alt="Флакон аромата на светлой поверхности" className="h-full w-full object-cover opacity-75 mix-blend-luminosity transition-transform duration-700 hover:scale-105" /><div className="absolute inset-0 bg-gradient-to-t from-[#0c171a] via-transparent to-[#d7c1a0]/10" /><div className="absolute bottom-7 left-7 right-7 flex items-center justify-between border-t border-white/25 pt-4 text-[10px] uppercase tracking-[0.25em] text-white/70"><span>Nuit Lumière</span><span>50 ml</span></div></div>
          <div className="order-1 max-w-xl lg:order-2"><p className="mb-5 flex items-center gap-3 text-[10px] uppercase tracking-[0.32em] text-[#d4b58b]"><Clock3 size={14} /> Ваш вечерний ритуал</p><h2 className="font-serif text-5xl leading-[.95] tracking-[-0.04em] sm:text-7xl">Оставьте<br /><em className="font-light text-[#9ebcc0]">день позади</em></h2><p className="mt-8 max-w-md text-base leading-7 text-white/55">Распылите на точки пульса. Закройте глаза. Дайте свету найти вас.</p><div className="mt-10 flex flex-wrap gap-4"><a href="#notes" className="inline-flex items-center gap-3 rounded-full bg-[#ead7bc] px-6 py-3.5 text-[11px] uppercase tracking-[0.18em] text-[#152125] transition hover:bg-white">Выбрать Nuit Lumière <ArrowRight size={15} /></a><span className="flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-xs text-white/55"><Droplets size={14} /> Eau de parfum</span></div></div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-[#0a1114] px-6 py-8 text-white/45 sm:px-10 lg:px-16"><div className="mx-auto flex max-w-[1400px] flex-col justify-between gap-5 text-[10px] uppercase tracking-[0.22em] sm:flex-row sm:items-center"><span className="font-serif text-base normal-case tracking-[0.14em] text-white/80">Nuit Lumière</span><span>Почувствуй свой вечерний аромат</span><span>© 2024 Nuit Lumière</span></div></footer>
      {showNotes && <div className="fixed inset-0 z-40 flex items-center justify-center bg-[#071014]/80 p-6 backdrop-blur-md" onClick={() => setShowNotes(false)}><div className="relative w-full max-w-2xl overflow-hidden rounded-2xl border border-white/20 bg-[#18272b] shadow-2xl" onClick={(event) => event.stopPropagation()}><button onClick={() => setShowNotes(false)} className="absolute right-5 top-5 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-white/25 text-white/80 hover:bg-white/10" aria-label="Закрыть"><X size={16} /></button><div className="aspect-video bg-black"><img src="/logo.jpg" alt="Ночная сцена Nuit Lumière" className="h-full w-full object-cover opacity-80" /></div><div className="p-7"><div className="mb-3 flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-[#d4b58b]"><Sparkles size={13} /> Nuit Lumière</div><p className="font-serif text-2xl text-white">Почувствуй свой вечерний аромат.</p><p className="mt-3 text-sm leading-6 text-white/55">Тихая сцена, мягкий свет и аромат, который остаётся только вашим.</p></div></div></div>}
    </main>
  );
}

export default App;
