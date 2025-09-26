import { Typography, Row, Col } from 'antd'
import PokemonList from './components/PokemonList'
import Arena from './components/Arena'

const { Title } = Typography

export default function App() {
  return (
    <div style={{ padding: 20 }}>
      <Title level={2}>Список покемонов</Title>
      <Row gutter={16}>
        <Col span={16}>
          <PokemonList />
        </Col>
        <Col span={8}>
          <Arena />
        </Col>
      </Row>
    </div>
  )
}
