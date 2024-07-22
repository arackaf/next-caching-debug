import { Display } from "./Display";
import { getData } from "./getData";

export default async function Home() {
  const data = await getData();

  return (
    <main>
      <Display data={data} />
    </main>
  );
}

export const revalidate = 0;
