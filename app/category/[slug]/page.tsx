import RecentBlogsCard from "@/components/Homepage/RecentBlogsCard"
import { colorMap } from "@/components/CategoryList";
import Pagination from "@/components/pagination";

interface pageProps {
    params: {
        slug:string;
    }
    bgColor:string;
}

const page:React.FC<pageProps> = ({params,bgColor}) => {
    const theme = colorMap[params.slug as keyof typeof colorMap];
    return (
        <div>
            <div className={theme + "  font-semibold p-4 mb-2 text-center"}>{params.slug.toUpperCase()}</div>
            <div>
                <RecentBlogsCard />
                <RecentBlogsCard />
                <RecentBlogsCard />
                <RecentBlogsCard />
                <RecentBlogsCard />
                <RecentBlogsCard />
                <RecentBlogsCard />
                <RecentBlogsCard />
            </div>
            <div className="p-4">
                <Pagination/>
            </div>
        </div>
    )
}

export default page
