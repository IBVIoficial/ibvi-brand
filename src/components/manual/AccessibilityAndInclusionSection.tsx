export function AccessibilityAndInclusionSection() {
  return (
    <>
      <h2 className="text-2xl font-bold text-foreground mb-4">
        9. Acessibilidade e Inclusão
      </h2>

      <h3 className="text-xl font-semibold text-foreground mb-3">
        Compromisso WCAG AA+
      </h3>
      <ul className="list-disc pl-6 text-muted-foreground mb-6">
        <li>Contraste mínimo 4.5:1 (7:1 para AAA)</li>
        <li>Navegação completa por teclado</li>
        <li>Alt text descritivo obrigatório</li>
        <li>
          Respeito a{' '}
          <code className="bg-muted px-2 py-1 rounded">
            prefers-reduced-motion
          </code>
        </li>
      </ul>

      <h3 className="text-xl font-semibold text-foreground mb-3">
        Ferramentas de Validação
      </h3>
      <ul className="list-disc pl-6 text-muted-foreground mb-8">
        <li>
          <strong>Lighthouse</strong>: Score ≥ 90
        </li>
        <li>
          <strong>axe DevTools</strong>: 0 erros
        </li>
        <li>
          <strong>WAVE</strong>: Full compliance
        </li>
        <li>
          <strong>WebAIM</strong>: Contrast checker
        </li>
      </ul>
    </>
  );
}
