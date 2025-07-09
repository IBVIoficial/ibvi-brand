export function TypographySystemSection() {
  return (
    <>
      <h2 className="text-2xl font-bold text-foreground mb-4">
        5. Sistema Tipográfico
      </h2>

      <h3 className="text-xl font-semibold text-foreground mb-3">
        Família Principal
      </h3>
      <p className="text-muted-foreground mb-4">
        <strong>Inter Variable</strong> (400, 500, 600, 700)
        <br />
        Fallback:{' '}
        <code className="bg-muted px-2 py-1 rounded">
          -apple-system, "Segoe UI", Roboto, Helvetica Neue
        </code>
      </p>

      <h3 className="text-xl font-semibold text-foreground mb-3">
        Hierarquia
      </h3>
      <div className="overflow-x-auto mb-8">
        <table className="min-w-full border-collapse border border-border">
          <thead>
            <tr className="bg-muted">
              <th className="border border-border px-4 py-2 text-left">
                Estilo
              </th>
              <th className="border border-border px-4 py-2 text-left">
                Desktop
              </th>
              <th className="border border-border px-4 py-2 text-left">
                Mobile
              </th>
              <th className="border border-border px-4 py-2 text-left">
                Peso
              </th>
              <th className="border border-border px-4 py-2 text-left">
                Line Height
              </th>
              <th className="border border-border px-4 py-2 text-left">
                Tracking
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-border px-4 py-2">
                <strong>H1</strong>
              </td>
              <td className="border border-border px-4 py-2">48-64px</td>
              <td className="border border-border px-4 py-2">32-40px</td>
              <td className="border border-border px-4 py-2">700</td>
              <td className="border border-border px-4 py-2">1.1</td>
              <td className="border border-border px-4 py-2">-0.02em</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2">
                <strong>H2</strong>
              </td>
              <td className="border border-border px-4 py-2">32-40px</td>
              <td className="border border-border px-4 py-2">24-32px</td>
              <td className="border border-border px-4 py-2">600</td>
              <td className="border border-border px-4 py-2">1.2</td>
              <td className="border border-border px-4 py-2">-0.01em</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2">
                <strong>Body</strong>
              </td>
              <td className="border border-border px-4 py-2">16-18px</td>
              <td className="border border-border px-4 py-2">14-16px</td>
              <td className="border border-border px-4 py-2">400</td>
              <td className="border border-border px-4 py-2">1.6</td>
              <td className="border border-border px-4 py-2">0</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2">
                <strong>Caption</strong>
              </td>
              <td className="border border-border px-4 py-2">12-14px</td>
              <td className="border border-border px-4 py-2">11-12px</td>
              <td className="border border-border px-4 py-2">500</td>
              <td className="border border-border px-4 py-2">1.4</td>
              <td className="border border-border px-4 py-2">0.01em</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
