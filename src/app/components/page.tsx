'use client'

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

export default function ComponentsPage() {
  const [selectedValue, setSelectedValue] = useState('')

  return (
    <main className="min-h-screen p-8">
      <div className="container max-w-6xl mx-auto">
        <header className="mb-12">
          <Logo size="lg" className="mb-6" />
          <h1 className="text-h1 font-bold mb-4">Biblioteca de Componentes</h1>
          <p className="text-body-lg text-muted-foreground">
            Todos os componentes do sistema de design IBVI
          </p>
        </header>

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
                <div className="flex flex-wrap gap-2">
                  <Badge>Padrão</Badge>
                  <Badge variant="secondary">Secundário</Badge>
                  <Badge variant="destructive">Erro</Badge>
                  <Badge variant="outline">Outline</Badge>
                  <Badge className="bg-success text-white">Sucesso</Badge>
                  <Badge className="bg-warning text-white">Aviso</Badge>
                  <Badge className="bg-info text-white">Info</Badge>
                </div>
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
      </div>
    </main>
  )
}