"use server";

import { auth } from "@/auth";
import prisma from "@/prisma/base";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const postPublishAction = async (title: string, formData: string) => {
  const session = await auth();

  if (!formData || !title || !session?.user?.email || !session.user.id) {
    return false;
  }
  const newPost = {
    data: {
      title: title,
      content: formData,
      authorName: session?.user?.name,
      like: 0,
      dislike: 0,
      authorId: session?.user?.id,
    },
  };
  await prisma.iBlogPosts.create(newPost);
  revalidatePath('/');
  redirect('/');
};
