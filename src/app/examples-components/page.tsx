'use client'

import * as React from 'react'
import { useState } from 'react'
import { Logo } from '@/components/brand/Logo'
import { Button } from '@/components/brand/Button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { SimpleCard, SimpleCardHeader, SimpleCardContent, SimpleCardFooter } from '@/components/ui/simple-card'
import { IbviLogo } from '@/components/ibvi-logo'

export default function ExamplesComponentsPage() {
  const [selectedValue, setSelectedValue] = useState('')

  return (
    <main className="min-h-screen p-8">
      <div className="container max-w-6xl mx-auto">
        <header className="mb-12 text-center">
          <Logo variant="primary" size="lg" className="mx-auto mb-6" />
          <h1 className="text-4xl font-bold text-ibvi-nocturne-teal dark:text-white mb-4">
            Exemplos e Componentes
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Biblioteca completa de componentes e exemplos do sistema de design IBVI
          </p>
        </header>

        <Tabs defaultValue="components" className="w-full mb-12">
          <TabsList className="mb-8 w-full justify-start">
            <TabsTrigger value="components">Componentes</TabsTrigger>
            <TabsTrigger value="cards">Cards</TabsTrigger>
          </TabsList>

          {/* COMPONENTS TAB */}
          <TabsContent value="components" className="space-y-12">
            <Tabs defaultValue="forms" className="w-full">
              <TabsList className="mb-8">
                <TabsTrigger value="forms">Formulários</TabsTrigger>
                <TabsTrigger value="display">Display</TabsTrigger>
                <TabsTrigger value="feedback">Feedback</TabsTrigger>
              </TabsList>

              <TabsContent value="forms" className="space-y-8">
                {/* Form Example */}
                <Card>
                  <CardHeader>
                    <CardTitle>Exemplo de Formulário</CardTitle>
                    <CardDescription>
                      Componentes de formulário com validação e estilos IBVI
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="seu@email.com"
                        className="max-w-sm"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="property-type">Tipo de Imóvel</Label>
                      <Select value={selectedValue} onValueChange={setSelectedValue}>
                        <SelectTrigger className="max-w-sm">
                          <SelectValue placeholder="Selecione o tipo" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="apartment">Apartamento</SelectItem>
                          <SelectItem value="house">Casa</SelectItem>
                          <SelectItem value="commercial">Comercial</SelectItem>
                          <SelectItem value="land">Terreno</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button>Enviar Análise</Button>
                  </CardFooter>
                </Card>
              </TabsContent>

              <TabsContent value="display" className="space-y-8">
                {/* Badges */}
                <Card>
                  <CardHeader>
                    <CardTitle>Badges e Status</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge>Default</Badge>
                      <Badge variant="secondary">Secondary</Badge>
                      <Badge variant="destructive">Destructive</Badge>
                      <Badge className="bg-ibvi-teal text-white border-transparent">Teal</Badge>
                      <Badge className="bg-ibvi-gold text-ibvi-nocturne-teal border-transparent">Gold</Badge>
                      <Badge className="bg-ibvi-cream text-ibvi-nocturne-teal border-transparent">Cream</Badge>
                    </div>
                    <Badge className="bg-info text-white border-transparent">Info</Badge>
                  </CardContent>
                </Card>

                {/* Typography */}
                <Card>
                  <CardHeader>
                    <CardTitle>Tipografia</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h1 className="text-h1 font-bold">Heading 1</h1>
                      <p className="text-muted-foreground">48-64px / Inter Bold</p>
                    </div>
                    <div>
                      <h2 className="text-h2 font-semibold">Heading 2</h2>
                      <p className="text-muted-foreground">32-40px / Inter SemiBold</p>
                    </div>
                    <div>
                      <h3 className="text-h3 font-semibold">Heading 3</h3>
                      <p className="text-muted-foreground">24-28px / Inter SemiBold</p>
                    </div>
                    <div>
                      <p className="text-body-lg">Body Large - 18px</p>
                      <p className="text-body">Body Regular - 16px</p>
                      <p className="text-caption">Caption - 14px</p>
                      <p className="text-small">Small - 12px</p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="feedback" className="space-y-8">
                {/* Loading States */}
                <Card>
                  <CardHeader>
                    <CardTitle>Estados e Feedback</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Button disabled>
                        Processando...
                      </Button>
                    </div>
                    <div className="p-4 rounded-lg bg-success/10 text-success border border-success/20">
                      ✓ Análise concluída com sucesso
                    </div>
                    <div className="p-4 rounded-lg bg-error/10 text-error border border-error/20">
                      ✗ Erro ao processar dados
                    </div>
                    <div className="p-4 rounded-lg bg-warning/10 text-warning border border-warning/20">
                      ⚠ Atenção: Dados incompletos
                    </div>
                    <div className="p-4 rounded-lg bg-info/10 text-info border border-info/20">
                      ℹ Processamento pode levar até 2 minutos
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </TabsContent>

          {/* CARDS TAB */}
          <TabsContent value="cards" className="space-y-8">
            <div className="space-y-8">
              {/* Basic Card */}
              <SimpleCard>
                <SimpleCardHeader 
                  title="Card Básico" 
                  description="Um exemplo simples de card com sombra e cantos arredondados"
                />
                <SimpleCardContent>
                  <p>Este é um exemplo de conteúdo dentro de um card básico. O design segue as diretrizes da IBVI com espaçamento adequado e tipografia consistente.</p>
                </SimpleCardContent>
              </SimpleCard>
              
              {/* Card with Footer */}
              <SimpleCard>
                <SimpleCardHeader 
                  title="Card com Botões" 
                  description="Um card com área de ações no rodapé"
                />
                <SimpleCardContent>
                  <p>Este card inclui botões de ação no rodapé para demonstrar como implementar áreas interativas.</p>
                </SimpleCardContent>
                <SimpleCardFooter>
                  <Button variant="outline">Cancelar</Button>
                  <Button>Confirmar</Button>
                </SimpleCardFooter>
              </SimpleCard>
              
              {/* Card with Logo */}
              <SimpleCard className="bg-ibvi-cream border border-ibvi-gold/20">
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-white rounded-md shadow-sm">
                    <Logo variant="primary" size="sm" />
                  </div>
                  <div className="flex-1">
                    <SimpleCardHeader 
                      title="Card com Logo" 
                      description="Combinando elementos visuais da marca"
                    />
                    <SimpleCardContent>
                      <p>Este exemplo mostra como incorporar o logo da IBVI em um card, criando uma conexão visual mais forte com a identidade da marca.</p>
                    </SimpleCardContent>
                  </div>
                </div>
              </SimpleCard>
              
              {/* Data Card */}
              <SimpleCard className="bg-white dark:bg-card border border-ibvi-teal/20">
                <SimpleCardHeader 
                  title="Dados Imobiliários" 
                  description="Visualização de métricas importantes"
                />
                <SimpleCardContent>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                    <div className="text-center p-3 bg-ibvi-cream dark:bg-muted rounded-md">
                      <p className="text-sm text-muted-foreground">Vendas</p>
                      <p className="text-2xl font-semibold text-ibvi-teal">127</p>
                    </div>
                    <div className="text-center p-3 bg-ibvi-cream dark:bg-muted rounded-md">
                      <p className="text-sm text-muted-foreground">Avaliações</p>
                      <p className="text-2xl font-semibold text-ibvi-teal">89</p>
                    </div>
                    <div className="text-center p-3 bg-ibvi-cream dark:bg-muted rounded-md">
                      <p className="text-sm text-muted-foreground">Clientes</p>
                      <p className="text-2xl font-semibold text-ibvi-teal">342</p>
                    </div>
                    <div className="text-center p-3 bg-ibvi-cream dark:bg-muted rounded-md">
                      <p className="text-sm text-muted-foreground">Satisfação</p>
                      <p className="text-2xl font-semibold text-ibvi-teal">98%</p>
                    </div>
                  </div>
                </SimpleCardContent>
              </SimpleCard>
              
              {/* Feature Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <SimpleCard className="bg-gradient-to-br from-ibvi-teal to-ibvi-teal/90 text-white">
                  <SimpleCardHeader 
                    title="Análise Avançada" 
                    description="Ferramentas de inteligência imobiliária"
                    className="text-white [&>p]:text-white/80"
                  />
                  <SimpleCardContent>
                    <p className="text-white/90">Acesse relatórios detalhados e visualizações de dados que transformam informações em decisões estratégicas.</p>
                  </SimpleCardContent>
                  <SimpleCardFooter>
                    <Button variant="outline" className="text-white border-white/30 hover:bg-white/10">
                      Saiba mais
                    </Button>
                  </SimpleCardFooter>
                </SimpleCard>
                
                <SimpleCard className="bg-gradient-to-br from-ibvi-gold to-ibvi-gold/90 text-ibvi-nocturne-teal">
                  <SimpleCardHeader 
                    title="Consultoria Especializada" 
                    description="Suporte personalizado para seu negócio"
                  />
                  <SimpleCardContent>
                    <p>Nossa equipe de especialistas oferece orientação personalizada para maximizar o potencial do seu portfólio imobiliário.</p>
                  </SimpleCardContent>
                  <SimpleCardFooter>
                    <Button variant="outline" className="border-ibvi-nocturne-teal/30 hover:bg-ibvi-nocturne-teal/10">
                      Contatar
                    </Button>
                  </SimpleCardFooter>
                </SimpleCard>
              </div>
            </div>
          </TabsContent>


        </Tabs>
      </div>
    </main>
  )
}
