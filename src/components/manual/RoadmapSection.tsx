import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export function RoadmapSection() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>5. Roadmap de Evolução da Marca</CardTitle>
        <CardDescription>
          O futuro da nossa identidade visual e suas implementações.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid md:grid-cols-3 gap-6">
        <div>
          <h3 className="font-semibold text-foreground mb-2">Q1-Q2 2025</h3>
          <ul className="text-sm text-muted-foreground space-y-1">
            <li>✅ Lançamento do Brand System 2.0</li>
            <li>✅ Migração para Inter</li>
            <li>✅ Novo site institucional</li>
            <li>✅ Templates (Apres., Docs)</li>
            <li>☐ Advanced analytics dashboard</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-foreground mb-2">Q3-Q4 2025</h3>
          <ul className="text-sm text-muted-foreground space-y-1">
            <li>☐ Expansão global (EN/PT)</li>
            <li>☐ Assistente de marca IA</li>
            <li>☐ Personalização dinâmica</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-foreground mb-2">Q1-Q2 2026</h3>
          <ul className="text-sm text-muted-foreground space-y-1">
            <li>☐ Tokens Figma/Storybook</li>
            <li>☐ Real-time brand monitoring</li>
            <li>☐ Advanced analytics dashboard</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}
