import React, { PropsWithChildren, useState } from "react";
import { menuList } from "shared";
import Link from "next/link";
import { classNames } from "utils";
import { CiMenuFries } from "react-icons/ci";
import { IoCloseOutline } from "react-icons/io5";
import { Button } from "@geist-ui/core";

export default function AppDrawer({ children }: PropsWithChildren) {
  const [state, setState] = useState(false);

  return (
    <div className="flex flex-1 flex-col items-end sm:hidden">
      <div className={classNames("px-10", state ? "opacity-0" : "opacity-100")}>
        <div className={"rounded-3xl p-2"} onClick={() => setState(true)}>
          <CiMenuFries fill={"white"} size={30} />
        </div>
      </div>
      <div
        className={classNames(
          state ? "" : "translate-y-full",
          "fixed inset-0 z-50 w-full transform bg-gray-900 bg-opacity-60 backdrop-blur backdrop-filter transition-all transition-transform duration-500 ease-in-out"
        )}
      >
        <div className={"flex h-full flex-col items-end px-10 py-6"}>
          <div
            className={"flex items-center rounded-3xl p-2"}
            onClick={() => setState(false)}
          >
            <IoCloseOutline fill={"white"} size={30} />
          </div>
          <div
            className={"flex h-full w-full flex-1 flex-col space-y-10 pt-10"}
          >
            {menuList.map((m) => (
              <Link href={m.href} key={m.href}>
                <Button
                  type={"abort"}
                  style={{
                    height: "unset",
                    minWidth: "unset",
                    width: "100%",
                    textAlign: "left",
                  }}
                  onClick={() => setState(false)}
                >
                  <span
                    className={"rounded-lg p-4 text-4xl font-bold text-white"}
                  >
                    {m.title}
                  </span>
                </Button>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
