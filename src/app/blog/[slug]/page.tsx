import { PostPage as Post } from "@/templates/blog";
import { allPosts } from "contentlayer/generated";
import { notFound } from "next/navigation";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function PostPage({ params }: PageProps) {
  const { slug } = await params;

  const post = allPosts.find((post) => post.slug === slug);

  if (!post) {
    notFound();
  }

  return <Post post={post} />;
}

/**
 * Geração estática dos slugs
 */
export function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post.slug,
  }));
}

/**
 * ISR (opcional)
 */
export const revalidate = 60;
