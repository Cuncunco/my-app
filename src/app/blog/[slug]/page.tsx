import { PostPage as Post } from "@/templates/blog";
import { allPosts } from "contentlayer/generated";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export async function generateMetadata(
  { params }: { params: { slug: string } }
): Promise<Metadata> {
  const post = allPosts.find(p => p.slug === params.slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
  };
}

export default function Page(
  { params }: { params: { slug: string } }
) {
  const post = allPosts.find(p => p.slug === params.slug);

  if (!post) notFound();

  return <Post post={post} />;
}

export function generateStaticParams() {
  return allPosts.map(post => ({
    slug: post.slug,
  }));
}
