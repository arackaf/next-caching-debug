"use server";

import { revalidateTag } from "next/cache";
import { tag } from "./getData";

export const revalidate = () => {
  revalidateTag(tag);
};
