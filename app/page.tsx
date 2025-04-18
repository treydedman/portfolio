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
      <div className="mx-auto max-w-3xl px-4 py-8">
        
        <header className="flex items-center justify-between mb-12 h-20">
          <div className="flex items-center w-12 h-12">
            <Image
              src={logo}
              alt="logo"
              className="transition-all duration-300"
            />
          </div>
          <ThemeToggle />
        </header>
      

        <main className="space-y-6">
          <h1 className="text-6xl font-extrabold leading-tight bg-gradient-to-t from-gray-500 via-gray-400 to-zinc-500 bg-clip-text text-transparent">
            Trey Dedman
          </h1>
          <p className="text-2xl font-medium text-gray-800 dark:text-gray-200">
            Web Developer
          </p>
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
          I’m a problem-solver who thrives at the intersection of design and development — where creativity meets logic. I bring ideas to life with thoughtful, scalable solutions and clean, efficient code. Driven by curiosity and a passion for learning, I’m always exploring new ways to build better experiences.
          </p>

          <div className="flex items-center gap-10 pt-2">
            <Link href="./TreyDedman-resume.pdf" target="_blank" rel="noopener noreferrer">
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
            <CardContent className="p-6 flex flex-col md:flex-row gap-24 items-center md:items-start">
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
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">CyBear Lock</h3>
                  
                </div>

                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                  <span className="font-medium text-gray-900 dark:text-gray-100">Frontend:</span> React, TypeScript, Tailwind CSS<br/>
                  <span className="font-medium text-gray-900 dark:text-gray-100">Backend:</span> Node.js, Express, PostgreSQL<br/>
                  <span className="font-medium text-gray-900 dark:text-gray-100">Auth:</span> JWT, Argon2<br/>
                  <span className="font-medium text-gray-900 dark:text-gray-100">Encryption:</span> AES (CryptoJS)
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
          

            
          
        </section>
          
          
        </main>

        </div>
    </div>
  );
}
