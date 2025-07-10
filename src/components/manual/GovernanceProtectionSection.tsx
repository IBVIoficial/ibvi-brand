import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export function GovernanceProtectionSection() {
  return (
    <Card id="governance-protection">
      <CardHeader>
        <CardTitle>08. Governança e Proteção</CardTitle>
        <CardDescription>
          Diretrizes para proteção e governança da marca IBVI.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <p className="text-muted-foreground">
          A proteção e governança da marca IBVI são fundamentais para manter sua integridade e valor ao longo do tempo.
        </p>
        
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">
            Processos de Governança
          </h3>
          <ul className="list-disc list-inside text-muted-foreground space-y-1">
            <li>Auditoria trimestral SVG/CSS</li>
            <li>Compliance rigoroso LGPD/GDPR, OWASP Top 10</li>
            <li>Licenciamento de ativos</li>
            <li>Validação obrigatória pelo Brand Team</li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">
            Checklist Obrigatório
          </h3>
          <ul className="list-disc list-inside text-muted-foreground space-y-1">
            <li>Lighthouse ≥90</li>
            <li>Delta E ≤ 2</li>
            <li>Contraste WCAG AA+</li>
            <li>Validação de acessibilidade</li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">
            Proteção Legal
          </h3>
          <ul className="list-disc list-inside text-muted-foreground space-y-1">
            <li>Marca registrada em todas as classes relevantes</li>
            <li>Direitos autorais sobre todos os ativos visuais</li>
            <li>Monitoramento contínuo de uso indevido</li>
            <li>Procedimentos claros para denúncia de violações</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}
