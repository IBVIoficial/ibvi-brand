export function GridAndCompositionSection() {
  return (
    <>
      <h2 className="text-2xl font-bold text-foreground mb-4">
        6. Grid e Composição
      </h2>

      <h3 className="text-xl font-semibold text-foreground mb-3">
        Sistema Base
      </h3>
      <p className="text-muted-foreground mb-4">
        <strong>Unidade</strong>: 8px (todos os elementos seguem múltiplos)
      </p>

      <h3 className="text-xl font-semibold text-foreground mb-3">
        Breakpoints Responsivos
      </h3>
      <div className="overflow-x-auto mb-6">
        <table className="min-w-full border-collapse border border-border">
          <thead>
            <tr className="bg-muted">
              <th className="border border-border px-4 py-2 text-left">
                Device
              </th>
              <th className="border border-border px-4 py-2 text-left">
                Width
              </th>
              <th className="border border-border px-4 py-2 text-left">
                Columns
              </th>
              <th className="border border-border px-4 py-2 text-left">
                Margin
              </th>
              <th className="border border-border px-4 py-2 text-left">
                Gutter
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-border px-4 py-2">Mobile</td>
              <td className="border border-border px-4 py-2">320-425px</td>
              <td className="border border-border px-4 py-2">4</td>
              <td className="border border-border px-4 py-2">16px</td>
              <td className="border border-border px-4 py-2">16px</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2">Tablet</td>
              <td className="border border-border px-4 py-2">768px</td>
              <td className="border border-border px-4 py-2">8</td>
              <td className="border border-border px-4 py-2">24px</td>
              <td className="border border-border px-4 py-2">24px</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2">Desktop</td>
              <td className="border border-border px-4 py-2">1024px</td>
              <td className="border border-border px-4 py-2">12</td>
              <td className="border border-border px-4 py-2">32px</td>
              <td className="border border-border px-4 py-2">24px</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2">Wide</td>
              <td className="border border-border px-4 py-2">1440px+</td>
              <td className="border border-border px-4 py-2">12</td>
              <td className="border border-border px-4 py-2">64px</td>
              <td className="border border-border px-4 py-2">32px</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="text-xl font-semibold text-foreground mb-3">
        Escala de Espaçamento
      </h3>
      <p className="text-muted-foreground mb-8">
        <code className="bg-muted px-2 py-1 rounded">4px</code> →{' '}
        <code className="bg-muted px-2 py-1 rounded">8px</code> →{' '}
        <code className="bg-muted px-2 py-1 rounded">16px</code> →{' '}
        <code className="bg-muted px-2 py-1 rounded">24px</code> →{' '}
        <code className="bg-muted px-2 py-1 rounded">32px</code> →{' '}
        <code className="bg-muted px-2 py-1 rounded">48px</code> →{' '}
        <code className="bg-muted px-2 py-1 rounded">64px</code> →{' '}
        <code className="bg-muted px-2 py-1 rounded">96px</code>
      </p>
    </>
  );
}
