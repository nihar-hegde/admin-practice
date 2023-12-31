"use client"
import { cn } from '@/lib/utils'
import { Home, Layers3, ShoppingCart, UsersRound } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const links = [
  {
    name: 'Dashboard',
    href: "/dashboard",
    icon: <Home />
  },
  {
    name: "Users",
    href: "/dashboard/users",
    icon: <UsersRound />
  },
  {
    name: "Products",
    href: "/dashboard/products",
    icon: <ShoppingCart />
  },
  {
    name: "Category",
    href: "/dashboard/category",
    icon: <Layers3 />
  }
]
const NavLinks = () => {
  const pathname = usePathname();
  return (
    <>
      {
        links.map((link) => {
          return (
            <Link href={link.href} key={link.href}
              className={cn('flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-zinc-100 p-3 text-sm font-medium hover:bg-zinc-200 hover:text-zinc-900 md:flex-none md:justify-start md:p-2 md:px-3',
                {
                  'bg-black text-white': pathname === link.href
                })}
            >{link.icon}{link.name}</Link>
          )
        })
      }
    </>
  )
}

export default NavLinks
