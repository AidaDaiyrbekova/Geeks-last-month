import { useEffect, useRef } from 'react'
import { useInfiniteQuery } from '@tanstack/react-query'
import { List, Spin, Typography } from 'antd'
import { fetchPokemons } from '../api/pokemonApi'
import PokemonCard from './PokemonCard'

const { Text } = Typography;

export default function PokemonList() {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery({
    queryKey: ['pokemons'],
    queryFn: ({ pageParam = 1 }) => fetchPokemons(pageParam), // передаем pageParam в API
    getNextPageParam: (lastPage) => lastPage.next ?? undefined, // если next нет — прекращаем
  })

  const sentinelRef = useRef();

  useEffect(() => {
    const el = sentinelRef.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && hasNextPage) fetchNextPage();
        });
      },
      { rootMargin: '100px' } // подгружаем заранее
    );

    io.observe(el);
    return () => io.disconnect();
  }, [sentinelRef, hasNextPage, fetchNextPage]);

  if (status === 'loading')
    return (
      <div style={{ textAlign: 'center', padding: 40 }}>
        <Spin size="large" />
      </div>
    );

  if (status === 'error') return <div>Error loading pokemons</div>;

  const pages = data?.pages?.flatMap(p => p.results) ?? [];

  return (
    <div>
      <List
        grid={{ gutter: 16, column: 4 }}
        dataSource={pages}
        renderItem={(item) => (
          <List.Item key={item.name}> {/* добавлен ключ */}
            <PokemonCard pokemon={item} />
          </List.Item>
        )}
      />

      <div
        ref={sentinelRef}
        style={{ height: 40, textAlign: 'center', marginTop: 16 }}
      >
        {isFetchingNextPage ? (
          <Spin />
        ) : hasNextPage ? (
          <Text>Прокрутите вниз, чтобы загрузить ещё</Text>
        ) : (
          <Text>Больше нет покемонов</Text>
        )}
      </div>
    </div>
  )
}
