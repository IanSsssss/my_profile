// import { Button } from "@/components/ui/button"
// import { Github, Linkedin, Mail, Twitter } from "lucide-react"
import TechStack from "./components/techStack";
import ContactForm from "./components/contact-form";
import ProjectCard from "./components/project-card";
import { OrbitingCirclesDemo } from "./components/orbiting-circle";
import { Summary } from "./components/summary";
import { Timeline } from "./components/timeline";

export default function Page() {
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
      <section id="timeline" className="relative">
        <div className="flex justify-center p-8">
          <Timeline />
        </div>
      </section>
      <section className="flex justify-center p-8">
        <div className="container mx-auto px-2 md:px-2">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-2 text-left">
            Tech Stack
          </h2>
          <TechStack />
        </div>
      </section>
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
        <h1 className="text-2xl font-bold">Ian&apos;s Home</h1>
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

// function pageraw() {
//   return (
//     <div className="flex items-center justify-center w-full flex-col px-4">
//       <main className="container px-4 md:px-6">
//         <section id="about" className="py-12 md:py-24 lg:py-32">
//           <div className="container px-4 md:px-6">
//           <div className="relative overflow-hidden h-[500px] w-full">
//             <div className="flex flex-col items-center justify-center space-y-4 text-center">
//               <div className="space-y-2">
//                 <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
//                   Full Stack Developer
//                 </h1>
//                 <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
//                   Building digital experiences with modern technologies. Focused on creating elegant solutions to
//                   complex problems.
//                 </p>
//               </div>
//               <div className="space-x-4">
//                 <Link href="https://github.com" target="_blank">
//                   <Button variant="outline" size="icon">
//                     <Github className="h-4 w-4" />
//                     <span className="sr-only">GitHub</span>
//                   </Button>
//                 </Link>
//                 <Link href="https://linkedin.com" target="_blank">
//                   <Button variant="outline" size="icon">
//                     <Linkedin className="h-4 w-4" />
//                     <span className="sr-only">LinkedIn</span>
//                   </Button>
//                 </Link>
//                 <Link href="https://twitter.com" target="_blank">
//                   <Button variant="outline" size="icon">
//                     <Twitter className="h-4 w-4" />
//                     <span className="sr-only">Twitter</span>
//                   </Button>
//                 </Link>
//                 <Link href="mailto:hello@example.com">
//                   <Button variant="outline" size="icon">
//                     <Mail className="h-4 w-4" />
//                     <span className="sr-only">Email</span>
//                   </Button>
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </section>

//         <section id="projects" className="py-12 md:py-24 lg:py-32">
//           <div className="container px-4 md:px-6">
//             <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">Projects</h2>
//             <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
//               <ProjectCard
//                 title="E-commerce Platform"
//                 description="A full-stack e-commerce platform built with Next.js, Prisma, and Stripe integration."
//                 image="/placeholder.svg?height=400&width=600"
//                 link="https://github.com"
//                 tags={["Next.js", "Prisma", "Stripe"]}
//               />
//               <ProjectCard
//                 title="Task Management App"
//                 description="A real-time task management application with team collaboration features."
//                 image="/placeholder.svg?height=400&width=600"
//                 link="https://github.com"
//                 tags={["React", "Node.js", "Socket.io"]}
//               />
//               <ProjectCard
//                 title="AI Chat Interface"
//                 description="An AI-powered chat interface with natural language processing capabilities."
//                 image="/placeholder.svg?height=400&width=600"
//                 link="https://github.com"
//                 tags={["OpenAI", "Next.js", "TailwindCSS"]}
//               />
//             </div>
//           </div>
//         </section>

//         <section className="py-12 md:py-24 lg:py-32">
//           <div className="container px-4 md:px-6">
//             <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
//               Tech Stack
//             </h2>
//             <TechStack />
//           </div>
//         </section>

// <section id="contact" className="py-12 md:py-24 lg:py-32">
//   <div className="container px-4 md:px-6">
//     <div className="mx-auto max-w-2xl">
//       <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
//         Get in Touch
//       </h2>
//       <ContactForm />
//     </div>
//   </div>
// </section>
//       </main>

//       <footer className="border-t">
//         <div className="container flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6">
//           <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 John.dev. All rights reserved.</p>
//           <nav className="sm:ml-auto flex gap-4 sm:gap-6">
//             <Link className="text-xs hover:underline underline-offset-4" href="#">
//               Terms of Service
//             </Link>
//             <Link className="text-xs hover:underline underline-offset-4" href="#">
//               Privacy
//             </Link>
//           </nav>
//         </div>
//       </footer>
//     </div>
//   )
// }
