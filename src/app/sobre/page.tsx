import { Button } from "@/components/brand/Button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ThemeToggle } from "@/components/theme-toggle"
import { IbviLogo } from "@/components/ibvi-logo"
import { ArrowRight, CheckCircle, TrendingUp, ShieldCheck, Lightbulb, Target, Users, Globe } from "lucide-react"
import Link from "next/link"

export default function SobrePage() {
  const stats = [
    { value: "US$ 4 trilhões", label: "Valor total do estoque de ativos" },
    { value: "US$ 100 bilhões", label: "Volume anual de transações" },
    { value: "90%", label: "Nível de precisão com avaliações por IA" },
    { value: "60%", label: "Redução no tempo de transações imobiliárias" },
  ]

  const values = [
    { icon: <TrendingUp className="h-6 w-6 text-primary" />, title: "Transparência" },
    { icon: <ShieldCheck className="h-6 w-6 text-primary" />, title: "Precisão" },
    { icon: <CheckCircle className="h-6 w-6 text-primary" />, title: "Confiança" },
    { icon: <Lightbulb className="h-6 w-6 text-primary" />, title: "Inovação" },
  ]

  const roadmapPhases = [
    {
      phase: "Fase 1",
      period: "Q1–Q2 2025",
      title: "Pilotos e Validação",
      description: "Testes piloto com 40 brokers especializados em imóveis de luxo em São Paulo. Validação do sistema em campo com usuários de alta exigência."
    },
    {
      phase: "Fase 2", 
      period: "Q3–Q4 2025",
      title: "Integração Financeira",
      description: "Integração com bancos e instituições financeiras. Avaliações automatizadas incorporadas aos fluxos de crédito, garantias e estruturação de ativos."
    },
    {
      phase: "Fase 3",
      period: "2026",
      title: "Expansão B2C",
      description: "Lançamento do aplicativo B2C via brokers parceiros. Meta: 5.000 usuários ativos, promovendo ponte direta com cliente final."
    }
  ]

  const expertise = [
    {
      icon: <Target className="h-8 w-8 text-primary" />,
      title: "Correção de Distorções Estruturais",
      description: "O IBVI nasce com uma proposta técnica e estratégica clara: corrigir as distorções estruturais do setor de avaliação imobiliária no Brasil, por meio de um sistema robusto, automatizado e fundamentado em dados."
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Automatização vs. Processos Manuais",
      description: "Atualmente, 73% dos avaliadores certificados pelo CNAI ainda utilizam planilhas manuais. O IBVI substitui essas práticas com modelos automatizados de avaliação baseados em IA."
    },
    {
      icon: <Globe className="h-8 w-8 text-primary" />,
      title: "Vantagem Competitiva",
      description: "Com Google, Amazon e outras big techs ainda fora do espaço de avaliação na América Latina, o IBVI aproveita uma janela estratégica para ocupar a posição de referência no mercado."
    }
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="container max-w-7xl py-20 md:py-32 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
            Sobre o IBVI
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg md:text-xl text-muted-foreground">
            O IBVI busca revolucionar o Mercado Imobiliário Brasileiro com seu sistema próprio de avaliações, 
            processos automatizados, resultados mais precisos e escaláveis por meio de Inteligência Artificial.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button size="lg" asChild>
              <Link href="/">
                Voltar ao Início <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline">
              Saber Mais
            </Button>
          </div>
        </section>

        {/* Stats Section */}
        <section className="container max-w-7xl py-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center border-2 border-primary/20 bg-card/50">
                <CardHeader>
                  <CardTitle className="text-2xl md:text-3xl font-bold text-primary">{stat.value}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Mission Section */}
        <section id="missao" className="container max-w-7xl py-20 md:py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold">Visão e Valores IBVI</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                O IBVI tem como propósito se consolidar como a principal autoridade em avaliação imobiliária no Brasil. 
                Combinando o uso de Inteligência Artificial de última geração, expertise regulatória e acesso a dados 
                exclusivos.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-6">
                {values.map((value) => (
                  <div key={value.title} className="flex items-center gap-3">
                    {value.icon}
                    <span className="font-semibold">{value.title}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-muted rounded-lg p-8">
              <h3 className="text-2xl font-semibold">Nossa Missão</h3>
              <p className="mt-4 text-muted-foreground">
                Estruturar um sistema inteligente, confiável e escalável que sirva como base técnica para a próxima 
                geração do mercado imobiliário no Brasil e, futuramente, na América Latina. A plataforma promove um 
                sistema pautado pela transparência, precisão e confiança.
              </p>
            </div>
          </div>
        </section>

        {/* Methodology Section */}
        <section id="metodologia" className="bg-muted/50 py-20 md:py-24">
          <div className="container max-w-7xl">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold">Metodologia e Proposta da Plataforma</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Na plataforma IBVI é possível reduzir em até 60% o tempo de transações imobiliárias, através de análises 
                automatizadas que fornecem avaliações precisas e de acordo com o padrão solicitado.
              </p>
            </div>
            <div className="mt-12 grid md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Primeiro Índice Padronizado</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Desenvolvemos o primeiro Índice Padronizado de Imóveis de Luxo do país. O índice aplica modelos 
                    hedônicos avançados, inspirado em benchmarks internacionais como o EPRA.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Validação Cruzada com IA</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Utilizamos nosso sistema de Inteligência Artificial para realizar uma validação cruzada, garantindo 
                    maior estabilidade, segurança e rapidez nas transações.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Automatização de Processos</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Automatizamos as etapas críticas do processo, como a validação de avaliações e precificação de 
                    ativos, reduzindo a dependência atual de fluxos manuais.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Market Opportunity Section */}
        <section className="container max-w-7xl py-20 md:py-24">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold">Oportunidade Estratégica</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              O comportamento do comprador de imóveis no Brasil passou por uma transformação estrutural nos últimos anos.
            </p>
          </div>
          <div className="mt-12 grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg p-8">
              <h3 className="text-2xl font-semibold mb-4">Digitalização do Mercado</h3>
              <p className="text-muted-foreground mb-4">
                O percentual de jornadas de compra iniciadas no ambiente digital saltou de 
                <span className="font-bold text-primary mx-1">45%</span> em 2020, para 
                <span className="font-bold text-primary mx-1">85%</span> em 2024.
              </p>
              <p className="text-muted-foreground">
                Esse avanço evidencia a urgência por soluções tecnológicas que acompanhem essa nova realidade.
              </p>
            </div>
            <div className="bg-gradient-to-br from-secondary/10 to-secondary/5 rounded-lg p-8">
              <h3 className="text-2xl font-semibold mb-4">Projeções 2033</h3>
              <p className="text-muted-foreground mb-4">
                Estimativas apontam que o mercado imobiliário residencial brasileiro deve chegar a aproximadamente 
                <span className="font-bold text-secondary mx-1">US$ 100 bilhões</span> até 2033.
              </p>
              <p className="text-muted-foreground">
                Com base em um crescimento composto anual (CAGR) de 5,42%.
              </p>
            </div>
          </div>
        </section>

        {/* Expertise Section */}
        <section className="bg-muted/50 py-20 md:py-24">
          <div className="container max-w-7xl">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold">Expertise do Sistema</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                O IBVI atua diretamente sobre as fragilidades técnicas, operacionais e estruturais do setor.
              </p>
            </div>
            <div className="mt-12 grid md:grid-cols-3 gap-8">
              {expertise.map((item, index) => (
                <Card key={index} className="text-center">
                  <CardHeader>
                    <div className="mx-auto mb-4 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                      {item.icon}
                    </div>
                    <CardTitle className="text-xl">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Strategy Roadmap */}
        <section id="roadmap" className="container max-w-7xl py-20 md:py-24">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold">Estratégia de Mercado IBVI</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              A entrada do IBVI será progressiva e segmentada, seguindo um roadmap estruturado.
            </p>
          </div>
          <div className="mt-12 grid md:grid-cols-3 gap-8">
            {roadmapPhases.map((phase, index) => (
              <Card key={index} className="relative">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{phase.phase}</p>
                      <p className="text-sm font-semibold">{phase.period}</p>
                    </div>
                  </div>
                  <CardTitle>{phase.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{phase.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Final Panorama */}
        <section className="bg-gradient-to-br from-primary/5 to-secondary/5 py-20 md:py-24">
          <div className="container max-w-7xl">
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold">Panorama Final</h2>
              <p className="mt-4 text-lg text-muted-foreground mb-8">
                Pensando em um mercado de US$4 trilhões, com transações anuais chegando a US$100 bilhões, 
                o IBVI compreende a necessidade de regulamentação e organização na questão de avaliações 
                e transações imobiliárias no mercado brasileiro.
              </p>
              <div className="bg-background/80 backdrop-blur rounded-lg p-8">
                <p className="text-lg font-semibold text-primary">
                  O avanço da tecnologia, somado à maturação das exigências regulatórias e financeiras, 
                  cria o ambiente ideal para uma nova infraestrutura de avaliação. O IBVI tem essa missão: 
                  estruturar um sistema inteligente, confiável e escalável que sirva como base técnica para 
                  a próxima geração do mercado imobiliário no Brasil e, futuramente, na América Latina.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="container max-w-7xl py-20 md:py-24 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Pronto para conhecer mais?</h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
            Explore nosso manual de marca e descubra todos os recursos disponíveis.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button size="lg" asChild>
              <Link href="/manual">
                Ver Manual de Marca
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/">Voltar ao Início</Link>
            </Button>
          </div>
        </section>
      </main>

    </div>
  )
}