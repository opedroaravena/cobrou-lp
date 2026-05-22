import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { LogoCobrou } from './LogoCobrou';
import { FAQItem } from './components/landing/FAQItem';
import { ProductMockPanel } from './components/landing/ProductMocks';

type ProductTab = 'lembretes' | 'pagamentos' | 'visao';

const NAV = [
  { label: 'Produto', href: '#produto' },
  { label: 'Como funciona', href: '#como-funciona' },
  { label: 'Preços', href: '#precos' },
  { label: 'FAQ', href: '#faq' },
];

const PRODUCT_TABS: { id: ProductTab; label: string; description: string }[] = [
  {
    id: 'lembretes',
    label: 'Lembretes automáticos',
    description: 'O Cobrou envia a cobrança no WhatsApp no dia certo, sem você precisar lembrar.',
  },
  {
    id: 'pagamentos',
    label: 'Pagamentos registrados',
    description: 'Registre PIX, dinheiro ou cartão em segundos e mantenha o histórico organizado.',
  },
  {
    id: 'visao',
    label: 'Visão do mês',
    description: 'Veja receita prevista, recebido e atraso em um painel que atualiza com cada pagamento.',
  },
];

const STEPS = [
  {
    n: '01',
    title: 'Cadastre seus alunos',
    desc: 'Nome, telefone e valor da mensalidade. Leva menos de um minuto por aluno.',
  },
  {
    n: '02',
    title: 'Defina valor e vencimento',
    desc: 'Escolha o dia da cobrança. O Cobrou agenda os lembretes automaticamente.',
  },
  {
    n: '03',
    title: 'O Cobrou cobra automaticamente no WhatsApp',
    desc: 'Lembretes saem no canal que o aluno já usa. Sem app novo, sem constrangimento.',
  },
  {
    n: '04',
    title: 'Você registra o pagamento e acompanha tudo no painel',
    desc: 'PIX, dinheiro ou cartão. O dashboard mostra quem pagou, quem pendurou e quanto entrou.',
  },
];

const AUDIENCES = [
  {
    title: 'Jiu-jitsu e artes marciais',
    phrase: 'Para academias pequenas que ainda cobram mensalidade no improviso.',
  },
  {
    title: 'Professores particulares',
    phrase: 'Para quem recebe mensalidade e ainda controla tudo no WhatsApp.',
  },
  {
    title: 'Personal trainers',
    phrase: 'Para quem tem poucos alunos, mas não pode perder nenhum pagamento.',
  },
  {
    title: 'Yoga e pilates',
    phrase: 'Para studios enxutos que precisam de clareza financeira sem ERP.',
  },
  {
    title: 'Dança e música',
    phrase: 'Para quem vive de recorrência e não quer planilha paralela.',
  },
  {
    title: 'Idiomas e reforço escolar',
    phrase: 'Para quem cobra por turma ou aluno e precisa ver o mês fechado.',
  },
];

const BEFORE = [
  'Cobrança manual toda semana',
  'Planilha sempre atrasada',
  'Conversa perdida no WhatsApp',
  'Aluno que esquece e você só descobre depois',
];

const AFTER = [
  'Lembrete automático no dia certo',
  'Dashboard atualizado em tempo real',
  'Pagamento registrado no mesmo lugar',
  'Atraso visível antes de virar prejuízo',
];

const PLANS = [
  {
    name: 'Começo',
    students: 'Até 30 alunos',
    price: 'R$ 29,90',
    highlight: false,
    features: [
      'Lembretes automáticos',
      'Dashboard simples',
      'Registro manual de pagamentos',
    ],
  },
  {
    name: 'Crescendo',
    students: 'Até 50 alunos',
    price: 'R$ 49,90',
    highlight: true,
    features: [
      'Tudo do Começo',
      'Resumo semanal',
      'Filtros de cobrança',
    ],
  },
  {
    name: 'Profissional',
    students: 'Até 100 alunos',
    price: 'R$ 79,90',
    highlight: false,
    features: [
      'Tudo do Crescendo',
      'Mais volume de cobranças',
      'Ideal para studios e equipes maiores',
    ],
  },
];

const FAQS = [
  {
    q: 'Preciso ter CNPJ?',
    a: 'Não para começar. O Cobrou foi pensado para pequenos negócios e profissionais que ainda estão se organizando.',
  },
  {
    q: 'O aluno precisa baixar aplicativo?',
    a: 'Não. Ele recebe tudo pelo WhatsApp, no canal que já usa no dia a dia.',
  },
  {
    q: 'Funciona com Pix?',
    a: 'Sim. Você registra pagamentos por Pix, dinheiro ou cartão. Integração automática com Pix está em desenvolvimento.',
  },
  {
    q: 'Isso substitui um sistema de academia?',
    a: 'Não. O Cobrou é para quem precisa de cobrança simples — não de catraca, treino, CRM ou ERP.',
  },
  {
    q: 'Posso cancelar quando quiser?',
    a: 'Sim. Sem fidelidade e sem burocracia.',
  },
];

export function LandingPage() {
  const [productTab, setProductTab] = useState<ProductTab>('lembretes');
  const [menuOpen, setMenuOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', whatsapp: '', business: '' });

  function handleNavClick() {
    setMenuOpen(false);
  }

  function handleFormSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (form.name.trim() && form.whatsapp.trim() && form.business.trim()) {
      setFormSubmitted(true);
    }
  }

  return (
    <div className="min-h-screen overflow-x-hidden bg-[var(--color-surface)] text-[var(--color-ink)]">
      <BackgroundGrid />

      <header className="fixed top-0 left-0 right-0 z-50 border-b border-black/5 bg-[rgba(248,247,245,0.78)] backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-6">
          <a href="#" className="shrink-0" aria-label="Cobrou — início">
            <LogoCobrou size={26} />
          </a>

          <nav className="hidden items-center gap-10 md:flex" aria-label="Principal">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-[15px] text-black/55 transition-colors hover:text-black"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#lista"
              className="hidden h-11 items-center rounded-full bg-[var(--color-viper)] px-5 text-sm font-medium text-white transition-all hover:opacity-90 sm:inline-flex"
            >
              Entrar na lista
            </a>
            <button
              type="button"
              onClick={() => setMenuOpen((v) => !v)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-black md:hidden"
              aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
              aria-expanded={menuOpen}
            >
              <span className="text-xl leading-none">{menuOpen ? '×' : '≡'}</span>
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="border-t border-black/6 bg-[var(--color-surface)] px-6 py-4 md:hidden">
            <nav className="flex flex-col gap-1">
              {NAV.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={handleNavClick}
                  className="py-2.5 text-[15px] text-black/70"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#lista"
                onClick={handleNavClick}
                className="mt-3 inline-flex h-11 w-fit items-center rounded-full bg-[var(--color-viper)] px-5 text-sm font-medium text-white"
              >
                Entrar na lista
              </a>
            </nav>
          </div>
        )}
      </header>

      <main>
        {/* A) Hero */}
        <section className="relative pt-32 pb-24 sm:pt-40 sm:pb-32">
          <Glow />
          <div className="relative z-10 mx-auto max-w-7xl px-6">
            <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
              <div>
                <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-black/6 bg-white/70 px-3 py-1 shadow-[0_4px_24px_rgba(0,0,0,0.03)] backdrop-blur-sm">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[var(--color-neon)]" />
                  <span className="text-[13px] font-medium tracking-[-0.02em] text-black/60">
                    WhatsApp → pagamento → painel atualizado
                  </span>
                </div>

                <h1 className="max-w-[720px] text-[2.5rem] font-semibold leading-[0.95] tracking-[-0.06em] sm:text-[3.5rem] md:text-[4rem]">
                  Cobranças por WhatsApp.
                  <br />
                  Pagamentos no painel.
                  <br />
                  <span className="text-black/35">Seus alunos em dia.</span>
                </h1>

                <p className="mt-8 max-w-[600px] text-[18px] leading-[1.7] tracking-[-0.02em] text-black/50 sm:text-[20px]">
                  O Cobrou envia lembretes automáticos, registra pagamentos por PIX, dinheiro ou
                  cartão e mostra o que entrou no mês sem você precisar caçar conversa antiga.
                </p>

                <div className="mt-10 flex flex-wrap gap-4">
                  <a
                    href="#lista"
                    className="group inline-flex h-14 items-center gap-2 rounded-2xl bg-[var(--color-viper)] px-7 text-[15px] font-medium text-white shadow-[0_12px_40px_rgba(26,71,42,0.18)] transition-all hover:-translate-y-px"
                  >
                    Entrar na lista
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                  <a
                    href="#produto"
                    className="inline-flex h-14 items-center rounded-2xl border border-black/8 bg-white/70 px-7 text-[15px] font-medium text-black/70 backdrop-blur-sm transition-all hover:bg-white"
                  >
                    Ver como funciona
                  </a>
                </div>

                <div className="mt-14 flex flex-wrap items-center gap-8 text-sm text-black/40">
                  <div>
                    <p className="text-[26px] font-semibold tracking-[-0.05em] text-black">
                      WhatsApp
                    </p>
                    <p>cobrança automática</p>
                  </div>
                  <div className="hidden h-10 w-px bg-black/8 sm:block" />
                  <div>
                    <p className="text-[26px] font-semibold tracking-[-0.05em] text-black">
                      Painel
                    </p>
                    <p>visão do mês em tempo real</p>
                  </div>
                </div>
              </div>

              <HeroMock />
            </div>
          </div>
        </section>

        {/* B) Produto */}
        <section id="produto" className="scroll-mt-24 border-t border-black/5 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6">
            <SectionEyebrow>Produto</SectionEyebrow>
            <h2 className="mt-4 max-w-2xl text-[2rem] font-semibold leading-[1.05] tracking-[-0.05em] sm:text-[2.75rem]">
              Tudo o que você precisa para não perder mensalidade no improviso.
            </h2>
            <p className="mt-5 max-w-2xl text-[17px] leading-[1.7] text-black/50">
              O Cobrou automatiza cobranças pelo WhatsApp e atualiza o painel financeiro de
              pequenos negócios que vivem de recorrência.
            </p>

            <div className="mt-16 grid gap-12 lg:grid-cols-[minmax(0,380px)_1fr] lg:gap-16">
              <div className="flex flex-col gap-3">
                {PRODUCT_TABS.map((tab) => (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setProductTab(tab.id)}
                    className={`rounded-[20px] border p-5 text-left transition-all duration-300 ${
                      productTab === tab.id
                        ? 'border-[var(--color-viper)]/25 bg-white shadow-[0_12px_40px_rgba(26,71,42,0.08)]'
                        : 'border-black/6 bg-white/50 hover:border-black/12 hover:bg-white/80'
                    }`}
                  >
                    <p className="text-[15px] font-medium tracking-[-0.02em]">{tab.label}</p>
                    <p className="mt-2 text-[14px] leading-[1.6] text-black/45">
                      {tab.description}
                    </p>
                  </button>
                ))}
              </div>

              <ProductMockPanel tab={productTab} />
            </div>
          </div>
        </section>

        {/* C) Como funciona */}
        <section
          id="como-funciona"
          className="scroll-mt-24 border-t border-black/5 bg-white/40 py-24 sm:py-32"
        >
          <div className="mx-auto max-w-7xl px-6">
            <SectionEyebrow>Como funciona</SectionEyebrow>
            <h2 className="mt-4 max-w-xl text-[2rem] font-semibold tracking-[-0.05em] sm:text-[2.5rem]">
              Quatro passos. Cinco minutos.
            </h2>

            <div className="relative mt-16">
              <div className="absolute left-0 right-0 top-8 hidden h-px bg-black/8 lg:block" />
              <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {STEPS.map((step) => (
                  <li
                    key={step.n}
                    className="group relative rounded-[24px] border border-black/6 bg-white/70 p-6 backdrop-blur-xl transition-all hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(0,0,0,0.06)]"
                  >
                    <span className="relative z-10 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--color-surface)] text-[12px] font-medium text-black/50">
                      {step.n}
                    </span>
                    <p className="relative z-10 mt-5 text-[16px] font-medium tracking-[-0.02em]">
                      {step.title}
                    </p>
                    <p className="relative z-10 mt-3 text-[14px] leading-[1.65] text-black/45">
                      {step.desc}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* D) Para quem é */}
        <section className="border-t border-black/5 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6">
            <SectionEyebrow>Para quem é</SectionEyebrow>
            <h2 className="mt-4 max-w-2xl text-[2rem] font-semibold tracking-[-0.05em] sm:text-[2.5rem]">
              Feito para quem vive de mensalidade.
            </h2>

            <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {AUDIENCES.map((item) => (
                <li
                  key={item.title}
                  className="rounded-[24px] border border-black/6 bg-white/60 p-6 backdrop-blur-xl transition-all hover:-translate-y-1 hover:border-black/10 hover:bg-white hover:shadow-[0_12px_40px_rgba(0,0,0,0.05)]"
                >
                  <p className="text-[16px] font-medium tracking-[-0.02em]">{item.title}</p>
                  <p className="mt-3 text-[14px] leading-[1.65] text-black/45">{item.phrase}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* E) Antes vs Depois */}
        <section className="border-t border-black/5 bg-white/40 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6">
            <SectionEyebrow>Antes e depois</SectionEyebrow>
            <h2 className="mt-4 max-w-2xl text-[2rem] font-semibold tracking-[-0.05em] sm:text-[2.5rem]">
              Do improviso no WhatsApp para controle financeiro claro.
            </h2>

            <div className="mt-14 grid gap-6 md:grid-cols-2">
              <ComparisonCard title="Antes" items={BEFORE} variant="before" />
              <ComparisonCard title="Depois com Cobrou" items={AFTER} variant="after" />
            </div>
          </div>
        </section>

        {/* F) Pricing */}
        <section id="precos" className="scroll-mt-24 border-t border-black/5 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6">
            <SectionEyebrow>Preços</SectionEyebrow>
            <h2 className="mt-4 max-w-xl text-[2rem] font-semibold tracking-[-0.05em] sm:text-[2.5rem]">
              Planos simples. Sem surpresa.
            </h2>
            <p className="mt-4 text-[16px] text-black/45">Cancele quando quiser.</p>

            <div className="mt-14 grid gap-5 lg:grid-cols-3">
              {PLANS.map((plan) => (
                <div
                  key={plan.name}
                  className={`flex flex-col rounded-[28px] border p-8 transition-all hover:-translate-y-1 ${
                    plan.highlight
                      ? 'border-[var(--color-viper)]/30 bg-[var(--color-viper)] text-white shadow-[0_20px_60px_rgba(26,71,42,0.2)]'
                      : 'border-black/6 bg-white/70 hover:shadow-[0_16px_48px_rgba(0,0,0,0.06)]'
                  }`}
                >
                  {plan.highlight && (
                    <span className="mb-4 text-[11px] font-medium uppercase tracking-[0.14em] text-white/70">
                      Mais escolhido
                    </span>
                  )}
                  {!plan.highlight && <span className="mb-4 block h-[18px]" aria-hidden />}
                  <p className="text-[17px] font-medium">{plan.name}</p>
                  <p className={`mt-1 text-[14px] ${plan.highlight ? 'text-white/65' : 'text-black/45'}`}>
                    {plan.students}
                  </p>
                  <p className="mt-8 text-[2rem] font-semibold tracking-[-0.05em]">
                    {plan.price}
                    <span className={`ml-1 text-[14px] font-normal ${plan.highlight ? 'text-white/60' : 'text-black/40'}`}>
                      /mês
                    </span>
                  </p>
                  <ul className={`mt-6 flex-1 space-y-2.5 text-[14px] ${plan.highlight ? 'text-white/75' : 'text-black/50'}`}>
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2">
                        <span className={plan.highlight ? 'text-[var(--color-neon)]' : 'text-[var(--color-viper-light)]'}>
                          —
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#lista"
                    className={`mt-8 inline-flex h-11 w-fit items-center rounded-full px-5 text-[14px] font-medium transition-all ${
                      plan.highlight
                        ? 'bg-white text-[var(--color-viper)] hover:opacity-90'
                        : 'border border-black/10 text-black/70 hover:bg-black/[0.03]'
                    }`}
                  >
                    Entrar na lista
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* G) FAQ */}
        <section id="faq" className="scroll-mt-24 border-t border-black/5 bg-white/40 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-12 lg:grid-cols-[280px_1fr] lg:gap-20">
              <div>
                <SectionEyebrow>FAQ</SectionEyebrow>
                <h2 className="mt-4 text-[2rem] font-semibold tracking-[-0.05em] sm:text-[2.25rem]">
                  Perguntas frequentes
                </h2>
              </div>
              <div>
                {FAQS.map((item, i) => (
                  <FAQItem key={item.q} question={item.q} answer={item.a} defaultOpen={i === 0} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* H) Lista */}
        <section id="lista" className="scroll-mt-24 border-t border-black/5 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mx-auto max-w-xl">
              <SectionEyebrow>Lista de espera</SectionEyebrow>
              <h2 className="mt-4 text-[2rem] font-semibold tracking-[-0.05em] sm:text-[2.75rem]">
                Quer testar o Cobrou antes de todo mundo?
              </h2>
              <p className="mt-5 text-[17px] leading-[1.7] text-black/50">
                Deixe seus dados. Avisamos quando a primeira versão estiver disponível.
              </p>

              {formSubmitted ? (
                <div className="mt-10 rounded-[24px] border border-[var(--color-viper)]/20 bg-white/80 p-8 backdrop-blur-xl">
                  <p className="text-[18px] font-medium tracking-[-0.02em] text-[var(--color-viper)]">
                    Pronto. Vamos te chamar quando a primeira versão estiver disponível.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="mt-10 space-y-4">
                  <FormField
                    label="Nome"
                    value={form.name}
                    onChange={(v) => setForm((f) => ({ ...f, name: v }))}
                    placeholder="Seu nome"
                  />
                  <FormField
                    label="WhatsApp"
                    value={form.whatsapp}
                    onChange={(v) => setForm((f) => ({ ...f, whatsapp: v }))}
                    placeholder="(11) 99999-9999"
                  />
                  <FormField
                    label="Tipo de negócio"
                    value={form.business}
                    onChange={(v) => setForm((f) => ({ ...f, business: v }))}
                    placeholder="Ex.: academia de jiu-jitsu, inglês, personal..."
                  />
                  <button
                    type="submit"
                    className="mt-2 h-14 w-full rounded-2xl bg-[var(--color-viper)] text-[15px] font-medium text-white transition-all hover:-translate-y-px hover:opacity-95 sm:w-auto sm:px-10"
                  >
                    Quero testar o Cobrou
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-black/5 py-12">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 sm:flex-row sm:items-center sm:justify-between">
          <LogoCobrou size={24} />
          <p className="text-[13px] text-black/40">© 2026 Cobrou</p>
          <div className="flex gap-8">
            <a href="#" className="text-[13px] text-black/40 transition-colors hover:text-black">
              Privacidade
            </a>
            <a href="#" className="text-[13px] text-black/40 transition-colors hover:text-black">
              Termos
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[13px] font-medium uppercase tracking-[0.2em] text-[var(--color-viper-mid)]">
      {children}
    </p>
  );
}

function FormField({
  label,
  value,
  onChange,
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder: string;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-[13px] font-medium text-black/55">{label}</span>
      <input
        type="text"
        required
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="h-12 w-full rounded-2xl border border-black/8 bg-white/80 px-4 text-[15px] outline-none transition-[border-color,box-shadow] placeholder:text-black/30 focus:border-[var(--color-viper-light)]/50 focus:ring-2 focus:ring-[var(--color-viper)]/10"
      />
    </label>
  );
}

function ComparisonCard({
  title,
  items,
  variant,
}: {
  title: string;
  items: string[];
  variant: 'before' | 'after';
}) {
  const isAfter = variant === 'after';

  return (
    <div
      className={`rounded-[28px] border p-8 backdrop-blur-xl transition-all hover:-translate-y-1 ${
        isAfter
          ? 'border-[var(--color-viper)]/20 bg-[var(--color-viper)] text-white shadow-[0_20px_60px_rgba(26,71,42,0.15)]'
          : 'border-black/6 bg-white/60'
      }`}
    >
      <p className={`text-[13px] font-medium uppercase tracking-[0.16em] ${isAfter ? 'text-white/55' : 'text-black/40'}`}>
        {title}
      </p>
      <ul className="mt-8 space-y-4">
        {items.map((item) => (
          <li
            key={item}
            className={`flex items-start gap-3 text-[15px] leading-[1.5] ${isAfter ? 'text-white/85' : 'text-black/55'}`}
          >
            <span className={isAfter ? 'text-[var(--color-neon)]' : 'text-black/25'}>—</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function HeroMock() {
  return (
    <div className="relative flex justify-center lg:justify-end">
      <div className="relative w-full max-w-[540px]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(82,183,136,0.18),transparent_70%)] blur-3xl" />
        <div className="relative overflow-hidden rounded-[32px] border border-black/6 bg-white/80 shadow-[0_40px_120px_rgba(0,0,0,0.08)] backdrop-blur-2xl">
          <div className="flex items-center justify-between border-b border-black/6 px-6 py-5">
            <div>
              <p className="text-[12px] uppercase tracking-[0.24em] text-black/35">Maio 2026</p>
              <p className="mt-1 text-[26px] font-semibold tracking-[-0.05em]">Visão do mês</p>
            </div>
            <span className="h-2 w-2 rounded-full bg-[var(--color-neon)] shadow-[0_0_24px_var(--color-neon)]" />
          </div>
          <div className="grid grid-cols-3 border-b border-black/6">
            {[
              ['Receita prevista', 'R$ 1.890', ''],
              ['Recebido', 'R$ 1.050', 'text-[var(--color-viper-mid)]'],
              ['Em atraso', 'R$ 420', ''],
            ].map(([label, value, color]) => (
              <div key={label} className="border-r border-black/6 px-5 py-4 last:border-r-0">
                <p className="text-[12px] text-black/40">{label}</p>
                <p className={`mt-1 text-[26px] font-semibold tracking-[-0.05em] ${color}`}>{value}</p>
              </div>
            ))}
          </div>
          <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
            <div className="p-6">
              <p className="mb-5 text-[12px] uppercase tracking-[0.2em] text-black/35">Alunos</p>
              <ul className="space-y-4">
                {[
                  ['Carlos Silva', 'Pago', 'paid'],
                  ['Ana Martins', 'Pendente', 'pending'],
                  ['Rafael Souza', 'Atrasado', 'late'],
                ].map(([name, status, key]) => (
                  <li key={name} className="flex items-center justify-between text-[14px]">
                    <span>{name}</span>
                    <span
                      className={`rounded-full px-3 py-1 text-[12px] ${
                        key === 'paid'
                          ? 'bg-[rgba(82,183,136,0.12)] text-[var(--color-viper)]'
                          : key === 'late'
                            ? 'bg-red-50 text-red-600'
                            : 'bg-black/5 text-black/45'
                      }`}
                    >
                      {status}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative overflow-hidden border-l border-black/6 bg-[#08110c] p-6">
              <div className="absolute inset-0 opacity-[0.06] bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:22px_22px]" />
              <div className="relative z-10">
                <p className="text-[12px] text-white/40">WhatsApp · lembrete enviado</p>
                <div className="mt-4 rounded-2xl border border-white/6 bg-white/6 p-4 text-[14px] leading-[1.65] text-white/82">
                  Oi João, mensalidade vence hoje. R$ 180,00.
                </div>
                <p className="mt-4 flex items-center gap-2 text-[12px] text-white/40">
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-neon)]" />
                  painel atualizado automaticamente
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute -bottom-6 -left-4 rounded-3xl border border-black/6 bg-white/75 px-5 py-4 shadow-[0_20px_60px_rgba(0,0,0,0.06)] backdrop-blur-xl">
          <p className="text-[12px] uppercase tracking-[0.16em] text-black/35">Hoje</p>
          <p className="mt-1 text-[28px] font-semibold tracking-[-0.06em]">+R$ 420</p>
          <p className="text-[13px] text-black/45">registrados no painel</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundGrid() {
  return (
    <div className="pointer-events-none fixed inset-0 opacity-[0.04]">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, black 1px, transparent 1px),
            linear-gradient(to bottom, black 1px, transparent 1px)
          `,
          backgroundSize: '72px 72px',
        }}
      />
    </div>
  );
}

function Glow() {
  return (
    <>
      <div className="pointer-events-none absolute left-[8%] top-[100px] h-[400px] w-[400px] rounded-full bg-[rgba(82,183,136,0.09)] blur-[120px]" />
      <div className="pointer-events-none absolute right-[8%] top-[180px] h-[320px] w-[320px] rounded-full bg-[rgba(57,255,20,0.04)] blur-[140px]" />
    </>
  );
}
