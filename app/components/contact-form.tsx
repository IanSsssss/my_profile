import { FaDiscord, FaGithub, FaTelegramPlane, FaEnvelope } from "react-icons/fa"

export default function GetInTouch() {
  return (
    <section className="py-12 md:py-24 lg:py-32">
      <div className="max-w-xl mx-auto text-center">
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
              ☎️ Get in Touch
            </h2>
        <ul className="flex flex-col items-start gap-4 text-left text-lg mx-auto w-fit">
          <li className="flex items-center gap-2 text-gray-600">
            <FaDiscord className="text-[#5865F2]" />
            <span>yans5898</span>
          </li>
          <li className="flex items-center gap-2">
            <FaGithub className="text-black" />
            <a href="https://github.com/yourgithub" target="_blank" rel="noopener noreferrer" className="hover:underline text-gray-600">
              github.com/yourgithub
            </a>
          </li>
          <li className="flex items-center gap-2">
            <FaTelegramPlane className="text-[#0088cc]" />
            <a href="https://t.me/Ian_S_ian" target="_blank" rel="noopener noreferrer" className="hover:underline text-gray-600">
              @Ian_S_ian
            </a>
          </li>
          <li className="flex items-center gap-2">
            <FaEnvelope className="text-red-500" />
            <a href="mailto:yanshuai9604@email.com" className="hover:underline text-gray-600">
              yanshuai9604@email.com
            </a>
          </li>
        </ul>
      </div>
    </section>
  )
}
