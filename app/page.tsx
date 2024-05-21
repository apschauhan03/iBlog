import CategoryList from "@/components/CategoryList";
import Featured from "@/components/Featured";
import PopularMenu from "@/components/PopularMenu";
import Recent from "@/components/Recent";


export default function Home() {
  return (
    <div>
      <Featured/>
      <CategoryList/>
      <div>
        <Recent/>
        <PopularMenu/>
      </div>
    </div>
  );
}
