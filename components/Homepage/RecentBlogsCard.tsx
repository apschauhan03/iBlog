import Image from "next/image";
import Link from "next/link";


export default function RecentBlogsCard({postDetails}:any) {
    function extractAndTrimContent(text:string, n:number) {
        const regex = /<p>(.*?)<\/p>/g;
        const matches = [];
        let match;
        while ((match = regex.exec(text)) !== null) {
          // Capture group 1 for content, trim using slice(0, n)
          const content = match[1].trim().slice(0, n);
          if (content.length) { // Check if content is not empty after trimming
            matches.push(content);
          }
        }
        return matches;
      }
    return (
        <Link href={`/category/blogs/${postDetails.id}`}>
            <div className=" hover:bg-slate-500 flex rounded-sm">
                <div className=" h-[150px] w-1/2 relative m-4">
                    <Image className=" object-cover " fill alt="blog image" src={"https://images.unsplash.com/photo-1709656541505-36bc9c102434?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} />
                </div>
                <div className="w-1/2 m-4 font-semibold md:text-[12px] md:m-2">
                    <div>{postDetails?.title}
                        <span>{" Category"}</span>
                    </div>

                    <p className="font-extralight text-sm md:text-[11px]">{extractAndTrimContent(postDetails?.content,100)+"........"}</p>
                    <div>Read More!</div>
                </div>
            </div>
        </Link>

    )
}
