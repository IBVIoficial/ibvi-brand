import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export function ResourcesAndSupportSection() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recursos e Suporte</CardTitle>
        <CardDescription>
          Links úteis e contatos para dúvidas sobre a marca.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid md:grid-cols-2 gap-6">
        <div>
          <h3 className="font-semibold text-foreground mb-2">Downloads</h3>
          <ul className="text-sm text-muted-foreground space-y-1">
            <li>
              <strong>Brand Assets</strong>:{' '}
              <a href="#" className="text-primary hover:underline">
                brand.ibvi.com.br/downloads
              </a>
            </li>
            <li>
              <strong>Figma Library</strong>:{' '}
              <a href="#" className="text-primary hover:underline">
                figma.com/@ibvi
              </a>
            </li>
            <li>
              <strong>Code Components</strong>:{' '}
              <a href="#" className="text-primary hover:underline">
                github.com/ibvi/brand
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-foreground mb-2">Contato</h3>
          <ul className="text-sm text-muted-foreground space-y-1">
            <li>
              <strong>Email</strong>: marca@ibvi.com.br
            </li>
            <li>
              <strong>Slack</strong>: #brand-guidelines
            </li>
            <li>
              <strong>Emergency</strong>: +55 11 98837-3606
            </li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}
