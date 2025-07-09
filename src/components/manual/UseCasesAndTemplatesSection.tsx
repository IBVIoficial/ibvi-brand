export function UseCasesAndTemplatesSection() {
  return (
    <>
      <h2 className="text-2xl font-bold text-foreground mb-4">
        12. Casos de Uso e Templates
      </h2>

      <h3 className="text-xl font-semibold text-foreground mb-3">
        Templates Disponíveis
      </h3>
      <p className="text-muted-foreground mb-4">
        <strong>Apresentações</strong>: Keynote, PowerPoint, Google Slides
        <br />
        <strong>Marketing</strong>: Email signatures, social kit, landing
        pages
        <br />
        <strong>Documentos</strong>: Propostas, relatórios, white papers
      </p>

      <h3 className="text-xl font-semibold text-foreground mb-3">
        Exemplos de Sucesso
      </h3>
      <ul className="list-disc pl-6 text-muted-foreground mb-6">
        <li>
          <strong>Campanha Digital</strong>: CTR +18% com CTA Gold prominent
        </li>
        <li>
          <strong>Evento Corporativo</strong>: NPS 72 com sinalização
          consistente
        </li>
      </ul>

      <h3 className="text-xl font-semibold text-foreground mb-3">
        Do's and Don'ts
      </h3>
      <div className="bg-green-50 border border-green-200 p-4 rounded-lg mb-4">
        <p className="text-green-800 mb-2">
          <strong>✓ DO</strong>:
        </p>
        <ul className="list-disc pl-6 text-green-800 mb-0">
          <li>Manter hierarquia visual clara</li>
          <li>Usar dados para suportar claims</li>
          <li>Respeitar zonas de proteção</li>
          <li>Testar acessibilidade sempre</li>
        </ul>
      </div>
      <div className="bg-red-50 border border-red-200 p-4 rounded-lg mb-8">
        <p className="text-red-800 mb-2">
          <strong>✗ DON'T</strong>:
        </p>
        <ul className="list-disc pl-6 text-red-800 mb-0">
          <li>Criar versões "criativas" do logo</li>
          <li>Usar cores fora da paleta</li>
          <li>Comprometer legibilidade</li>
          <li>Ignorar guidelines de espaçamento</li>
        </ul>
      </div>
    </>
  );
}
