'use client'

import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { IbviLogo } from '@/components/ibvi-logo'
import { ThemeToggle } from '@/components/theme-toggle'
import { Button } from '@/components/brand/Button'
import { cn } from '@/lib/utils'

interface NavItem {
  name: string
  href: string
  current?: boolean
}

const navigation: NavItem[] = [
  { name: 'Início', href: '/' },
  { name: 'Sobre', href: '/sobre' },
  { name: 'Manual', href: '/manual' },
  { name: 'Componentes', href: '/components' },
]

export default function Navbar() {
  const pathname = usePathname()

  const isCurrentPage = (href: string) => {
    if (href === '/') {
      return pathname === '/'
    }
    return pathname.startsWith(href)
  }

  return (
    <Disclosure as="nav" className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border/40 sticky top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 justify-between">
          <div className="flex">
            <div className="flex shrink-0 items-center">
              <Link href="/" aria-label="IBVI Home">
                <IbviLogo className="h-8 w-auto" />
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              {navigation.map((item) => {
                const current = isCurrentPage(item.href)
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      "inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium transition-colors",
                      current
                        ? "border-primary text-foreground"
                        : "border-transparent text-muted-foreground hover:border-border hover:text-foreground"
                    )}
                  >
                    {item.name}
                  </Link>
                )
              })}
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center space-x-4">
            <ThemeToggle />
            
            {/* Profile dropdown */}
            <Menu as="div" className="relative ml-3">
              <div>
                <MenuButton className="relative flex rounded-full bg-background text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2">
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">Open user menu</span>
                  <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-medium text-sm">U</span>
                  </div>
                </MenuButton>
              </div>
              <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-background py-1 shadow-lg ring-1 ring-border transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
              >
                <MenuItem>
                  <Link
                    href="/perfil"
                    className="block px-4 py-2 text-sm text-foreground data-[focus]:bg-muted data-[focus]:outline-none"
                  >
                    Seu Perfil
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link
                    href="/configuracoes"
                    className="block px-4 py-2 text-sm text-foreground data-[focus]:bg-muted data-[focus]:outline-none"
                  >
                    Configurações
                  </Link>
                </MenuItem>
                <MenuItem>
                  <button
                    className="block w-full text-left px-4 py-2 text-sm text-foreground data-[focus]:bg-muted data-[focus]:outline-none"
                  >
                    Sair
                  </button>
                </MenuItem>
              </MenuItems>
            </Menu>

            <Button size="sm" className="hidden lg:flex">
              Acessar Plataforma
            </Button>
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            <ThemeToggle />
            {/* Mobile menu button */}
            <DisclosureButton className="group relative ml-2 inline-flex items-center justify-center rounded-md p-2 text-muted-foreground hover:bg-muted hover:text-foreground focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
            </DisclosureButton>
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden border-t border-border">
        <div className="space-y-1 pb-3 pt-2">
          {navigation.map((item) => {
            const current = isCurrentPage(item.href)
            return (
              <DisclosureButton
                key={item.name}
                as={Link}
                href={item.href}
                className={cn(
                  "block border-l-4 py-2 pl-3 pr-4 text-base font-medium transition-colors",
                  current
                    ? "border-primary bg-primary/5 text-primary"
                    : "border-transparent text-muted-foreground hover:border-border hover:bg-muted hover:text-foreground"
                )}
              >
                {item.name}
              </DisclosureButton>
            )
          })}
        </div>
        <div className="border-t border-border pb-3 pt-4">
          <div className="flex items-center px-4">
            <div className="shrink-0">
              <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-primary font-medium">U</span>
              </div>
            </div>
            <div className="ml-3">
              <div className="text-base font-medium text-foreground">Usuário IBVI</div>
              <div className="text-sm font-medium text-muted-foreground">usuario@ibvi.com.br</div>
            </div>
          </div>
          <div className="mt-3 space-y-1">
            <DisclosureButton
              as={Link}
              href="/perfil"
              className="block px-4 py-2 text-base font-medium text-muted-foreground hover:bg-muted hover:text-foreground"
            >
              Seu Perfil
            </DisclosureButton>
            <DisclosureButton
              as={Link}
              href="/configuracoes"
              className="block px-4 py-2 text-base font-medium text-muted-foreground hover:bg-muted hover:text-foreground"
            >
              Configurações
            </DisclosureButton>
            <DisclosureButton
              as="button"
              className="block w-full text-left px-4 py-2 text-base font-medium text-muted-foreground hover:bg-muted hover:text-foreground"
            >
              Sair
            </DisclosureButton>
            <div className="px-4 py-2">
              <Button size="sm" className="w-full">
                Acessar Plataforma
              </Button>
            </div>
          </div>
        </div>
      </DisclosurePanel>
    </Disclosure>
  )
}