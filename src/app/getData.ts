import { unstable_cache } from "next/cache";

export const tag = "revalidate-app-data";

export const getData = unstable_cache(
  async () => {
    return {
      value: +new Date(),
    };
  },
  ["app-data"],
  {
    revalidate: 60,
    tags: [tag],
  }
);
