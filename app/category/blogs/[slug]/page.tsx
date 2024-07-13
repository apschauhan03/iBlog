import UserResponse from "@/components/blogs/UserResponse";
import prisma from "@/prisma/base";
import Image from "next/image";
import parse from 'html-react-parser';
import "react-quill/dist/quill.snow.css";

const page: React.FC = async ({ params }: any) => {
    const getPost = await prisma.iBlogPosts.findUnique({
        where: {
            id: params.slug
        }
    });
    return <div>
        <header className=" font-semibold text-lg flex text-center p-2 justify-start">
            {getPost?.title}
        </header>
        <main>
            <div className="ql-editor" >
                {parse(getPost?.content as string)}
            </div>
        </main>
        <div>
            <header className=" font-semibold p-2 ">Summary</header>
            <p className=" pt-0 p-2">r randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
        </div>
        <UserResponse />

    </div>
}
export default page;