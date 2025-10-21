// @ts-ignore
const API_KEY = import.meta.env.VITE_FOOTBALL_API_KEY as string;
const BASE_URL = "https://v3.football.api-sports.io";

export async function footballApi<T>(
  endpoint: string,
  params: Record<string, any> = {}
): Promise<T> {
  const url = new URL(endpoint, BASE_URL);
  Object.entries(params).forEach(([k, v]) =>
    url.searchParams.append(k, String(v))
  );

  const res = await fetch(url.toString(), {
    headers: { "x-apisports-key": API_KEY },
  });

  if (!res.ok) {
    const text = await res.text();
    console.error(`Feil fra ${endpoint}: ${res.status} ${res.statusText}`);
    throw new Error(text);
  }

  return (await res.json()) as T;
}
