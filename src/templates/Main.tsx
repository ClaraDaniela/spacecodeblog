'use client';
import { ReactNode, useEffect, useState } from 'react';
import Link from 'next/link';

import { Navbar } from '../navigation/Navbar';
import { AppConfig } from '../utils/AppConfig';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => {

  const [bg, setBg] = useState("");

  useEffect(() => {
    fetch(`https://api.nasa.gov/planetary/apod?api_key=g0qNZugidBgB6DJ95xWjzogxG3swNYaUYP2DNvj6`)
      .then(res => res.json())
      .then(data => {
        if (data.media_type === "image") {
          setBg(data.url);
        }
      });
  }, []);

  return (
    <div
      className="antialiased w-full min-h-screen text-gray-200 px-3 md:px-0"
      style={{
        backgroundImage: bg
          ? `linear-gradient(rgba(2,6,23,0.5), rgba(2,6,23,0.7)), url(${bg})`
          : "linear-gradient(to bottom right, #0a0f1f, #0f172a, #020617)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >

      {props.meta}

      <div className="max-w-screen-md mx-auto">

        {/* HEADER */}
        <div className="text-lg leading-relaxed bg-black/50 backdrop-blur-md rounded-2xl p-6 shadow-lg border border-white/10">

          <div className="pt-16 pb-10">

            <div className="font-bold text-4xl tracking-wide bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              {AppConfig.title}
            </div>

            <div className="text-lg text-gray-400 mt-2 max-w-lg">
              {AppConfig.description}
            </div>

          </div>

          {/* NAVBAR */}
          <div className="text-lg leading-relaxed bg-black/50 backdrop-blur-md rounded-2xl p-6 shadow-lg border border-white/10">
            <Navbar>
              <li className="mr-6 hover:text-cyan-400 transition">
                <Link href="/">Página Principal</Link>
              </li>
              <li className="mr-6 hover:text-cyan-400 transition">
                <Link href="/about/">Sobre el proyecto</Link>
              </li>
              <li className="mr-6 hover:text-cyan-400 transition">
                <a href="https://github.com/ClaraDaniela">
                  GitHub
                </a>
              </li>
            </Navbar>
          </div>

        </div>

        {/* CONTENIDO */}
        {/* CONTENIDO */}
        <div className="py-8">
          <div className="bg-black/50 backdrop-blur-md rounded-2xl p-6 shadow-lg border border-white/10">
            {props.children}
          </div>
        </div>

        {/* FOOTER */}
        <div className="border-t border-white/10 text-center py-8 text-sm text-gray-500">
          © Copyright {new Date().getFullYear()} {AppConfig.title}.
        </div>

      </div>
    </div>
  );
};

export { Main };