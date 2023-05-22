import React from "react";
import { AiFillGithub, AiFillYoutube } from "react-icons/ai";
import { FaTelegramPlane } from "react-icons/fa";
import Link from "next/link";
import { socialLink } from "shared";

export default function AppFooter() {
  return (
    <footer className="flex flex-col items-center rounded py-10 text-base">
      <div>
        <div className="grid grid-flow-col items-center gap-6">
          <Link href={socialLink.github} target={"_blank"}>
            <span className={"text-white hover:text-[#6e40c9]"}>
              <AiFillGithub size={25} />
            </span>
          </Link>
          <Link href={socialLink.youtube} target={"_blank"}>
            <span className={"text-white hover:text-[#e72d2d]"}>
              <AiFillYoutube size={25} />
            </span>
          </Link>
          <Link href={socialLink.telegram} target={"_blank"}>
            <span className={"text-white hover:text-[#0088cc]"}>
              <FaTelegramPlane size={25} />
            </span>
          </Link>
        </div>
      </div>
      <div>
        <p>Copyright © {new Date().getFullYear()} - TruongDQ</p>
      </div>
    </footer>
  );
}
