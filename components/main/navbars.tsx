"use client";

import { useState } from "react";
import Link from "next/link";

const Navbar = () => {

  const [isVisible, setIsVisible] = useState(false);

  type Link = {
    id: number;
    icon: string;
    text: string;
    url: string;
  };

  const links: Link[] = [
    { id: 1, icon: "☰", text: "خانه", url: "/" },
    { id: 2, icon: "☰", text: "دسته بندی ها", url: "/categories" },
    { id: 3, icon: "☰", text: "جست و جو", url: "/search" },
    { id: 4, icon: "☰", text: "فیلم های من", url: "/my-videos" },
    { id: 5, icon: "☰", text: "حساب کاربری", url: "/account" },
  ];

  return (
    <nav>
      {/* top */}
      <div
        onClick={ () => setIsVisible(!isVisible)}
        className={`fixed flex flex-row-reverse justify-between items-start top-4 left-4 right-4 z-50 ${
          isVisible ? "bottom-4" : ""
        }`}
      >
        {/* menu */}
        <div className="rounded-full bg-black">
          <div
            onClick={() => setIsVisible(!isVisible)}
            className="overflow-hidden text-themecolor w-12 rounded-full flex flex-col cursor-pointer bg-black transition-all"
          >
            <div className="flex justify-center items-center h-12">☰</div>
            <div
              className={`w-full transition-all ease-linear duration-400 ${
                isVisible ? "max-h-100" : "max-h-0"
              }`}
            >
              <div className="flex flex-col gap-3 justify-center items-center pb-4">
                {links.map((link) => (
                  <Link className="px-2" key={link.id} href={""}>
                    {link.icon}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* logo */}
        <div className="w-12 h-12 overflow-hidden p-1">
          <img src="/logo/qweb-logo.jpg" alt="" className="rounded-full" />
        </div>
      </div>

      {/* bottom */}
      <div className="fixed p-3 rounded-xl bg-black bottom-4 left-4 right-4 lg:left-80 lg:right-80 z-50">
        <div className="flex justify-around">
          {links.map((link) => (
            <Link
              key={link.id}
              href={link.url}
              className="flex flex-col flex-1 justify-center items-center text-themecolor"
            >
              <p className="text-xl">{link.icon}</p>
              <p className="text-xs">{link.text}</p>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
