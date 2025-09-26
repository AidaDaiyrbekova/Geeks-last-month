
const PAGE_SIZE = 20

export async function fetchPokemons({ pageParam = 0 }) {
  const offset = pageParam
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${PAGE_SIZE}`)
  if (!res.ok) throw new Error('Network error')
  const data = await res.json()

  const details = await Promise.all(
    data.results.map(async (r) => {
      const r2 = await fetch(r.url)
      return r2.json()
    })
  )

  return {
    results: details,
    next: data.next ? offset + PAGE_SIZE : undefined
  }
}
