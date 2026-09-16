const BASE_URL = "http://localhost:1337/api"

interface StrapiDataI {
  title: string;
  description: string;
  documentId: string;
  id: number;
}

export async function getStrapiData (url: string): Promise<StrapiDataI | null> {
  try {
    const resp = await fetch(`${BASE_URL}${url}`)
    if (!resp.ok) {
      throw new Error(`Failed to fetch data from Strapi: ${resp.statusText}`)
    }

    const { data }  = await resp.json()
    return data
  } catch (error: unknown) {
    console.log('error :>> ', error);
    return null
  }
}
