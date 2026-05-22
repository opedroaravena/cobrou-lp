const students = [
  { name: 'Carlos Silva', status: 'pago' as const },
  { name: 'Ana Martins', status: 'pendente' as const },
  { name: 'Rafael Souza', status: 'atrasado' as const },
  { name: 'Beatriz Lima', status: 'pago' as const },
];

const statusLabel = {
  pago: 'Pago',
  pendente: 'Pendente',
  atrasado: 'Atrasado',
};

const statusClass = {
  pago: 'bg-viper/8 text-viper-mid',
  pendente: 'bg-surface-2 text-muted',
  atrasado: 'bg-viper/5 text-viper',
};

export function DashboardMock() {
  return (
    <div className="w-full max-w-[420px] rounded-[var(--radius-card)] border border-border bg-white shadow-[0_1px_2px_rgba(17,17,17,0.04),0_8px_24px_rgba(17,17,17,0.06)]">
      <div className="flex items-center justify-between border-b border-border px-5 py-4">
        <div>
          <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-muted">
            Maio 2026
          </p>
          <p className="mt-0.5 text-sm font-medium text-ink">Visão do mês</p>
        </div>
        <span className="h-1.5 w-1.5 rounded-full bg-neon" aria-hidden="true" />
      </div>

      <div className="grid grid-cols-3 gap-px border-b border-border bg-border">
        <div className="bg-white px-4 py-4">
          <p className="text-[11px] text-muted">Receita prevista</p>
          <p className="mt-1 text-sm font-medium tabular-nums text-ink">R$ 1.890</p>
        </div>
        <div className="bg-white px-4 py-4">
          <p className="text-[11px] text-muted">Recebido</p>
          <p className="mt-1 text-sm font-medium tabular-nums text-viper-mid">R$ 1.050</p>
        </div>
        <div className="bg-white px-4 py-4">
          <p className="text-[11px] text-muted">Em atraso</p>
          <p className="mt-1 text-sm font-medium tabular-nums text-ink-soft">R$ 420</p>
        </div>
      </div>

      <div className="px-5 py-4">
        <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.12em] text-muted">
          Alunos
        </p>
        <ul className="space-y-2">
          {students.map((student) => (
            <li
              key={student.name}
              className="flex items-center justify-between gap-3 rounded-lg px-2 py-2 transition-colors hover:bg-surface"
            >
              <div className="flex min-w-0 items-center gap-3">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-surface text-[10px] font-medium text-viper-mid">
                  {student.name
                    .split(' ')
                    .map((n) => n[0])
                    .slice(0, 2)
                    .join('')}
                </span>
                <span className="truncate text-[13px] text-ink">{student.name}</span>
              </div>
              <span
                className={`shrink-0 rounded-md px-2 py-0.5 text-[11px] font-medium ${statusClass[student.status]}`}
              >
                {statusLabel[student.status]}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
