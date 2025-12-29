import { PostPage as Post } from "@/templates/blog";
import { allPosts } from "contentlayer/generated";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

export async function generateMetadata(
  { params }: { params: { slug: string } }
): Promise<Metadata> {
  const post = allPosts.find((post) => post.slug === params.slug);

  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    authors: [{ name: post.author.name }],
    robots: "index, follow",
    openGraph: {
      images: [post.image],
    },
  };
}

export default async function Page(
  { params }: { params: { slug: string } }
) {
  const post = allPosts.find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  return <Post post={post} />;
}

export function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post.slug,
  }));
}

export const revalidate = 60;
