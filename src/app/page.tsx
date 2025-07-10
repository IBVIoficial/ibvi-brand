import Link from 'next/link';
import { Logo } from '@/components/brand/Logo';
import { Button } from '@/components/brand/Button';
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';

type ButtonData = {
  text: string;
  href: string;
  className: string;
};

type CardData = {
  title: string;
  description: string;
  multiButton?: boolean;
  buttons?: ButtonData[];
  buttonText?: string;
  href?: string;
  cardClassName: string;
  titleClassName: string;
  descriptionClassName: string;
  buttonClassName?: string;
};

const cardData: CardData[] = [
  {
    title: "Site",
    description: "Referências de Marca para o Site",
    multiButton: true,
    buttons: [
      {
        text: "Light",
        href: "/site",
        className: "bg-ibvi-teal hover:bg-ibvi-teal/90 text-white"
      },
      {
        text: "Dark",
        href: "/site-dark",
        className: "bg-ibvi-gold hover:bg-ibvi-gold/90 text-ibvi-nocturne-teal"
      }
    ],
    cardClassName: "bg-gradient-to-br from-white to-ibvi-cream/50 dark:from-ibvi-nocturne-teal dark:to-ibvi-nocturne-teal/80",
    titleClassName: "text-ibvi-nocturne-teal dark:text-white",
    descriptionClassName: "text-gray-500 dark:text-ibvi-cream/70",
  },
  {
    title: "Manual",
    description: "Consulte nosso manual de marca",
    buttonText: "Acessar",
    href: "/manual",
    cardClassName: "bg-white/90 dark:bg-card/90",
    titleClassName: "text-ibvi-nocturne-teal dark:text-white",
    descriptionClassName: "text-gray-500 dark:text-gray-400",
    buttonClassName: "bg-ibvi-gold hover:bg-ibvi-gold/90 text-ibvi-nocturne-teal dark:text-ibvi-nocturne-teal",
  },
  {
    title: "Exemplos & Componentes",
    description: "Biblioteca completa de componentes",
    buttonText: "Ver biblioteca",
    href: "/examples-components",
    cardClassName: "bg-white/90 dark:bg-card/90",
    titleClassName: "text-ibvi-nocturne-teal dark:text-white",
    descriptionClassName: "text-gray-500 dark:text-gray-400",
    buttonClassName: "bg-ibvi-gold hover:bg-ibvi-gold/90 text-ibvi-nocturne-teal dark:text-ibvi-nocturne-teal",
  },

  {
    title: "Sobre o IBVI",
    description: "Conheça nossa missão e proposta",
    buttonText: "Saiba mais",
    href: "/sobre",
    cardClassName: "bg-ibvi-teal dark:bg-ibvi-teal",
    titleClassName: "text-white",
    descriptionClassName: "text-ibvi-cream/80",
    buttonClassName: "bg-white hover:bg-gray-100 text-ibvi-teal",
  },
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-ibvi-cream dark:bg-background p-4 sm:p-8 md:p-12">
      <div className="container max-w-5xl">
        <header className="mb-12 text-center">
          <Logo variant="primary" size="xl" animated className="mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold text-ibvi-nocturne-teal dark:text-white">
            Guia de Marca IBVI
          </h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Sistema de identidade visual e recursos de marca
          </p>
        </header>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {cardData.map((item, index) => (
            <Card
              key={index}
              className={cn(
                "flex flex-col justify-between rounded-xl border-gray-200/50 dark:border-border/50 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1",
                item.cardClassName,
              )}
            >
              <CardHeader>
                <CardTitle className={cn("text-2xl font-semibold", item.titleClassName)}>
                  {item.title}
                </CardTitle>
                <CardDescription className={cn("pt-1 text-base", item.descriptionClassName)}>
                  {item.description}
                </CardDescription>
              </CardHeader>
              <CardFooter className={item.multiButton ? "flex flex-row gap-3" : ""}>  
                {item.multiButton && item.buttons ? (
                  item.buttons.map((button, buttonIndex) => (
                    <Button 
                      key={buttonIndex}
                      asChild 
                      className={cn("flex-1 rounded-full py-3 text-base font-bold", button.className)}
                    >
                      <Link href={button.href}>
                        {button.text}
                      </Link>
                    </Button>
                  ))
                ) : (
                  <Button 
                    asChild 
                    className={cn("w-full rounded-full py-3 text-base font-bold", item.buttonClassName || "")}
                  >
                    <Link href={item.href || "#"}>
                      {item.buttonText || "Acessar"}
                    </Link>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Logo Variants Section */}
        <section className="mt-16">
          <Card className="bg-white/90 dark:bg-card/90 border-gray-200/50 dark:border-border/50 shadow-sm">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-ibvi-nocturne-teal dark:text-white text-center">
                Variantes de Logo
              </CardTitle>
              <CardDescription className="text-center text-gray-500 dark:text-gray-400">
                Todas as variações da logomarca IBVI
              </CardDescription>
            </CardHeader>
            <div className="p-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="flex flex-col items-center justify-center p-4 rounded-lg bg-gray-50 dark:bg-muted/50">
                  <Logo variant="primary" size="lg" className="mb-3" />
                  <p className="text-sm font-medium text-gray-700 dark:text-gray-300">Primary</p>
                </div>
                <div className="flex flex-col items-center justify-center p-4 rounded-lg bg-gray-900 dark:bg-gray-800">
                  <Logo variant="dark" size="lg" className="mb-3" />
                  <p className="text-sm font-medium text-white">Dark</p>
                </div>
                <div className="flex flex-col items-center justify-center p-4 rounded-lg bg-gray-50 dark:bg-muted/50">
                  <Logo variant="mono" size="lg" className="mb-3" />
                  <p className="text-sm font-medium text-gray-700 dark:text-gray-300">Mono</p>
                </div>
                <div className="flex flex-col items-center justify-center p-4 rounded-lg bg-gray-900 dark:bg-gray-800">
                  <Logo variant="mono-dark" size="lg" className="mb-3" />
                  <p className="text-sm font-medium text-white">Mono Dark</p>
                </div>
              </div>
            </div>
          </Card>
        </section>

        {/* Quick Stats Section */}
        <section className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4">
          <Card className="bg-white/90 dark:bg-card/90 border-gray-200/50 dark:border-border/50 text-center">
            <CardHeader className="pb-2">
              <CardTitle className="text-3xl font-bold text-ibvi-teal">US$ 4T</CardTitle>
              <CardDescription className="text-sm">Mercado Total</CardDescription>
            </CardHeader>
          </Card>
          <Card className="bg-white/90 dark:bg-card/90 border-gray-200/50 dark:border-border/50 text-center">
            <CardHeader className="pb-2">
              <CardTitle className="text-3xl font-bold text-ibvi-gold">90%</CardTitle>
              <CardDescription className="text-sm">Precisão IA</CardDescription>
            </CardHeader>
          </Card>
          <Card className="bg-white/90 dark:bg-card/90 border-gray-200/50 dark:border-border/50 text-center">
            <CardHeader className="pb-2">
              <CardTitle className="text-3xl font-bold text-ibvi-teal">60%</CardTitle>
              <CardDescription className="text-sm">Redução Tempo</CardDescription>
            </CardHeader>
          </Card>
          <Card className="bg-white/90 dark:bg-card/90 border-gray-200/50 dark:border-border/50 text-center">
            <CardHeader className="pb-2">
              <CardTitle className="text-3xl font-bold text-ibvi-gold">85%</CardTitle>
              <CardDescription className="text-sm">Jornadas Online</CardDescription>
            </CardHeader>
          </Card>
        </section>
      </div>
    </main>
  );
}