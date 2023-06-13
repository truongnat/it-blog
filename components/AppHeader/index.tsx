"use client"

import React from "react"
import Link from "next/link"
import { AppDrawer } from "~/components"
import { appLocale, menuList } from "~/shared"
import { useRouter } from "next/router";
import { getLocaleName } from "~/shared/utils";

export default function AppHeader() {
    const { locale, asPath } = useRouter();
    return (
    <header
      className={
        "flex items-center justify-end py-6 sm:px-10 md:px-20 lg:px-40"
      }
    >
      <div
        className="hidden flex-1 items-center justify-end space-x-10 sm:flex"
      >
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
        <div className={'control pl-10'}>
            <Link href={asPath} locale={locale === appLocale.VI ? appLocale.EN : appLocale.VI} className={'flex h-10 w-10 cursor-pointer flex-row items-center justify-center rounded text-sm font-semibold text-white transition-colors hover:bg-slate-700'}>
                {getLocaleName(locale)}
            </Link>
        </div>
      <AppDrawer />
    </header>
  )
}
