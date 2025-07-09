export function GovernanceAndComplianceSection() {
  return (
    <>
      <h2 className="text-2xl font-bold text-foreground mb-4">
        11. Governança e Compliance
      </h2>

      <h3 className="text-xl font-semibold text-foreground mb-3">
        Estrutura
      </h3>
      <p className="text-muted-foreground mb-4">
        <strong>Comitê de Marca</strong>: Reuniões trimestrais para revisão e
        aprovação
      </p>

      <h3 className="text-xl font-semibold text-foreground mb-3">
        Níveis de Aprovação
      </h3>
      <ol className="list-decimal pl-6 text-muted-foreground mb-6">
        <li>
          <strong>Uso Padrão</strong>: Auto-aprovado (seguindo manual)
        </li>
        <li>
          <strong>Adaptações</strong>: Design Lead (48h)
        </li>
        <li>
          <strong>Exceções</strong>: Comitê de Marca (5 dias)
        </li>
      </ol>

      <h3 className="text-xl font-semibold text-foreground mb-3">
        Checklist Obrigatório
      </h3>
      <ul className="list-none pl-0 text-muted-foreground mb-8">
        <li>☐ Contraste WCAG AA mínimo</li>
        <li>☐ Proporções corretas do logo</li>
        <li>☐ Cores dentro da paleta oficial</li>
        <li>☐ Tipografia conforme hierarquia</li>
        <li>☐ Alt text e aria-labels</li>
        <li>☐ Performance metrics atingidas</li>
        <li>☐ LGPD/GDPR compliance</li>
        <li>☐ Licenças de assets válidas</li>
      </ul>
    </>
  );
}
