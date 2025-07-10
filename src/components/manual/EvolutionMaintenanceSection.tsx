import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export function EvolutionMaintenanceSection() {
  return (
    <Card id="evolution-maintenance">
      <CardHeader>
        <CardTitle>11. Evolução e Manutenção</CardTitle>
        <CardDescription>
          Diretrizes para evolução e manutenção da identidade visual IBVI ao longo do tempo.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <p className="text-muted-foreground">
          A identidade visual IBVI foi projetada para evoluir de forma consistente, mantendo seus valores fundamentais enquanto se adapta às necessidades futuras.
        </p>
        
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">
            Roadmap Evolutivo
          </h3>
          <ul className="list-disc list-inside text-muted-foreground space-y-1">
            <li><strong>2025/Q4:</strong> Motion Graphics</li>
            <li><strong>2026/Q1:</strong> Biblioteca de ícones/AR/VR</li>
            <li><strong>2026/Q2:</strong> Rollout global EN/PT</li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">
            Diretrizes de Manutenção
          </h3>
          <ul className="list-disc list-inside text-muted-foreground space-y-1">
            <li>Revisão anual do manual de identidade visual</li>
            <li>Atualização trimestral de ativos digitais</li>
            <li>Monitoramento contínuo de aplicações da marca</li>
            <li>Adaptação para novas plataformas e tecnologias</li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">
            Contato e Suporte
          </h3>
          <p className="text-muted-foreground">
            Para questões relacionadas à identidade visual IBVI, entre em contato com:
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-1">
            <li>Email: marca@ibvi.com.br</li>
            <li>Portal: brand.ibvi.com.br</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}
