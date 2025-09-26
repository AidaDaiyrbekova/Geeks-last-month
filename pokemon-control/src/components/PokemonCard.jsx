
import { Card, Avatar, Button, Space, Typography, notification } from 'antd'
import PokemonStore from '../store/PokemonStore'

const { Text } = Typography

export default function PokemonCard({ pokemon }) {
	const add = PokemonStore(state => state.add)
	const caught = PokemonStore(state => state.caught)
	const isCaught = !!caught.find(p => p.id === pokemon.id)

	function handleCatch() {
		const simple = {
			id: pokemon.id,
			name: pokemon.name,
			sprites: pokemon.sprites,
			stats: pokemon.stats.reduce((acc, s) => ({ ...acc, [s.stat.name]: s.base_stat }), {}),
			hp: pokemon.stats.find(s => s.stat.name === 'hp')?.base_stat || 10
		}
		add(simple)
		notification.success({ message: 'Пойман!', description: `${pokemon.name} добавлен в коллекцию` })
	}

	return (
		<Card hoverable title={<b style={{ textTransform: 'capitalize' }}>{pokemon.name}</b>} style={{ minHeight: 220 }}>
			<div style={{ textAlign: 'center' }}>
				<Avatar src={pokemon.sprites.front_default} size={100} />
				<div style={{ marginTop: 8 }}>
					<Space direction="vertical">
						<Text>HP: {pokemon.stats.find(s => s.stat.name === 'hp')?.base_stat}</Text>
						<Button type={isCaught ? 'default' : 'primary'} onClick={handleCatch} disabled={isCaught}>
							{isCaught ? 'Поймано' : 'Поймать'}
						</Button>
					</Space>
				</div>
			</div>
		</Card>
	)
}