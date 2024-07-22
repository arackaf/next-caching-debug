"use client";

import { useRouter } from "next/navigation";
import { FC } from "react";
import { revalidate } from "./revalidate";

export const Display: FC<{ data: any }> = ({ data }) => {
  const router = useRouter();

  function reloadData() {
    revalidate();
    router.refresh();
  }

  console.log("A", data);

  return (
    <div className="flex flex-col gap-3 p-5">
      <span>Data: {data.value}</span>
      <button className="self-start border p-3" onClick={reloadData}>
        Revalidate
      </button>
    </div>
  );
};
