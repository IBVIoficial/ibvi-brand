import { Logo } from '@/components/brand/Logo';
import { ThemeToggle } from '@/components/theme-toggle';

export default function SobrePage() {
  return (
    <main className="min-h-screen bg-white dark:bg-nocturne-teal">
      <div className="container max-w-6xl mx-auto px-6 py-12">
        <div className="flex justify-between items-center mb-12">
          <Logo variant="primary" size="lg" animated />
          <ThemeToggle />
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          <h1 className="text-5xl font-bold text-ibvi-charcoal dark:text-ibvi-cream mb-8">
            Sobre o IBVI
          </h1>

          <section className="mb-12">
            <p className="text-xl leading-relaxed text-gray-700 dark:text-gray-200">
              O IBVI busca revolucionar o Mercado Imobiliário Brasileiro com seu
              sistema próprio de avaliações, processos automatizados, resultados
              mais precisos e escaláveis por meio de Inteligência Artificial.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-ibvi-teal dark:text-ibvi-gold mb-6">
              Metodologia e Proposta da Plataforma
            </h2>
            <div className="bg-ibvi-cream dark:bg-gray-800 p-8 rounded-lg shadow-md">
              <p className="mb-4">
                Na plataforma IBVI é possível reduzir em até{' '}
                <span className="font-bold text-ibvi-teal">60%</span> o tempo de
                transações imobiliárias, através de análises automatizadas,
                projetadas por sistema próprio de Inteligência Artificial (IA),
                que fornecem avaliações precisas e de acordo com o padrão
                previamente solicitado, estabelecendo assim um índice de
                referência e pesquisa necessário no mercado imobiliário do país.
              </p>
              <p className="mb-4">
                A proposta de desenvolvimento da plataforma surge através da
                necessidade de uma regulação nos valores projetados, nas
                avaliações e na ausência de um índice centralizado e confiável
                para o mercado. Fatores esses que representam os desafios
                substanciais do setor imobiliário do país, onde a irregularidade
                das avaliações geram taxas de perdas anuais e os métodos
                tradicionais, que realizam uma avaliação linear, demonstram um
                erro médio de{' '}
                <span className="font-bold text-red-600">±8,16%</span>, em
                relação ao preço final de venda, cálculo esse que foi apontado
                em estudo realizado pelo Instituto FGV-IBRE, que averigua a
                qualidade de laudos.
              </p>
              <p className="mb-4">
                Com o uso do sistema IBVI, as avaliações terão maior taxa de
                assertividade no valor, através da realização de uma validação
                cruzada, utilizando nosso sistema de Inteligência Artificial a
                favor do mercado e assim garantindo maior estabilidade,
                segurança e rapidez nas transações, o que não é visível hoje nos
                métodos tradicionais empregados no setor.
              </p>
              <p className="mb-4">
                Además, foi identificado um atraso médio de aproximadamente{' '}
                <span className="font-bold">100 dias</span> no processo de
                liquidação de transações no mercado e essa morosidade decorre da
                predominância de fluxos manuais e da regulação complexa imposta
                na Resolução nº 4.951/2021, emitida pelo Conselho Monetário
                Nacional (CMN). Embora fundamentais para a estabilidade do
                sistema financeiro, esses requisitos acabam por gerar entraves
                operacionais quando não há estrutura tecnológica adequada,
                impactando diretamente a liquidez das operações e o tempo de
                fechamento delas.
              </p>
              <p className="mb-4">
                O sistema do IBVI, visando mitigar este atraso operacional,
                através do uso de Inteligência Artificial, irá automatizar as
                etapas mais críticas do processo, como a validação de avaliações
                e precificação de ativos, reduzindo a dependência atual de
                fluxos manuais. A proposta da plataforma integrará os processos,
                para auxiliar agentes financeiros atendendo aos critérios
                regulatórios de forma mais ágil e segura, permitindo maior
                rastreabilidade, redução de erros operacionais e ganho de
                eficiência nos prazos de liquidação.
              </p>
              <p>
                Referente ao mercado de luxo, que atualmente enfrenta opacidade
                e déficit na precificação e no direcionamento do segmento,
                fatores também decorrentes da ausência de indicadores
                fidedignos, observa-se um cenário de insegurança para
                investidores de alta renda, o que dificulta o processo de tomada
                de decisão.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-ibvi-teal dark:text-ibvi-gold mb-6">
              Visão e Valores IBVI
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-ibvi-teal to-ibvi-teal/80 text-white p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4">Nossa Missão</h3>
                <p>
                  O IBVI tem como propósito se consolidar como a principal
                  autoridade em avaliação imobiliária no Brasil. Combinando o
                  uso de Inteligência Artificial de última geração, expertise
                  regulatória e acesso a dados exclusivos.
                </p>
              </div>
              <div className="bg-gradient-to-br from-ibvi-gold to-ibvi-gold/80 text-ibvi-charcoal p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4">Valores</h3>
                <ul className="space-y-2">
                  <li>✓ Transparência</li>
                  <li>✓ Precisão</li>
                  <li>✓ Confiança</li>
                  <li>✓ Inovação</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-ibvi-teal dark:text-ibvi-gold mb-6">
              Oportunidade Estratégica
            </h2>
            <div className="bg-gray-100 dark:bg-gray-800 p-8 rounded-lg">
              <p className="mb-4">
                O comportamento do comprador de imóveis no Brasil passou por uma
                transformação estrutural nos últimos anos. Em levantamento
                realizado, o percentual de jornadas de compra iniciadas no
                ambiente digital saltou de
                <span className="font-bold text-ibvi-teal"> 45%</span> em 2020,
                para <span className="font-bold text-ibvi-gold">85%</span> em
                2024 (Google Brazil Real Estate Search Trends).
              </p>
              <p>
                Esse avanço expressivo evidencia não apenas a digitalização do
                setor, mas também a urgência por soluções tecnológicas que
                acompanhem essa nova realidade. Nesse cenário, o IBVI surge como
                uma plataforma capaz de implantar o fornecimento de dados
                confiáveis, avaliações automatizadas e experiências online
                integradas, alinhadas às exigências do consumidor.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-ibvi-teal dark:text-ibvi-gold mb-6">
              Projeções e Aplicações
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white dark:bg-gray-800 border-2 border-ibvi-teal p-6 rounded-lg">
                <h3 className="text-xl font-bold text-ibvi-teal mb-3">
                  Mercado 2033
                </h3>
                <p className="text-3xl font-bold text-ibvi-gold mb-2">
                  US$ 100bi
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Projeção do mercado residencial
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 border-2 border-ibvi-gold p-6 rounded-lg">
                <h3 className="text-xl font-bold text-ibvi-gold mb-3">
                  Crescimento
                </h3>
                <p className="text-3xl font-bold text-ibvi-teal mb-2">5,42%</p>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  CAGR anual estimado
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 border-2 border-ibvi-charcoal dark:border-ibvi-cream p-6 rounded-lg">
                <h3 className="text-xl font-bold text-ibvi-charcoal dark:text-ibvi-cream mb-3">
                  Digitalização
                </h3>
                <p className="text-3xl font-bold text-ibvi-gold mb-2">85%</p>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Jornadas iniciadas online
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-ibvi-teal dark:text-ibvi-gold mb-6">
              Índice de Imóveis IBVI
            </h2>
            <div className="bg-ibvi-cream dark:bg-gray-800 p-8 rounded-lg shadow-lg">
              <p className="mb-4">
                O mercado de imóveis de luxo no Brasil sofre com a falta de
                dados confiáveis. Hoje, avaliações são feitas com base em
                percepções subjetivas, anúncios distorcidos e referências pouco
                transparentes. Isso gera insegurança, reduz a liquidez e
                dificulta decisões estratégicas, especialmente em ativos de alto
                valor, onde pequenos desvios de precificação podem representar
                milhões em diferença.
              </p>
              <p className="mb-4">
                Para enfrentar esse problema estrutural, o IBVI está
                desenvolvendo o{' '}
                <span className="font-bold text-ibvi-teal">
                  primeiro Índice Padronizado de Imóveis de Luxo do país
                </span>
                . O índice aplica modelos hedônicos avançados, que atribuem peso
                real a variáveis como área privativa, localização, amenidades e
                histórico de transações registradas. Inspirado em benchmarks
                internacionais como o EPRA, o sistema é alimentado por dados
                oficiais de CRIs, FIIs e cartórios, atualizados de forma
                contínua.
              </p>
              <p>
                Mais do que um termômetro de mercado, o índice funciona como um
                instrumento técnico de confiança para investidores,
                incorporadoras, fundos e agentes financeiros. Ele traduz um
                mercado que é historicamente opaco em dados rastreáveis,
                comparáveis e escaláveis, tornando a tomada de decisão mais
                segura, ágil e fundamentada.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-ibvi-teal dark:text-ibvi-gold mb-6">
              Valoração do Mercado Atual
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-ibvi-teal mb-4">
                  Mercado Total
                </h3>
                <p className="text-4xl font-bold text-ibvi-gold mb-2">
                  US$ 4 trilhões
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  Valor total do estoque de ativos
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-ibvi-teal mb-4">
                  Transações Anuais
                </h3>
                <p className="text-4xl font-bold text-ibvi-gold mb-2">
                  US$ 100 bilhões
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  Volume anual de transações
                </p>
              </div>
            </div>
            <div className="mt-6 p-6 bg-gray-100 dark:bg-gray-700 rounded-lg">
              <p>
                O IBVI beneficiará o mercado com a aplicação de avaliações
                automatizadas por Inteligência Artificial, que poderão alcançar
                um nível de precisão de aproximadamente{' '}
                <span className="font-bold text-green-600">90%</span> em questão
                de minutos e através dos aprimoramentos contínuos na pesquisa e
                no projeto, o IBVI representará um grande avanço tecnológico,
                com redes neurais treinadas, para o mercado imobiliário.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-ibvi-teal dark:text-ibvi-gold mb-6">
              Expertise do Sistema
            </h2>
            <div className="space-y-6">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-ibvi-teal mb-3">
                  Correção de Distorções Estruturais
                </h3>
                <p>
                  O IBVI nasce com uma proposta técnica e estratégica clara:
                  corrigir as distorções estruturais do setor de avaliação
                  imobiliária no Brasil, por meio de um sistema robusto,
                  automatizado e fundamentado em dados, atuando diretamente
                  sobre as fragilidades técnicas, operacionais e estruturais do
                  setor.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-ibvi-teal mb-3">
                  Automatização vs. Processos Manuais
                </h3>
                <p>
                  Atualmente,{' '}
                  <span className="font-bold text-red-600">73%</span> dos
                  avaliadores certificados pelo Cadastro Nacional de Avaliadores
                  Imobiliários (CNAI) ainda utilizam planilhas manuais, o que
                  resulta em processos lentos, subjetivos e suscetíveis a erro.
                  O IBVI substitui essas práticas com modelos automatizados de
                  avaliação baseados em Inteligência Artificial, entregando
                  avaliações padronizadas, auditáveis e atualizadas em tempo
                  real.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-ibvi-teal mb-3">
                  Vantagem Competitiva
                </h3>
                <p className="mb-3">
                  Startups como Loft e QuintoAndar priorizam a jornada
                  comercial, sem foco técnico na avaliação de ativos. O IBVI
                  atua exatamente onde essas plataformas não chegam: na camada
                  estrutural de precificação, integrando dados cartoriais, CRIs,
                  FIIs e atributos hedônicos para entregar um valor de mercado
                  robusto e defensável.
                </p>
                <p>
                  Com Google, Amazon e outras big techs ainda fora do espaço de
                  avaliação na América Latina, o IBVI aproveita uma janela
                  estratégica para ocupar a posição de referência no mercado.
                  Isso permite construir barreiras de entrada por meio de dados
                  proprietários, modelo validado e presença institucional.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-ibvi-teal mb-3">
                  Conformidade Regulatória
                </h3>
                <p>
                  Com o novo marco legal das garantias, que reduziu em até{' '}
                  <span className="font-bold text-green-600">70%</span> o tempo
                  de execução de garantias reais, o mercado imobiliário
                  estruturado passou a demandar avaliações mais rápidas,
                  padronizadas e juridicamente robustas. Esse movimento
                  impulsionou o crescimento acelerado dos CRIs, com alta média
                  de{' '}
                  <span className="font-bold text-ibvi-gold">45% ao ano</span>,
                  reforçando a necessidade de sistemas técnicos confiáveis.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-ibvi-teal dark:text-ibvi-gold mb-6">
              Credibilidade da Análise e Avaliação IBVI
            </h2>
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 p-8 rounded-lg">
              <h3 className="text-xl font-bold text-ibvi-teal mb-4">
                Limitações das Soluções Atuais
              </h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  <span>
                    Avaliadores tradicionais: 5 a 15 dias de prazo, custos
                    elevados, alto grau de imprecisão
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  <span>
                    Plataformas como ZAP e Loft: sem metodologia especializada
                    ou índice para alto padrão
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  <span>
                    Modelos internacionais: não consideram particularidades
                    jurídicas e fiscais brasileiras
                  </span>
                </li>
              </ul>

              <h3 className="text-xl font-bold text-ibvi-gold mb-4">
                Diferenciais IBVI
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>
                    Base adaptada à regulação nacional, compatível com Bacen
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Precisão superior com variância de apenas ±6,2%</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>
                    Infraestrutura Google Cloud: 1 milhão de avaliações diárias
                  </span>
                </li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-ibvi-teal dark:text-ibvi-gold mb-6">
              Estratégia de Mercado IBVI
            </h2>
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-ibvi-teal dark:bg-ibvi-gold"></div>

              <div className="space-y-8">
                <div className="relative flex items-start">
                  <div className="absolute left-0 w-16 h-16 bg-ibvi-teal dark:bg-ibvi-gold rounded-full flex items-center justify-center text-white font-bold">
                    1
                  </div>
                  <div className="ml-24 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold text-ibvi-teal mb-2">
                      Fase 1 (Q1–Q2 2025)
                    </h3>
                    <p>
                      Testes piloto com 40 brokers especializados em imóveis de
                      luxo em São Paulo. Validação do sistema em campo com
                      usuários de alta exigência.
                    </p>
                  </div>
                </div>

                <div className="relative flex items-start">
                  <div className="absolute left-0 w-16 h-16 bg-ibvi-teal dark:bg-ibvi-gold rounded-full flex items-center justify-center text-white font-bold">
                    2
                  </div>
                  <div className="ml-24 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold text-ibvi-teal mb-2">
                      Fase 2 (Q3–Q4 2025)
                    </h3>
                    <p>
                      Integração com bancos e instituições financeiras.
                      Avaliações automatizadas incorporadas aos fluxos de
                      crédito, garantias e estruturação de ativos.
                    </p>
                  </div>
                </div>

                <div className="relative flex items-start">
                  <div className="absolute left-0 w-16 h-16 bg-ibvi-teal dark:bg-ibvi-gold rounded-full flex items-center justify-center text-white font-bold">
                    3
                  </div>
                  <div className="ml-24 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold text-ibvi-teal mb-2">
                      Fase 3 (2026)
                    </h3>
                    <p>
                      Lançamento do aplicativo B2C via brokers parceiros. Meta:
                      5.000 usuários ativos, promovendo ponte direta com cliente
                      final.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-ibvi-teal dark:text-ibvi-gold mb-6">
              Roadmap da Plataforma
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border-t-4 border-ibvi-teal">
                <h3 className="text-lg font-bold text-ibvi-teal mb-2">
                  2022-2023
                </h3>
                <p>
                  Estruturação, P&D, coleta de dados proprietários e construção
                  da arquitetura do sistema.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border-t-4 border-ibvi-gold">
                <h3 className="text-lg font-bold text-ibvi-gold mb-2">2024</h3>
                <p>
                  Parceria com Google Cloud para infraestrutura e treinamento
                  dos modelos de IA.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border-t-4 border-ibvi-teal">
                <h3 className="text-lg font-bold text-ibvi-teal mb-2">2025</h3>
                <p>
                  Lançamento do MVP, pilotos concluídos e ajustes baseados em
                  uso real.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border-t-4 border-ibvi-gold">
                <h3 className="text-lg font-bold text-ibvi-gold mb-2">2026</h3>
                <p>
                  Expansão com integrações financeiras, aumento de volume e
                  novos territórios.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border-t-4 border-ibvi-teal">
                <h3 className="text-lg font-bold text-ibvi-teal mb-2">
                  2027-2028
                </h3>
                <p>
                  Expansão nacional e entrada em mercados estratégicos da
                  América Latina.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-ibvi-teal dark:text-ibvi-gold mb-6">
              Panorama Final
            </h2>
            <div className="bg-gradient-to-br from-ibvi-cream to-ibvi-cream/80 dark:from-gray-800 dark:to-gray-900 p-8 rounded-lg shadow-lg">
              <p className="mb-4">
                Pensando em um mercado de US$4 trilhões (residencial, comercial,
                rural), com transações anuais chegando a US$100 bilhões
                (validados por dados da ABECIP, CBIC, CRI/FII), o IBVI
                compreende a necessidade de regulamentação e organização na
                questão de avaliações e transações imobiliárias no mercado
                brasileiro.
              </p>
              <p className="mb-4">
                Ao observar a fragmentação do ecossistema imobiliário
                brasileiro, o IBVI entende que a ausência de padronização não é
                apenas um obstáculo técnico, mas um entrave ao desenvolvimento
                sustentável do setor. A falta de métricas confiáveis compromete
                o acesso ao crédito, distorce preços, dificulta a alocação
                eficiente de capital e afasta investidores institucionais.
              </p>
              <p className="font-bold text-ibvi-teal dark:text-ibvi-gold">
                O avanço da tecnologia, somado à maturação das exigências
                regulatórias e financeiras, cria o ambiente ideal para uma nova
                infraestrutura de avaliação. O IBVI têm essa missão: estruturar
                um sistema inteligente, confiável e escalável que sirva como
                base técnica para a próxima geração do mercado imobiliário no
                Brasil e, futuramente, na América Latina.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-ibvi-teal dark:text-ibvi-gold mb-6">
              Fontes e Referências
            </h2>
            <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-lg font-bold mb-3">Fontes Primárias:</h3>
              <p className="mb-4">
                Banco Central, ABECIP, CBIC, CRI/FII, EPRA, Deloitte, FGV-IBRE.
              </p>

              <h3 className="text-lg font-bold mb-3">Dados de Mercado:</h3>
              <ul className="space-y-2 text-sm">
                <li>• TAM: US$ 3,2–4,3 trilhões (estoque total de ativos)</li>
                <li>
                  • SAM 2024: US$ 77–82 bilhões (fluxo anual de transações)
                </li>
                <li>
                  • Projeção 2033: US$ 102,2 bilhões (transações residenciais)
                </li>
                <li>• Erro médio avaliações tradicionais: ±8,16% (FGV-IBRE)</li>
                <li>• Variação em imóveis premium: 50% (FIPEZAP)</li>
                <li>• Perdas anuais por imprecisões: R$ 15 bilhões</li>
                <li>• Precisão IBVI: 95% em até 10 minutos</li>
                <li>• Buscas online: 85% (Google Brazil 2024)</li>
                <li>• Crescimento crédito imobiliário: +29,1% YoY (ABECIP)</li>
                <li>• Lançamentos SP: +130,3% (SECOVI-SP)</li>
                <li>• Redução custo IA: -80% desde 2022</li>
                <li>• Open Finance: 150 milhões de transações liberadas</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
