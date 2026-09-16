import { getStrapiData } from "@/lib/strapi";

export default async function Home() {
  const getData = await getStrapiData("/home-page")

  return (
    <main className="container mx-auto py-6">
      <h1 className="text-3xl font-bold">{getData?.title ? getData.title : "Default Title"}</h1>
      <p className="text-gray-600">{getData?.description ? getData.description : "Default Description"}</p>
    </main>
  );
}
