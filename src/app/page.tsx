"use client";

import { useState } from "react";
import GithubIcon from "@/icons/GithubIcon";
import LinkedinIcon from "@/icons/LinkedinIcon";
import MailIcon from "@/icons/MailIcon";
import Image from "next/image";

export default function Home() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    const newCount = count + 1;
    if (newCount === 10) {
      setCount(0);
      const newWindow = window.open("https://cataas.com/cat", "_blank");
      if (newWindow) {
        newWindow.focus();
      }
    } else {
      setCount(newCount);
    }
  };
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-2 row-start-2 justify-center items-center">
        <h3 className="text-4xl font-bold bg-clip-text hover:text-transparent text-blue-50 transition-all animate-clip-text">Pranav Dudhane</h3>
        <a href="mailto:pranavsd152@gmail.com" className="group flex gap-2 items-center hover:underline decoration-blue-400">
          <MailIcon className="group-hover:text-blue-400" /> pranavsd152@gmail.com
        </a>
        <div className="flex gap-4 align-middle">
          <a href="https://www.linkedin.com/in/pro-nav/">
            <LinkedinIcon className="hover:text-blue-400" />
          </a>
          <a href="https://github.com/pro-nav/" >
            <GithubIcon className="hover:text-blue-400" />
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <button onClick={handleClick} className="bg-none border-0 cursor-pointer">
          <Image src="/favicon.png" alt="Logo" width={24} height={24} />
        </button>
      </footer>
    </div>
  );
}
