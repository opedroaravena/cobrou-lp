type ProductTab = 'lembretes' | 'pagamentos' | 'visao';

interface ProductMockPanelProps {
  tab: ProductTab;
}

export function ProductMockPanel({ tab }: ProductMockPanelProps) {
  return (
    <div className="relative min-h-[420px] w-full">
      <div key={tab} className="mock-fade-in absolute inset-0">
        {tab === 'lembretes' && <WhatsAppMock />}
        {tab === 'pagamentos' && <PaymentMock />}
        {tab === 'visao' && <DashboardMock />}
      </div>
    </div>
  );
}

function WhatsAppMock() {
  return (
    <div className="h-full overflow-hidden rounded-[28px] border border-black/6 bg-[#0b1410] shadow-[0_24px_80px_rgba(0,0,0,0.12)]">
      <div className="border-b border-white/6 px-6 py-5">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-viper-light)]/20 text-sm font-semibold text-[var(--color-viper-light)]">
            CB
          </div>
          <div>
            <p className="text-[15px] font-medium text-white">Cobrou</p>
            <p className="text-xs text-white/40">lembrete automático</p>
          </div>
        </div>
      </div>
      <div className="space-y-4 p-6">
        <div className="max-w-[85%] rounded-2xl rounded-tl-md border border-white/6 bg-white/6 p-4 text-[14px] leading-[1.65] text-white/85 backdrop-blur-xl">
          Oi João, sua mensalidade de maio vence hoje.
          <br />
          Valor: <span className="font-medium text-white">R$ 180,00</span>
          <br />
          <span className="text-[var(--color-viper-light)]">pix.cobrou.app/joao</span>
        </div>
        <div className="flex justify-end">
          <div className="max-w-[70%] rounded-2xl rounded-tr-md bg-[var(--color-viper)] px-4 py-3 text-[14px] text-white">
            Paguei agora
          </div>
        </div>
        <div className="flex items-center gap-2 rounded-full border border-[var(--color-neon)]/20 bg-[var(--color-neon)]/8 px-3 py-1.5 text-[12px] text-[var(--color-neon-muted)]">
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-neon)]" />
          Lembrete enviado automaticamente
        </div>
      </div>
    </div>
  );
}

function PaymentMock() {
  const methods = [
    { label: 'PIX', active: true },
    { label: 'Dinheiro', active: false },
    { label: 'Cartão', active: false },
  ];

  return (
    <div className="flex h-full flex-col justify-center rounded-[28px] border border-black/6 bg-white/80 p-8 shadow-[0_24px_80px_rgba(0,0,0,0.08)] backdrop-blur-2xl">
      <p className="text-[12px] font-medium uppercase tracking-[0.2em] text-black/35">
        Registrar pagamento
      </p>
      <p className="mt-2 text-[22px] font-semibold tracking-[-0.04em]">Ana Martins</p>
      <p className="mt-1 text-[14px] text-black/45">Mensalidade · Maio 2026</p>

      <p className="mt-8 text-[32px] font-semibold tracking-[-0.05em]">R$ 180,00</p>

      <div className="mt-6 flex gap-2">
        {methods.map((m) => (
          <span
            key={m.label}
            className={`rounded-full px-4 py-2 text-[13px] font-medium transition-colors ${
              m.active
                ? 'bg-[var(--color-viper)] text-white'
                : 'border border-black/8 bg-white text-black/50'
            }`}
          >
            {m.label}
          </span>
        ))}
      </div>

      <div className="mt-8 rounded-2xl border border-black/6 bg-[var(--color-surface)] px-4 py-3 text-[13px] text-black/45">
        PIX · ana@cobrou.app · confirmado às 09:14
      </div>

      <button
        type="button"
        className="mt-6 h-12 w-full rounded-2xl bg-[var(--color-viper)] text-[14px] font-medium text-white"
      >
        Confirmar pagamento
      </button>
    </div>
  );
}

function DashboardMock() {
  const metrics = [
    ['Receita prevista', 'R$ 1.890', ''],
    ['Recebido', 'R$ 1.050', 'text-[var(--color-viper-mid)]'],
    ['Em atraso', 'R$ 420', ''],
  ];

  const students = [
    ['Carlos Silva', 'Pago', 'paid'],
    ['Ana Martins', 'Pendente', 'pending'],
    ['Rafael Souza', 'Atrasado', 'late'],
    ['Beatriz Lima', 'Pago', 'paid'],
  ] as const;

  const statusStyle = {
    paid: 'bg-[rgba(82,183,136,0.12)] text-[var(--color-viper)]',
    pending: 'bg-black/5 text-black/45',
    late: 'bg-red-50 text-red-600',
  };

  return (
    <div className="overflow-hidden rounded-[28px] border border-black/6 bg-white/80 shadow-[0_24px_80px_rgba(0,0,0,0.08)] backdrop-blur-2xl">
      <div className="border-b border-black/6 px-6 py-5">
        <p className="text-[12px] uppercase tracking-[0.2em] text-black/35">Maio 2026</p>
        <p className="mt-1 text-[24px] font-semibold tracking-[-0.04em]">Visão do mês</p>
      </div>
      <div className="grid grid-cols-3 border-b border-black/6">
        {metrics.map(([label, value, color]) => (
          <div key={label} className="border-r border-black/6 px-5 py-4 last:border-r-0">
            <p className="text-[12px] text-black/40">{label}</p>
            <p className={`mt-1 text-[22px] font-semibold tracking-[-0.04em] ${color}`}>{value}</p>
          </div>
        ))}
      </div>
      <div className="p-6">
        <p className="mb-4 text-[12px] uppercase tracking-[0.2em] text-black/35">Alunos</p>
        <ul className="space-y-3">
          {students.map(([name, status, key]) => (
            <li key={name} className="flex items-center justify-between">
              <span className="text-[14px]">{name}</span>
              <span className={`rounded-full px-3 py-1 text-[12px] font-medium ${statusStyle[key]}`}>
                {status}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
