import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Github, Monitor } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  githubLink: string
  url: string
  tags: string[]
}

export default function ProjectCard({ title, description, image, url,githubLink, tags }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden w-140 bg-white p-5 rounded-lg shadow-md border border-gray-100">
      <div className="relative h-40">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform"
        />
      </div>
      <CardContent className="p-4">
        <h3 className="font-semibold text-xl mb-2">{title}</h3>
        <p className="text-sm text-gray-600 text-muted-foreground mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium ring-1 ring-inset ring-gray-500/10"
            >
              {tag}
            </span>
          ))}
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
    <div className="flex gap-4">
        <Link href={url} target="_blank" className="inline-flex items-center gap-2 text-sm hover:underline">
            <Monitor className="h-3 w-3" />
            View on Browser
        </Link>
        <Link href={githubLink} target="_blank" className="inline-flex items-center gap-2 text-sm hover:underline">
            <Github className="h-3 w-3" />
            View on GitHub
        </Link>
    </div>
</CardFooter>
    </Card>
  )
}
