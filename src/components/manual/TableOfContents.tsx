import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export function TableOfContents() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Sumário</CardTitle>
        <CardDescription>
          Índice de conteúdos do manual de identidade visual
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
          <li className="hover:text-foreground transition-colors">
            <a href="#introduction">Introdução e Propósito</a>
          </li>
          <li className="hover:text-foreground transition-colors">
            <a href="#brand-essence">Essência da Marca</a>
          </li>
          <li className="hover:text-foreground transition-colors">
            <a href="#visual-identity">Sistema de Identidade Visual</a>
          </li>
          <li className="hover:text-foreground transition-colors">
            <a href="#color-specs">Especificações Cromáticas</a>
          </li>
          <li className="hover:text-foreground transition-colors">
            <a href="#typography">Tipografia e Hierarquia</a>
          </li>
          <li className="hover:text-foreground transition-colors">
            <a href="#applications">Aplicações e Contextos</a>
          </li>
          <li className="hover:text-foreground transition-colors">
            <a href="#communication">Diretrizes de Comunicação</a>
          </li>
          <li className="hover:text-foreground transition-colors">
            <a href="#governance">Governança e Proteção</a>
          </li>
          <li className="hover:text-foreground transition-colors">
            <a href="#technical">Implementação Técnica</a>
          </li>
          <li className="hover:text-foreground transition-colors">
            <a href="#use-cases">Casos de Uso e Exemplos</a>
          </li>
          <li className="hover:text-foreground transition-colors">
            <a href="#evolution">Evolução e Manutenção</a>
          </li>
        </ol>
      </CardContent>
    </Card>
  );
}
