"use client";

import Image from "next/image";
import React from "react";

interface IWidgetProps {
  children: JSX.Element;
}

export function WidgetGeneric({ children }: IWidgetProps) {
  return (
    <article className="flex  w-[43rem] h-[20rem] bg-[#363C43] shadow-[0.4rem_0.4rem_0.1rem_#000]  rounded-3xl">
      <div className="relative w-[1.8rem] h-[12rem] ml-5 mt-4">
        <Image src={"/images/icons.png"} alt="" fill />
      </div>
      <div className="w-[37rem]  h-full mx-auto py-5 flex flex-col gap-7">
        {children}
      </div>
    </article>
  );
}
