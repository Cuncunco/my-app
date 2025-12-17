import Image from "next/image"
import Link from "next/link"

type Author = {
    name: string;
    avatar: string;
};

type PostCardProps = {
    slug: string;
    title: string;
    description: string;
    image: string;
    date: string;
    author: Author;
};

export const PostCard = ({ slug, title, description, image, date, author }: PostCardProps) => {
    return (
        <Link href={`/blog/${slug}`} className="w-full max-w-2xl rounded-[12px] border border-gray-800 bg-gray-900 overflow-hidden transition-all duration-300 hover:border">
            <div className="p-2 rounded-md overflow-hidden">
                <div className="relative">
                    <div className="absolute top-0 right-0 px-3 py-1 bg-gray-900">
                        <span className="text-gray-400 text-[14px] leading-[150%] normal rounded-bl-[10px]">{date}</span>
                    </div>
                    <Image
                        src={image}
                        alt={title}
                        width={288}
                        height={144}
                        className="w-full h-40 object-cover object-center rounded-t-xl" />
                </div>
                <div className="px-2 mt-4 space-y-4">
                    <h2 className="text-[20px] leading-[120%] font-bold text-gray-100 line-clamp-3">{title}</h2>

                    <p className="text-gray-400 text-[14px] leading-[150%] normal line-clamp-3">
                        {description}
                    </p>
                    

                    <div className="flex items-center gap-3 border-t border-gray-600 py-4">
                        <div className="relative h-5 w-5 md:h-6 md:w-6 overflow-hidden rounded-full border-blue-600 border">
                            <Image
                                src={author.avatar}
                                alt="imagem"
                                fill
                                className="object-cover rounded-md"
                            />
                        </div>
                        

                        <span className="text-[14px] leading-[150%] font-normal text-gray-400">{author.name}</span>
                    </div>
                </div>
            </div>
        </Link>
    )
}