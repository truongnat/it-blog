"use client"

import React from "react"
import Link from "next/link"
import { AppDrawer } from "~/components"
import { menuList, useMouseContext } from "~/shared"

export default function AppHeader() {
  const { bindEvent } = useMouseContext()

  return (
    <header
      className={"flex items-center justify-end py-6 sm:px-10 md:px-20 lg:px-40"}
    >
      <div className="hidden flex-1 sm:flex items-center justify-end space-x-10" {...bindEvent}>
        {menuList.map((m) => (
          <Link
            href={m.href}
            key={m.href}
            className={"text-base  font-normal text-white"}
          >
            {m.title}
          </Link>
        ))}
      </div>
      <AppDrawer />
    </header>
  )
}
