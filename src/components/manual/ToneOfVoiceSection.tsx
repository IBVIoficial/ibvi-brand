export function ToneOfVoiceSection() {
  return (
    <>
      <h2 className="text-2xl font-bold text-foreground mb-4">
        8. Tom de Voz e Comunicação
      </h2>

      <h3 className="text-xl font-semibold text-foreground mb-3">
        Personalidade
      </h3>
      <p className="text-muted-foreground mb-4">
        <strong>Somos</strong>: Precisos, acessíveis, éticos, inovadores
        <br />
        <strong>Não somos</strong>: Arrogantes, genéricos, promocionais
        agressivos
      </p>

      <h3 className="text-xl font-semibold text-foreground mb-3">
        Princípios de Comunicação
      </h3>
      <ol className="list-decimal pl-6 text-muted-foreground mb-6">
        <li>
          <strong>Clareza First</strong>: Simplicidade sem simplismo
        </li>
        <li>
          <strong>Dados Sempre</strong>: Toda afirmação com evidência
        </li>
        <li>
          <strong>Benefício Claro</strong>: Foco no valor para o cliente
        </li>
        <li>
          <strong>Tom Humano</strong>: Tecnologia com propósito
        </li>
      </ol>

      <h3 className="text-xl font-semibold text-foreground mb-3">
        Exemplos Práticos
      </h3>
      <div className="bg-green-50 border border-green-200 p-4 rounded-lg mb-4">
        <p className="text-green-800 mb-0">
          <strong>✓ Correto</strong>:<br />
          "Valorização média: +23% (147 variáveis analisadas)"
        </p>
      </div>
      <div className="bg-red-50 border border-red-200 p-4 rounded-lg mb-8">
        <p className="text-red-800 mb-0">
          <strong>✗ Incorreto</strong>:<br />
          "Nossa plataforma revolucionária usa IA de ponta!"
        </p>
      </div>
    </>
  );
}
