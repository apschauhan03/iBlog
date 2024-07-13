
import CategoryList from "@/components/CategoryList";
import Featured from "@/components/Featured";
import PopularMenu from "@/components/PopularMenu";
import Recent from "@/components/Recent";


export default async function Home({
  params,
  searchParams,
}: {
  params: { slug: string }
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  
  console.log(searchParams);

  return (
    <div>
      <Featured/>
      <CategoryList/>
      <div className="flex flex-row gap-4 md:flex-col">
        <Recent searchParams={searchParams}/>
        <PopularMenu/>
      </div>
    </div>
  );
}
