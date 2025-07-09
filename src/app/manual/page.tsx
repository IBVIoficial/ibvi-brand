import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Manual de Identidade Visual - IBVI',
  description: 'Guia definitivo para aplicação consistente da identidade visual IBVI',
}

export default function ManualPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold text-foreground mb-2">Manual de Identidade Visual IBVI – Versão 2.1</h1>
          <h2 className="text-2xl font-semibold text-muted-foreground mb-8">Sistema de Alta Performance para Inteligência Imobiliária</h2>
          
          <div className="bg-muted p-4 rounded-lg mb-8">
            <p className="text-sm text-muted-foreground mb-0">
              <strong>Release:</strong> Janeiro 2025 | ISO 20671, ISO 10668, LGPD/GDPR, WCAG AA
            </p>
          </div>

          <hr className="my-8" />

          <h2 className="text-2xl font-bold text-foreground mb-4">Sumário Executivo</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Guia definitivo para aplicação consistente da identidade visual IBVI, garantindo coerência multicanal, 
            mensurabilidade (CTR +18%, CPL –10%, Brand Recall +25%, NPS 72, Precisão 95%) e conformidade de marca.
          </p>

          <hr className="my-8" />

          <h2 className="text-2xl font-bold text-foreground mb-4">1. Introdução e Framework Estratégico</h2>
          
          <blockquote className="border-l-4 border-primary pl-6 italic text-lg text-muted-foreground mb-6">
            "Na IBVI, acreditamos que decisões baseadas em dados são a chave para desbloquear o verdadeiro potencial 
            do mercado imobiliário. Nossa missão é democratizar o acesso a inteligência precisa, transparente e acionável, 
            capacitando desde investidores individuais até grandes instituições."<br />
            <cite className="text-sm not-italic">— Fundador, CEO da IBVI</cite>
          </blockquote>

          <h3 className="text-xl font-semibold text-foreground mb-3">Propósito</h3>
          <p className="text-muted-foreground mb-4">
            Definir padrões que traduzam a missão da IBVI: democratizar decisões imobiliárias com precisão de dados.
          </p>

          <h3 className="text-xl font-semibold text-foreground mb-3">Escopo</h3>
          <ul className="list-disc pl-6 text-muted-foreground mb-4">
            <li>Equipes internas (marketing, produto, tecnologia)</li>
            <li>Agências homologadas e parceiros criativos</li>
            <li>Desenvolvedores e equipes técnicas</li>
            <li>Stakeholders e investidores</li>
          </ul>

          <h3 className="text-xl font-semibold text-foreground mb-3">Princípios</h3>
          <p className="text-lg font-semibold text-center text-muted-foreground mb-8">
            <strong>Consistência</strong> • <strong>Integridade</strong> • <strong>Performance</strong> • <strong>Compliance</strong>
          </p>

          <hr className="my-8" />

          <h2 className="text-2xl font-bold text-foreground mb-4">2. Identidade e Posicionamento</h2>

          <h3 className="text-xl font-semibold text-foreground mb-3">Essência</h3>
          <blockquote className="border-l-4 border-primary pl-6 italic text-lg text-muted-foreground mb-6">
            "Transformamos a complexidade imobiliária em decisões precisas através de inteligência de dados."
          </blockquote>

          <h3 className="text-xl font-semibold text-foreground mb-3">Visão 2030</h3>
          <p className="text-muted-foreground mb-4">
            Referência global em inteligência imobiliária precisa e transparência institucional.
          </p>

          <h3 className="text-xl font-semibold text-foreground mb-3">Valores Fundamentais</h3>
          <ul className="list-disc pl-6 text-muted-foreground mb-6">
            <li><strong>Precisão</strong>: Resultados baseados em dados confiáveis (95% acurácia)</li>
            <li><strong>Transparência</strong>: Processos auditáveis e abertos</li>
            <li><strong>Ética Digital</strong>: Conformidade com LGPD, GDPR e OWASP</li>
            <li><strong>Inovação</strong>: Soluções pioneiras baseadas em tecnologia</li>
            <li><strong>Acessibilidade</strong>: Ferramentas para todos os públicos</li>
          </ul>

          <h3 className="text-xl font-semibold text-foreground mb-3">Performance Comprovada</h3>
          <div className="overflow-x-auto mb-8">
            <table className="min-w-full border-collapse border border-border">
              <thead>
                <tr className="bg-muted">
                  <th className="border border-border px-4 py-2 text-left">Métrica</th>
                  <th className="border border-border px-4 py-2 text-left">Resultado</th>
                  <th className="border border-border px-4 py-2 text-left">Fonte/Auditoria</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border px-4 py-2">CTR Digital</td>
                  <td className="border border-border px-4 py-2">+18%</td>
                  <td className="border border-border px-4 py-2">A/B Meta/LinkedIn Ads (2024)</td>
                </tr>
                <tr>
                  <td className="border border-border px-4 py-2">CPL</td>
                  <td className="border border-border px-4 py-2">-10%</td>
                  <td className="border border-border px-4 py-2">Bench. Google Ads (2024)</td>
                </tr>
                <tr>
                  <td className="border border-border px-4 py-2">Brand Recall</td>
                  <td className="border border-border px-4 py-2">+25% (não-assist.)</td>
                  <td className="border border-border px-4 py-2">Pesquisa SECOVI-SP/KPMG (2024)</td>
                </tr>
                <tr>
                  <td className="border border-border px-4 py-2">Precisão Algorítmica</td>
                  <td className="border border-border px-4 py-2">95%</td>
                  <td className="border border-border px-4 py-2">Audit KPMG (QA contínuo)</td>
                </tr>
                <tr>
                  <td className="border border-border px-4 py-2">Time-to-Decision</td>
                  <td className="border border-border px-4 py-2">-60%</td>
                  <td className="border border-border px-4 py-2">FGV/SECOVI-SP (2024)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <hr className="my-8" />

          <h2 className="text-2xl font-bold text-foreground mb-4">3. Sistema Visual Core</h2>

          <h3 className="text-xl font-semibold text-foreground mb-3">3.1 Anatomia do Símbolo</h3>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full border-collapse border border-border">
              <thead>
                <tr className="bg-muted">
                  <th className="border border-border px-4 py-2 text-left">Elemento</th>
                  <th className="border border-border px-4 py-2 text-left">Especificação</th>
                  <th className="border border-border px-4 py-2 text-left">Proporção</th>
                  <th className="border border-border px-4 py-2 text-left">Significado</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border px-4 py-2">Seta Ascendente</td>
                  <td className="border border-border px-4 py-2">90° com 15% overshoot</td>
                  <td className="border border-border px-4 py-2">1:1.618 (φ)</td>
                  <td className="border border-border px-4 py-2">Crescimento sustentável</td>
                </tr>
                <tr>
                  <td className="border border-border px-4 py-2">Base Geométrica</td>
                  <td className="border border-border px-4 py-2">Inclinação 16°</td>
                  <td className="border border-border px-4 py-2">2:3 relativo</td>
                  <td className="border border-border px-4 py-2">Fundação em dados</td>
                </tr>
                <tr>
                  <td className="border border-border px-4 py-2">Espaço Negativo</td>
                  <td className="border border-border px-4 py-2">Calibrado 2mm</td>
                  <td className="border border-border px-4 py-2">8% altura</td>
                  <td className="border border-border px-4 py-2">Precisão metodológica</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-muted-foreground mb-6">
            <strong>Grid de Construção:</strong><br />
            • Unidade base (x): 8px<br />
            • Altura total: 6x<br />
            • Largura símbolo: 4x<br />
            • Espaçamento: 1.5x
          </p>

          <h3 className="text-xl font-semibold text-foreground mb-3">3.2 Versões do Logotipo</h3>
          <ol className="list-decimal pl-6 text-muted-foreground mb-6">
            <li><strong>Principal</strong>: Símbolo + wordmark horizontal</li>
            <li><strong>Compacta</strong>: Símbolo isolado (&lt;40mm)</li>
            <li><strong>Institucional</strong>: Com tagline "Inteligência Imobiliária Precisa"</li>
            <li><strong>Monocromática</strong>: Para gravação e bordado</li>
          </ol>

          <h3 className="text-xl font-semibold text-foreground mb-3">3.3 Zona de Proteção</h3>
          <ul className="list-disc pl-6 text-muted-foreground mb-6">
            <li><strong>Mínimo</strong>: 2x altura da letra "i"</li>
            <li><strong>Ideal</strong>: 3x altura da letra "i"</li>
            <li><strong>Digital</strong>: 16px mínimo</li>
            <li><strong>Impresso</strong>: 10mm mínimo</li>
          </ul>

          <p className="text-red-600 mb-8">
            <strong>❌ Proibições</strong>: Rotações, distorções, cores fora da paleta, efeitos extras, contraste &lt;4.5:1
          </p>

          <hr className="my-8" />

          <h2 className="text-2xl font-bold text-foreground mb-4">4. Especificações Cromáticas</h2>

          <h3 className="text-xl font-semibold text-foreground mb-3">Paleta Principal</h3>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full border-collapse border border-border">
              <thead>
                <tr className="bg-muted">
                  <th className="border border-border px-4 py-2 text-left">Uso</th>
                  <th className="border border-border px-4 py-2 text-left">Nome</th>
                  <th className="border border-border px-4 py-2 text-left">HEX</th>
                  <th className="border border-border px-4 py-2 text-left">RGB</th>
                  <th className="border border-border px-4 py-2 text-left">Pantone</th>
                  <th className="border border-border px-4 py-2 text-left">WCAG</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border px-4 py-2"><strong>Primária</strong></td>
                  <td className="border border-border px-4 py-2">Teal Profundo</td>
                  <td className="border border-border px-4 py-2">#28515A</td>
                  <td className="border border-border px-4 py-2">40,81,90</td>
                  <td className="border border-border px-4 py-2">5477 C</td>
                  <td className="border border-border px-4 py-2">AAA ✓</td>
                </tr>
                <tr>
                  <td className="border border-border px-4 py-2"><strong>Secundária</strong></td>
                  <td className="border border-border px-4 py-2">Gold Plus</td>
                  <td className="border border-border px-4 py-2">#F3BA57</td>
                  <td className="border border-border px-4 py-2">243,186,87</td>
                  <td className="border border-border px-4 py-2">7407 C</td>
                  <td className="border border-border px-4 py-2">AA ✓</td>
                </tr>
                <tr>
                  <td className="border border-border px-4 py-2"><strong>Texto</strong></td>
                  <td className="border border-border px-4 py-2">Charcoal</td>
                  <td className="border border-border px-4 py-2">#1C1C1C</td>
                  <td className="border border-border px-4 py-2">28,28,28</td>
                  <td className="border border-border px-4 py-2">432 C</td>
                  <td className="border border-border px-4 py-2">AAA ✓</td>
                </tr>
                <tr>
                  <td className="border border-border px-4 py-2"><strong>Fundo Light</strong></td>
                  <td className="border border-border px-4 py-2">Cream</td>
                  <td className="border border-border px-4 py-2">#FEF9EC</td>
                  <td className="border border-border px-4 py-2">254,249,236</td>
                  <td className="border border-border px-4 py-2">9224 C</td>
                  <td className="border border-border px-4 py-2">—</td>
                </tr>
                <tr>
                  <td className="border border-border px-4 py-2"><strong>Fundo Dark</strong></td>
                  <td className="border border-border px-4 py-2">Navy</td>
                  <td className="border border-border px-4 py-2">#0E1316</td>
                  <td className="border border-border px-4 py-2">14,19,22</td>
                  <td className="border border-border px-4 py-2">Black 6 C</td>
                  <td className="border border-border px-4 py-2">—</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-xl font-semibold text-foreground mb-3">Combinações Aprovadas</h3>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full border-collapse border border-border">
              <thead>
                <tr className="bg-muted">
                  <th className="border border-border px-4 py-2 text-left">Combinação</th>
                  <th className="border border-border px-4 py-2 text-left">Ratio</th>
                  <th className="border border-border px-4 py-2 text-left">Uso Recomendado</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border px-4 py-2">Charcoal/Cream</td>
                  <td className="border border-border px-4 py-2">15.8:1</td>
                  <td className="border border-border px-4 py-2">Texto principal</td>
                </tr>
                <tr>
                  <td className="border border-border px-4 py-2">Gold/Charcoal</td>
                  <td className="border border-border px-4 py-2">11.4:1</td>
                  <td className="border border-border px-4 py-2">CTAs dark mode</td>
                </tr>
                <tr>
                  <td className="border border-border px-4 py-2">Teal/Cream</td>
                  <td className="border border-border px-4 py-2">7.2:1</td>
                  <td className="border border-border px-4 py-2">Títulos grandes</td>
                </tr>
                <tr>
                  <td className="border border-border px-4 py-2">Gold/Navy</td>
                  <td className="border border-border px-4 py-2">10.1:1</td>
                  <td className="border border-border px-4 py-2">Destaques premium</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-muted-foreground mb-8">
            <strong>QA Obrigatório</strong>: WCAG AA/AAA, Delta E &lt; 2, contraste ≥ 4.5:1
          </p>

          <hr className="my-8" />

          <h2 className="text-2xl font-bold text-foreground mb-4">5. Sistema Tipográfico</h2>

          <h3 className="text-xl font-semibold text-foreground mb-3">Família Principal</h3>
          <p className="text-muted-foreground mb-4">
            <strong>Inter Variable</strong> (400, 500, 600, 700)<br />
            Fallback: <code className="bg-muted px-2 py-1 rounded">-apple-system, "Segoe UI", Roboto, Helvetica Neue</code>
          </p>

          <h3 className="text-xl font-semibold text-foreground mb-3">Hierarquia</h3>
          <div className="overflow-x-auto mb-8">
            <table className="min-w-full border-collapse border border-border">
              <thead>
                <tr className="bg-muted">
                  <th className="border border-border px-4 py-2 text-left">Estilo</th>
                  <th className="border border-border px-4 py-2 text-left">Desktop</th>
                  <th className="border border-border px-4 py-2 text-left">Mobile</th>
                  <th className="border border-border px-4 py-2 text-left">Peso</th>
                  <th className="border border-border px-4 py-2 text-left">Line Height</th>
                  <th className="border border-border px-4 py-2 text-left">Tracking</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border px-4 py-2"><strong>H1</strong></td>
                  <td className="border border-border px-4 py-2">48-64px</td>
                  <td className="border border-border px-4 py-2">32-40px</td>
                  <td className="border border-border px-4 py-2">700</td>
                  <td className="border border-border px-4 py-2">1.1</td>
                  <td className="border border-border px-4 py-2">-0.02em</td>
                </tr>
                <tr>
                  <td className="border border-border px-4 py-2"><strong>H2</strong></td>
                  <td className="border border-border px-4 py-2">32-40px</td>
                  <td className="border border-border px-4 py-2">24-32px</td>
                  <td className="border border-border px-4 py-2">600</td>
                  <td className="border border-border px-4 py-2">1.2</td>
                  <td className="border border-border px-4 py-2">-0.01em</td>
                </tr>
                <tr>
                  <td className="border border-border px-4 py-2"><strong>Body</strong></td>
                  <td className="border border-border px-4 py-2">16-18px</td>
                  <td className="border border-border px-4 py-2">14-16px</td>
                  <td className="border border-border px-4 py-2">400</td>
                  <td className="border border-border px-4 py-2">1.6</td>
                  <td className="border border-border px-4 py-2">0</td>
                </tr>
                <tr>
                  <td className="border border-border px-4 py-2"><strong>Caption</strong></td>
                  <td className="border border-border px-4 py-2">12-14px</td>
                  <td className="border border-border px-4 py-2">11-12px</td>
                  <td className="border border-border px-4 py-2">500</td>
                  <td className="border border-border px-4 py-2">1.4</td>
                  <td className="border border-border px-4 py-2">0.01em</td>
                </tr>
              </tbody>
            </table>
          </div>

          <hr className="my-8" />

          <h2 className="text-2xl font-bold text-foreground mb-4">6. Grid e Composição</h2>

          <h3 className="text-xl font-semibold text-foreground mb-3">Sistema Base</h3>
          <p className="text-muted-foreground mb-4">
            <strong>Unidade</strong>: 8px (todos os elementos seguem múltiplos)
          </p>

          <h3 className="text-xl font-semibold text-foreground mb-3">Breakpoints Responsivos</h3>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full border-collapse border border-border">
              <thead>
                <tr className="bg-muted">
                  <th className="border border-border px-4 py-2 text-left">Device</th>
                  <th className="border border-border px-4 py-2 text-left">Width</th>
                  <th className="border border-border px-4 py-2 text-left">Columns</th>
                  <th className="border border-border px-4 py-2 text-left">Margin</th>
                  <th className="border border-border px-4 py-2 text-left">Gutter</th>
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

          <h3 className="text-xl font-semibold text-foreground mb-3">Escala de Espaçamento</h3>
          <p className="text-muted-foreground mb-8">
            <code className="bg-muted px-2 py-1 rounded">4px</code> → <code className="bg-muted px-2 py-1 rounded">8px</code> → <code className="bg-muted px-2 py-1 rounded">16px</code> → <code className="bg-muted px-2 py-1 rounded">24px</code> → <code className="bg-muted px-2 py-1 rounded">32px</code> → <code className="bg-muted px-2 py-1 rounded">48px</code> → <code className="bg-muted px-2 py-1 rounded">64px</code> → <code className="bg-muted px-2 py-1 rounded">96px</code>
          </p>

          <hr className="my-8" />

          <h2 className="text-2xl font-bold text-foreground mb-4">7. Aplicações Multicanal</h2>

          <h3 className="text-xl font-semibold text-foreground mb-3">Digital</h3>
          <ul className="list-disc pl-6 text-muted-foreground mb-6">
            <li><strong>Website/App</strong>: Logo ≥32px, animação 200ms ease</li>
            <li><strong>Email</strong>: 140px desktop, 100px mobile</li>
            <li><strong>Social</strong>: Templates otimizados LinkedIn/Instagram</li>
          </ul>

          <h3 className="text-xl font-semibold text-foreground mb-3">Impressos</h3>
          <ul className="list-disc pl-6 text-muted-foreground mb-6">
            <li><strong>Cartões</strong>: 20mm canto superior direito</li>
            <li><strong>Timbrado</strong>: 30mm centro superior</li>
            <li><strong>Brochuras</strong>: Base Teal, destaques Gold</li>
          </ul>

          <h3 className="text-xl font-semibold text-foreground mb-3">Ambiental</h3>
          <ul className="list-disc pl-6 text-muted-foreground mb-8">
            <li><strong>Externa</strong>: ≥500mm backlight LED 4000K</li>
            <li><strong>Interna</strong>: ≥200mm altura 1,60m</li>
            <li><strong>Materiais</strong>: Acrílico ou metal escovado</li>
          </ul>

          <hr className="my-8" />

          <h2 className="text-2xl font-bold text-foreground mb-4">8. Tom de Voz e Comunicação</h2>

          <h3 className="text-xl font-semibold text-foreground mb-3">Personalidade</h3>
          <p className="text-muted-foreground mb-4">
            <strong>Somos</strong>: Precisos, acessíveis, éticos, inovadores<br />
            <strong>Não somos</strong>: Arrogantes, genéricos, promocionais agressivos
          </p>

          <h3 className="text-xl font-semibold text-foreground mb-3">Princípios de Comunicação</h3>
          <ol className="list-decimal pl-6 text-muted-foreground mb-6">
            <li><strong>Clareza First</strong>: Simplicidade sem simplismo</li>
            <li><strong>Dados Sempre</strong>: Toda afirmação com evidência</li>
            <li><strong>Benefício Claro</strong>: Foco no valor para o cliente</li>
            <li><strong>Tom Humano</strong>: Tecnologia com propósito</li>
          </ol>

          <h3 className="text-xl font-semibold text-foreground mb-3">Exemplos Práticos</h3>
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

          <hr className="my-8" />

          <h2 className="text-2xl font-bold text-foreground mb-4">9. Acessibilidade e Inclusão</h2>

          <h3 className="text-xl font-semibold text-foreground mb-3">Compromisso WCAG AA+</h3>
          <ul className="list-disc pl-6 text-muted-foreground mb-6">
            <li>Contraste mínimo 4.5:1 (7:1 para AAA)</li>
            <li>Navegação completa por teclado</li>
            <li>Alt text descritivo obrigatório</li>
            <li>Respeito a <code className="bg-muted px-2 py-1 rounded">prefers-reduced-motion</code></li>
          </ul>

          <h3 className="text-xl font-semibold text-foreground mb-3">Ferramentas de Validação</h3>
          <ul className="list-disc pl-6 text-muted-foreground mb-8">
            <li><strong>Lighthouse</strong>: Score ≥ 90</li>
            <li><strong>axe DevTools</strong>: 0 erros</li>
            <li><strong>WAVE</strong>: Full compliance</li>
            <li><strong>WebAIM</strong>: Contrast checker</li>
          </ul>

          <hr className="my-8" />

          <h2 className="text-2xl font-bold text-foreground mb-4">10. Implementação Digital</h2>

          <h3 className="text-xl font-semibold text-foreground mb-3">CSS Tokens</h3>
          <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm mb-6">
            <code>{`:root {
  --ibvi-teal: #28515A;
  --ibvi-charcoal: #1C1C1C;
  --ibvi-gold: #F3BA57;
  --ibvi-cream: #FEF9EC;
  --ibvi-navy: #0E1316;
  --font-primary: 'Inter', -apple-system, sans-serif;
  --space-unit: 8px;
}`}</code>
          </pre>

          <h3 className="text-xl font-semibold text-foreground mb-3">React Component</h3>
          <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm mb-6">
            <code>{`import { motion } from 'framer-motion';

export const IBVILogo = ({ size = 32, animated = false }) => {
  const LogoSVG = (
    <svg 
      width={size * 3.4} 
      height={size} 
      viewBox="0 0 110 48" 
      role="img" 
      aria-label="IBVI – Inteligência Imobiliária Precisa"
    >
      <path fill="var(--ibvi-teal)" d="M0 48V16l32 32z"/>
      <path fill="var(--ibvi-gold)" d="M24 0l16 16h-8v16h-16V16h-8z"/>
      <text x="44" y="38" fontFamily="Inter" fontSize="32" fontWeight="700" fill="currentColor">ibvi</text>
    </svg>
  );
  
  return animated ? (
    <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
      {LogoSVG}
    </motion.div>
  ) : LogoSVG;
};`}</code>
          </pre>

          <h3 className="text-xl font-semibold text-foreground mb-3">Performance Targets</h3>
          <ul className="list-disc pl-6 text-muted-foreground mb-8">
            <li><strong>FCP</strong>: &lt; 1.8s</li>
            <li><strong>LCP</strong>: &lt; 2.5s</li>
            <li><strong>CLS</strong>: &lt; 0.1</li>
            <li><strong>FID</strong>: &lt; 100ms</li>
          </ul>

          <hr className="my-8" />

          <h2 className="text-2xl font-bold text-foreground mb-4">11. Governança e Compliance</h2>

          <h3 className="text-xl font-semibold text-foreground mb-3">Estrutura</h3>
          <p className="text-muted-foreground mb-4">
            <strong>Comitê de Marca</strong>: Reuniões trimestrais para revisão e aprovação
          </p>

          <h3 className="text-xl font-semibold text-foreground mb-3">Níveis de Aprovação</h3>
          <ol className="list-decimal pl-6 text-muted-foreground mb-6">
            <li><strong>Uso Padrão</strong>: Auto-aprovado (seguindo manual)</li>
            <li><strong>Adaptações</strong>: Design Lead (48h)</li>
            <li><strong>Exceções</strong>: Comitê de Marca (5 dias)</li>
          </ol>

          <h3 className="text-xl font-semibold text-foreground mb-3">Checklist Obrigatório</h3>
          <ul className="list-none pl-0 text-muted-foreground mb-8">
            <li>☐ Contraste WCAG AA mínimo</li>
            <li>☐ Proporções corretas do logo</li>
            <li>☐ Cores dentro da paleta oficial</li>
            <li>☐ Tipografia conforme hierarquia</li>
            <li>☐ Alt text e aria-labels</li>
            <li>☐ Performance metrics atingidas</li>
            <li>☐ LGPD/GDPR compliance</li>
            <li>☐ Licenças de assets válidas</li>
          </ul>

          <hr className="my-8" />

          <h2 className="text-2xl font-bold text-foreground mb-4">12. Casos de Uso e Templates</h2>

          <h3 className="text-xl font-semibold text-foreground mb-3">Templates Disponíveis</h3>
          <p className="text-muted-foreground mb-4">
            <strong>Apresentações</strong>: Keynote, PowerPoint, Google Slides<br />
            <strong>Marketing</strong>: Email signatures, social kit, landing pages<br />
            <strong>Documentos</strong>: Propostas, relatórios, white papers
          </p>

          <h3 className="text-xl font-semibold text-foreground mb-3">Exemplos de Sucesso</h3>
          <ul className="list-disc pl-6 text-muted-foreground mb-6">
            <li><strong>Campanha Digital</strong>: CTR +18% com CTA Gold prominent</li>
            <li><strong>Evento Corporativo</strong>: NPS 72 com sinalização consistente</li>
          </ul>

          <h3 className="text-xl font-semibold text-foreground mb-3">Do's and Don'ts</h3>
          <div className="bg-green-50 border border-green-200 p-4 rounded-lg mb-4">
            <p className="text-green-800 mb-2"><strong>✓ DO</strong>:</p>
            <ul className="list-disc pl-6 text-green-800 mb-0">
              <li>Manter hierarquia visual clara</li>
              <li>Usar dados para suportar claims</li>
              <li>Respeitar zonas de proteção</li>
              <li>Testar acessibilidade sempre</li>
            </ul>
          </div>
          <div className="bg-red-50 border border-red-200 p-4 rounded-lg mb-8">
            <p className="text-red-800 mb-2"><strong>✗ DON'T</strong>:</p>
            <ul className="list-disc pl-6 text-red-800 mb-0">
              <li>Criar versões "criativas" do logo</li>
              <li>Usar cores fora da paleta</li>
              <li>Comprometer legibilidade</li>
              <li>Ignorar guidelines de espaçamento</li>
            </ul>
          </div>

          <hr className="my-8" />

          <h2 className="text-2xl font-bold text-foreground mb-4">13. Evolução e Roadmap 2025-2026</h2>

          <h3 className="text-xl font-semibold text-foreground mb-3">Q1-Q2 2025</h3>
          <ul className="list-none pl-0 text-muted-foreground mb-6">
            <li>☐ Motion design system</li>
            <li>☐ Micro-interações biblioteca</li>
            <li>☐ AR/VR brand experiences</li>
          </ul>

          <h3 className="text-xl font-semibold text-foreground mb-3">Q3-Q4 2025</h3>
          <ul className="list-none pl-0 text-muted-foreground mb-6">
            <li>☐ Expansão global (EN/PT)</li>
            <li>☐ Assistente de marca IA</li>
            <li>☐ Personalização dinâmica</li>
          </ul>

          <h3 className="text-xl font-semibold text-foreground mb-3">Q1-Q2 2026</h3>
          <ul className="list-none pl-0 text-muted-foreground mb-8">
            <li>☐ Tokens Figma/Storybook</li>
            <li>☐ Real-time brand monitoring</li>
            <li>☐ Advanced analytics dashboard</li>
          </ul>

          <hr className="my-8" />

          <h2 className="text-2xl font-bold text-foreground mb-4">Recursos e Suporte</h2>

          <h3 className="text-xl font-semibold text-foreground mb-3">Downloads</h3>
          <ul className="list-disc pl-6 text-muted-foreground mb-6">
            <li><strong>Brand Assets</strong>: <a href="https://brand.ibvi.com.br/downloads" className="text-primary hover:underline">brand.ibvi.com.br/downloads</a></li>
            <li><strong>Figma Library</strong>: <a href="https://figma.com/@ibvi" className="text-primary hover:underline">figma.com/@ibvi</a></li>
            <li><strong>Code Components</strong>: <a href="https://github.com/ibvi/brand" className="text-primary hover:underline">github.com/ibvi/brand</a></li>
          </ul>

          <h3 className="text-xl font-semibold text-foreground mb-3">Contato</h3>
          <ul className="list-disc pl-6 text-muted-foreground mb-8">
            <li><strong>Email</strong>: marca@ibvi.com.br</li>
            <li><strong>Slack</strong>: #brand-guidelines</li>
            <li><strong>Emergency</strong>: +55 11 98837-3606</li>
          </ul>

          <hr className="my-8" />

          <div className="bg-muted p-6 rounded-lg text-center">
            <p className="text-lg font-semibold text-foreground mb-2">
              © 2025 IBVI - Inteligência Imobiliária Precisa
            </p>
            <p className="text-sm text-muted-foreground mb-4">
              <em>Este documento é propriedade intelectual da IBVI. Uso restrito a parceiros autorizados.</em>
            </p>
            <p className="text-sm text-muted-foreground mb-0">
              <strong>Última atualização</strong>: Janeiro 2025 | <strong>Versão</strong>: 2.1.0<br />
              <strong>Próxima revisão</strong>: Abril 2025
            </p>
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground italic">
              Este manual é um documento vivo e será atualizado conforme a marca evolui.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}