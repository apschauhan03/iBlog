import { auth } from "@/auth";
import Quill from "@/components/blogs/Quill";
import { redirect } from "next/navigation";

const page:React.FC = async ()=>{
    const session = await auth();
    if(!session)
      redirect("/login");
    return (<div>
        <Quill/>
    </div>)
}

export default page;