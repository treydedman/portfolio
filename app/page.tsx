"use client";

import Image from "next/image";
import logo from "../public/td-logo-gray.gif";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaArrowRight } from "react-icons/fa";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-neutral-900 text-black dark:text-white transition-colors duration-300">
      <div className="mx-auto max-w-4xl px-4 py-8">
        <header className="flex items-center justify-between mb-8 h-16">
          <div className="flex items-center w-12 h-12">
            <Image
              src={logo}
              alt="logo"
              className="transition-all duration-300"
            />
          </div>
          <ThemeToggle />
        </header>

        <main className="space-y-4">
          <h1 className="text-6xl font-extrabold leading-tight bg-gradient-to-t from-gray-500 via-gray-400 to-zinc-500 bg-clip-text text-transparent">
            Trey Dedman
          </h1>
          <p className="text-2xl font-medium text-black dark:text-gray-200">
            Web Developer — Cybersecurity
          </p>
          <p className="text-lg leading-relaxed text-black dark:text-gray-300">
            I enjoy turning ideas into clean, functional experiences. My
            background in cybersecurity taught me how to dig deep into complex
            problems, now I use that same mindset to build impact-driven
            applications grounded in purpose, with intuitive design. I blend
            logic and creativity, thriving on challenges that push me to grow.
          </p>
          <p className="text-lg leading-relaxed text-black dark:text-gray-300">
            Always learning, always improving, and always curious.
          </p>
          <p className="text-lg leading-relaxed text-black dark:text-gray-300">
            Let’s connect and explore how we can build something great together.
          </p>

          <div className="flex items-center gap-10 mt-10 pt-2">
            <Link
              href="./TreyDedman-resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="rounded-lg bg-gradient-to-t from-gray-500 via-gray-400 to-zinc-500 text-white font-semibold transition-transform hover:scale-110">
                Resume
              </Button>
            </Link>
            <Link
              href="https://github.com/treydedman"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors hover:scale-110"
            >
              <FaGithub className="w-8 h-8" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/treydedman/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors hover:scale-110"
            >
              <FaLinkedin className="w-8 h-8" />
            </Link>
          </div>

          <section className="mt-20 space-y-12">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100">
              Featured Projects
            </h2>

            <Card className="bg-white dark:bg-zinc-800 border border-gray-200 dark:border-black rounded-2xl shadow-md transition-transform duration-300 w-full max-w-4xl mx-auto">
              <CardContent className="p-6 flex flex-col md:flex-row gap-32 items-center md:items-start">
                <Image
                  src="/cybear-og.png"
                  alt="CyBear Lock"
                  width={300}
                  height={0}
                  style={{ height: "auto" }}
                  className="rounded-xl"
                />

                <div className="flex-1 space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      CyBear Lock
                    </h3>
                  </div>

                  <p className="text-sm text-gray-900 dark:text-gray-300 leading-relaxed">
                    <span className="font-medium text-gray-900 dark:text-gray-100">
                      Frontend:
                    </span>{" "}
                    React, TypeScript, Tailwind CSS
                    <br />
                    <span className="font-medium text-gray-900 dark:text-gray-100">
                      Backend:
                    </span>{" "}
                    Node.js, Express, PostgreSQL
                    <br />
                    <span className="font-medium text-gray-900 dark:text-gray-100">
                      Auth:
                    </span>{" "}
                    JSON Web Tokens (JWT), Argon2
                    <br />
                    <span className="font-medium text-gray-900 dark:text-gray-100">
                      Encryption:
                    </span>{" "}
                    AES (CryptoJS)
                  </p>
                  <div className="mt-2">
                    <Link
                      href="http://ec2-3-142-16-53.us-east-2.compute.amazonaws.com/"
                      className="flex items-center gap-2 text-blue-950 dark:text-teal-300 hover:font-bold mt-2"
                      target="_blank" // optional: open in new tab
                      rel="noopener noreferrer"
                    >
                      View Project <FaArrowRight />
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white dark:bg-zinc-800 border border-gray-200 dark:border-black rounded-2xl shadow-md transition-transform duration-300 w-full max-w-4xl mx-auto">
              <CardContent className="p-6 flex flex-col md:flex-row gap-32 items-center md:items-start">
                <Image
                  src="/crypto-watchlist-og.png"
                  alt="Crypto Watchlist"
                  width={300}
                  height={0}
                  style={{ height: "auto" }}
                  className="rounded-xl"
                />

                <div className="flex-1 space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      Crypto Watchlist
                    </h3>
                  </div>

                  <p className="text-sm text-gray-900 dark:text-gray-300 leading-relaxed">
                    <span className="font-medium text-gray-900 dark:text-gray-100">
                      Frontend Project
                    </span>{" "}
                    <br />
                    TypeScript, HTML5, CSS3
                    <br />
                    JavaScript DOM manipulation
                    <br />
                    CoinCap REST API integration
                  </p>
                  <div className="mt-2">
                    <Link
                      href="https://treydedman.github.io/Crypto-Watchlist-Project/"
                      className="flex items-center gap-2 text-blue-500  hover:font-bold mt-2"
                      target="_blank" // optional: open in new tab
                      rel="noopener noreferrer"
                    >
                      View Project <FaArrowRight />
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>
        </main>
      </div>
    </div>
  );
}
