
import prisma from "@/prisma/base";
import Link from "next/link";
export default async function Slideshow() {
    const productsCount = await prisma.iBlogPosts.count();
    const skip = Math.floor(Math.random() * productsCount);
    const featuredPosts = await prisma.iBlogPosts.findMany({
        take: 1,
        skip: skip,
        orderBy: {
            createdAt: 'desc',
        },
    });

    return (
        <Link href={`/category/blogs/${featuredPosts[0].id}`}>
            <div className="w-full h-full relative group">
                <div style={{ backgroundImage: `url(${featuredPosts[0].firstImage})` }} className="relative rounded-2xl w-full h-full bg-center bg-cover">
                    <span className="absolute bottom-4 left-4 text-2xl font-semibold rounded-lg bg-white px-2 py-1 text-slate-800">{(featuredPosts[0].title.toUpperCase())}</span>
                </div>
            </div>
        </Link>
    )
}
