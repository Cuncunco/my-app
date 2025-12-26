import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator
} from "@/components/ui/breadcrumb"

import { Post } from "contentlayer/generated"
import Link from "next/link"
import Image from "next/image"

import { Avatar } from "@/components/avatar"
import { Markdown } from "@/components/markdown"
import { PostShare } from "./components/post-share"

export type PostPageProps = {
  post: Post;
};

export const PostPage = ({ post }: PostPageProps) => {
  const publishedDate = new Date(post.date).toLocaleDateString("pt-BR");
  const postUrl = `https://site.set/blog/${post.slug}`;

 

  return (
    <main className="py-20 container">
      <div className="space-y-8 px-4 md:px-8">

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

        <PostShare 
        url={postUrl}
        title={post.title}
        description={post.description}
        />
        </div>
      </div>
    </main>
  );
};
