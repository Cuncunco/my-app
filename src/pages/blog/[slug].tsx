import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator
} from "@/components/ui/breadcrumb"

import { useRouter } from "next/router"
import { allPosts } from "contentlayer/generated"
import Link from "next/link"
import Image from "next/image"

import { Avatar } from "@/components/avatar"
import { Markdown } from "@/components/markdown"
import { Button } from "@/components/ui/button"
import { useShare } from "@/hooks"

export default function PostPage() {
  const router = useRouter()

  // 1️⃣ aguarda o router
  if (!router.isReady) return null

  // 2️⃣ valida slug
  const slug = router.query.slug
  if (typeof slug !== "string") {
    return <p>Slug inválida</p>
  }

  // 3️⃣ busca o post
  const post = allPosts.find(p => p.slug === slug)
  if (!post) {
    return <p>Post não encontrado</p>
  }

  // 4️⃣ dados derivados (post já existe)
  const publishedDate = new Date(post.date).toLocaleDateString("pt-BR")
  const postUrl = `https://site.set/blog/${slug}`

  const { shareButtons } = useShare({
    url: postUrl,
    title: post.title,
    text: post.description
  })

  // 5️⃣ render FINAL (100% seguro)
  return (
    <main className="mt-32 container">
      <div className="container space-y-12 px-4 md:px-8">

        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/blog">Blog</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbSeparator />

            <BreadcrumbItem>
              <span className="text-blue-400 text-sm">
                {post.title}
              </span>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-12">
          <article className="bg-gray-900 rounded-lg overflow-hidden">

            <figure className="relative aspect-16/10">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
              />
            </figure>

            <header className="p-6 mt-8">
              <h1 className="text-3xl font-bold mb-6">
                {post.title}
              </h1>

              <Avatar.Container>
                <Avatar.Image
                  src={post.author.avatar}
                  alt={post.author.name}
                  size="sm"
                />
                <Avatar.Content>
                  <Avatar.Title>{post.author.name}</Avatar.Title>
                  <Avatar.Description>
                    Publicado em{" "}
                    <time dateTime={post.date}>{publishedDate}</time>
                  </Avatar.Description>
                </Avatar.Content>
              </Avatar.Container>
            </header>

            <div className="prose prose-invert max-w-none px-6 mt-12">
              <Markdown content={post.body.raw} />
            </div>
          </article>

          <aside>
            <div className="rounded-lg bg-gray-900 p-6">
              <h2 className="font-bold mb-4">Compartilhar</h2>

              <div className="space-y-3">
                {shareButtons?.map(button => (
                  <Button
                    key={button.provider}
                    onClick={() => button.action()}
                    variant="outline"
                    className="w-full justify-start gap-2"
                  >
                    {button.icon}
                    {button.name}
                  </Button>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  )
}