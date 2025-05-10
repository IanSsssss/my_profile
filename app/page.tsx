"use client";
import { useState } from "react";
import TechStack from "./components/techStack";
import ContactForm from "./components/contact-form";
import ProjectCard from "./components/project-card";
import { OrbitingCirclesDemo } from "./components/orbiting-circle";
import { Summary } from "./components/summary";
import { Timeline } from "./components/timeline";
import BookCardList from "./bookcard";

export default function Page() {
  const [category, setCategory] = useState<"tech" | "nontech">("tech");

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <div className="flex flex-row gap-8">
        <div className="flex-2 p-2">
          <Summary />
        </div>
        <div className="flex-1 p-1">
          <OrbitingCirclesDemo />
        </div>
      </div>
      <section id="timeline" className="relative p-8">
      <h2 className="p-8 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-2 text-left">
            Work Experience
          </h2>
        <div className="flex justify-center p-8">
          <Timeline />
        </div>
      </section>
      <section className="flex justify-center p-8">
        <div className="container mx-auto px-2 md:px-2">
          <h2 className="p-8 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-2 text-left">
            Tech Stack
          </h2>
          <TechStack />
        </div>
      </section>
      <section className="flex justify-center p-8">
      <div className="container mx-auto px-2 md:px-2">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-2 text-left">
          Project Expirence
        </h2>
        <div className="justify-center flex gap-29 md:grid-cols-2 lg:grid-cols-2 mt-10">
          <ProjectCard
            title="Cyper Temple(🚧 Work in progress)"
            description="CyperTemple is what happens when Web3 meets divine chaos.
Choose a god, post your prayer, and get AI-powered prophecy in return. Or better yet — deploy your own deity, and see who dares to worship it.
It's part temple, part social experiment, and entirely on-chain."
            image="/temple2.png"
            url="https://cyper-temple.vercel.app/"
            githubLink="https://github.com/IanSsssss/cyper_temple"
            tags={["Next.js", "Solidity", "ethers.js"]}
          />
          <ProjectCard
            title="Task Management App"
            description="A real-time task management application with team collaboration features."
            image=""
            url="https://github.com"
            githubLink="https://github.com"
            tags={["React", "Node.js", "Socket.io"]}
          />
        </div>
      </div>
      </section>
      <section className="flex justify-center p-8">
      <div className="container mx-auto px-2 md:px-2">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-2 text-left">
          My Book List
        </h2>
        <button
          onClick={() => setCategory("tech")}
          className={`px-4 text-base transition-colors duration-200 hover:underline ${
            category === "tech"
              ? "bg-white text-slate-900"
              : "text-slate-500 hover:bg-white/60"
          }`}
        >
          Tech
        </button>
        <button
          onClick={() => setCategory("nontech")}
          className={`text-base transition-colors duration-200 hover:underline ${
            category === "nontech"
              ? "bg-white text-slate-900"
              : "text-slate-500 hover:bg-white/60"
          }`}
        >
          Non-Tech
        </button>

        <BookCardList category={category} />
        <div />
      </div>
      </section>
      <section id="contact" className="justify-center flex mt-1">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-2xl">
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}

function Header() {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Ian&apos;s Profile</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="#timeline" className="hover:text-gray-300">
                Work Experience
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-gray-300">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
