import { PostPage as Post } from "@/templates/blog";
import { allPosts } from "contentlayer/generated";
import type { Metadata } from "next";
import { notFound } from "next/navigation";


type BlogPostPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = allPosts.find((post) => post.slug === slug);

  if (!post) {
    return {}
  }

  return {
    title: post.title,
    description: post.description,
    authors: [{ name: post.author.name }],
    robots: 'index, follow',
    openGraph: {
      images: [post.image]
    }
  }
}

export default async function PostPage({ params }: BlogPostPageProps) {
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
