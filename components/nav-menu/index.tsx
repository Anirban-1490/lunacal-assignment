"use client";

import React, { useState } from "react";

const navContent = ["About Me", "Experiences", "Recommended"];

export function NavMenu() {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <nav className=" bg-blk-900 w-full h-[4rem] rounded-3xl">
      <ul className=" w-full h-full grid grid-cols-3 gap-3 p-2">
        {navContent.map((content, index) => {
          return (
            <li
              key={index}
              className={` cursor-pointer flex items-center justify-center text-[#A3ADB2] ${
                activeTab === index
                  ? "bg-[#28292F] text-white rounded-2xl shadow-[0_0_50px_#000]"
                  : "bg-transparent"
              }`}
              onClick={() => {
                setActiveTab(index);
              }}
            >
              {content}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
