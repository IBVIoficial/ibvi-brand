import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export function MultichannelApplicationsSection() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>7. Aplicações Multicanal</CardTitle>
        <CardDescription>
          Como a marca se adapta em diferentes plataformas.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid md:grid-cols-2 gap-6">
        <div>
          <h3 className="font-semibold text-foreground mb-2">Digital</h3>
          <ul className="text-sm text-muted-foreground space-y-1">
            <li>Website (Responsivo)</li>
            <li>Aplicativos (iOS, Android)</li>
            <li>Redes Sociais</li>
            <li>Email Marketing</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-foreground mb-2">Físico</h3>
          <ul className="text-sm text-muted-foreground space-y-1">
            <li>Papelaria (Cartões, Envelopes)</li>
            <li>Brindes (Canetas, Agendas)</li>
            <li>Sinalização (Escritórios, Eventos)</li>
            <li>Uniformes</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}
