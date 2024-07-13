"use server";

import { auth } from "@/auth";
import prisma from "@/prisma/base";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { parseDocument } from 'htmlparser2';
import { DomUtils } from 'htmlparser2';

export const postPublishAction = async (title: string, formData: string) => {
  const session = await auth();
  const doc = parseDocument(formData);
  const firstImg = DomUtils.findOne(elem => elem.name === 'img', doc.children, true);

    // Log the first img element
    let coverImage = "";
    if (firstImg && firstImg.attribs) {
        coverImage = firstImg.attribs.src;
    }
    else
    {
      coverImage = "https://images.unsplash.com/photo-1666291631431-85cd843669ee?q=80&w=2674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    }


  if (!formData || !title || !session?.user?.email || !session.user.id) {
    return false;
  }
  const newPost = {
    data: {
      title: title,
      content: formData,
      authorName: session?.user?.name,
      firstImage:coverImage,
      like: 0,
      dislike: 0,
      authorId: session?.user?.id,
    },
  };
  await prisma.iBlogPosts.create(newPost);
  revalidatePath('/');
  redirect('/');
};
