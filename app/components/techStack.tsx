import { Card } from "@/components/ui/card"

const technologies = [
  {
    category: "Language",
    skills: ["Node.js", "Golang", "TypeScript", "Rust", "Solidity"],
  },
  {
    category: "Framework",
    skills: ["Next.js", "React", "Midway", "Gin", "Express", "Koa.js"],
  },
  {
    category: "Databases",
    skills: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Memcached", "ClickHouse"],
  },
  {
    category: "Other",
    skills: ["Docker", "Git", "Nginx", "GraphQL"],
  },
]

export default function TechStack() {
  return (
    <div className="grid gap-6 md:grid-cols-4">
      {technologies.map((tech) => (
        <Card key={tech.category}   className="bg-white p-5 rounded-lg shadow-md border border-gray-100 max-w-xs min-w-[220px] text-center">
          <h3 className="text-lg font-semibold mb-4">{tech.category}</h3>
          <div className="flex flex-wrap gap-2">
            {tech.skills.map((skill) => (
              <span
                key={skill}
                className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-sm font-medium text-primary ring-1 ring-inset ring-primary/20"
              >
                {skill}
              </span>
            ))}
          </div>
        </Card>
      ))}
    </div>
  )
}
