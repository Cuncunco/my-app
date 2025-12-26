'use client';
import { Search } from "@/components/search";
import { PostCard } from "./components/post-card";
import { PostGridCard } from "./components/post-grid-card";
import { Post } from "contentlayer/generated";
import { Inbox } from 'lucide-react';
import { useSearchParams } from "next/navigation";

export type BlogListProps = {
    posts: Post[];
}

export function BlogList({ posts = [] }: BlogListProps) {
    const searchParams = useSearchParams();
    const query = searchParams?.get('q') ?? '';
    const pageTitle = query
        ? `Resultado de buscas para "${query}"`
        : "Dicas e estratégias para impulsionar seu negócio";

    const postsList = query ? posts.filter(post => post.title.toLowerCase().includes(query.toLowerCase())): posts;

    
    const hasPosts = postsList.length > 0;

    return (
        <div className="flex flex-col py-24 grow h-full">
            <header className="pb-14">
                <div className="container px-6 space-y-6 flex flex-col items-start justify-between md:flex-row md:items-end lg:items-end">
                    <div className="flex flex-col gap-4 md:px-0">
                        <span className="text-body-tag text-cyan-400 w-fit rounded-md text-center md:text-left py-2 px-4 bg-cyan-900">BLOG</span>

                        <h1 className="text-balance text-start md:text-left max-w-2xl text-gray-100 text-[28px] leading-[120%] font-bold md:text-[32px]">{pageTitle}</h1>
                    </div>
                    <Search />
                </div>
            </header>

            {
                hasPosts && (
                    <PostGridCard>
                        {postsList.map((post) => (
                            <PostCard
                                key={post._id}
                                title={post.title}
                                description={post.description}
                                date={new Date(post.date).toLocaleDateString('pt-BR')}
                                slug={post.slug}
                                image={post.image}
                                author={{
                                    avatar: post.author.avatar,
                                    name: post.author.name,
                                }}
                            />
                        ))}
                    </PostGridCard>
                )}
          {!hasPosts && (
            <div className="container">
            <div className="flex flex-col items-center justify-center gap-8 border-dashed border-2 border-gray-300 p-8 md:p-12 rounded-lg">
                <Inbox className="h-12 w-12 text-cyan-400"/>
                <p className="text-gray-100 text-center">Nenhum post encontrado</p>
            </div>
            </div>
          )}
        </div>
    );
}