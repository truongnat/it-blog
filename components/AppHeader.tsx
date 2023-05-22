"use client";
import React from "react";
import Link from "next/link";
import { menuList, useMouseContext } from "shared";
import { AppDrawer } from "components";
import { Button } from "@geist-ui/core";

export default function AppHeader() {
  const { bindEvent } = useMouseContext();

  return (
    <header className="flex w-full items-center justify-end py-6">
      <div
        className="hidden space-x-2 px-0 sm:flex sm:space-x-6 sm:px-2"
        {...bindEvent}
      >
        {menuList.map((m) => (
          <Button key={m.href} auto type={"abort"}>
            <Link
              href={m.href}
              className={"text-base font-normal capitalize text-white"}
            >
              {m.title}
            </Link>
          </Button>
        ))}
      </div>
      <AppDrawer />
    </header>
  );
}
