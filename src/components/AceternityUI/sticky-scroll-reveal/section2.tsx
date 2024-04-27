"use client";
import React from "react";
import { StickyScroll } from "./sticky-scroll-reveal";
import { Cpu, Graph, Package, TreeStructure } from "@phosphor-icons/react";


const content = [
  {
    title: "Collaborative Editing",
    description:
      "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
    content: (
      <div className="h-full w-full bg-black flex items-center justify-center text-white ">
      
        <Cpu size={36} color="#00f5fe" weight="light" className="h-full w-full" />
      </div>
    ),
  },
  {
    title: "Real time changes",
    description:
      "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
       <Graph size={90} color="#56d5c3" />
      </div>
    ),
  },
  {
    title: "Version control",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--black),var(--slate-500))] flex items-center justify-center text-white">
      <Package size={96} color="#3bdf63" weight="duotone" />

      </div>
    ),
  },
  {
    title: "Running out of content",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        <TreeStructure size={84} color="#f17917" weight="thin" />
      </div>
    ),
  },
];
export function StickyScrollRevealDemo() {
  return (
    <div className=" w-full">
      <StickyScroll content={content} />
    </div>
  );
}
