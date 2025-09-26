import { useState } from 'react'
import { Card, Row, Col, Select, Button, List, Avatar, Typography, Modal } from 'antd'
import PokemonStore from '../store/PokemonStore'

const { Text } = Typography

function simulateBattle(a, b) {
    
    const history = []

    history.push(`Бой: ${a.name} (HP ${a.stats.hp}) vs ${b.name} (HP ${b.stats.hp})`)

        let winner, loser

    if (a.stats.hp > b.stats.hp) {
        winner = a
        loser = b
        history.push(` У ${a.name} больше жизни чем у ${b.name}.`)
    } else if (b.stats.hp > a.stats.hp) {
        winner = b
        loser = a
        history.push(`У ${b.name} больше жизни чем у ${a.name}.`)
    } else {
        winner = a
        loser = b
        history.push(`HP равны (${a.stats.hp}). Победитель по умолчанию - ${a.name}.`)
    }

    history.push(`\n*** Победитель: ${winner.name} ***`)

    return history
}


export default function Arena() {
    const caught = PokemonStore(state => state.caught)
    const [p1, setP1] = useState(null)
    const [p2, setP2] = useState(null)
    const [open, setOpen] = useState(false)
    const [log, setLog] = useState([])
    const [running, setRunning] = useState(false)

    function startBattle() {
        if (!p1 || !p2) return
        setRunning(true)
        setLog([])
        

        const history = simulateBattle(p1, p2)
        
        setLog(history)
        setOpen(true)
        setRunning(false)
    }

    return (
        <Card title="Арена" style={{ marginTop: 20 }}>
            <Row gutter={16}>
                <Col span={10}>
                    <Text>Покемон 1</Text>
                    <Select
                        style={{ width: '100%' }}
                        placeholder="Выберите покемона"
                        options={caught.map(c => ({ label: c.name, value: c.id }))}
                        onChange={(v) => setP1(caught.find(x => x.id === v))}
                        value={p1?.id}
                        showSearch
                        filterOption={(input, option) => option.label.toLowerCase().includes(input.toLowerCase())}
                    />
                </Col>
                <Col span={10}>
                    <Text>Покемон 2</Text>
                    <Select
                        style={{ width: '100%' }}
                        placeholder="Выберите покемона"
                        options={caught.map(c => ({ label: c.name, value: c.id }))}
                        onChange={(v) => setP2(caught.find(x => x.id === v))}
                        value={p2?.id}
                        showSearch
                        filterOption={(input, option) => option.label.toLowerCase().includes(input.toLowerCase())}
                    />
                </Col>
                <Col span={4} style={{ display: 'flex', alignItems: 'center' }}>
                    <Button type="primary" onClick={startBattle} disabled={!p1 || !p2 || running}>Начать</Button>
                </Col>
            </Row>

            <div style={{ marginTop: 16 }}>
                <Text>Коллекция ({caught.length})</Text>
                <List
                    dataSource={caught}
                    renderItem={item => (
                        <List.Item>
                            <List.Item.Meta
                                avatar={<Avatar src={item.sprites.front_default} />}
                                title={<span style={{ textTransform: 'capitalize' }}>{item.name}</span>}
                                description={
                                    `HP ${item.stats.hp} · ATK ${item.stats.attack} · DEF ${item.stats.defense} · SPD ${item.stats.speed}`
                                }
                            />
                        </List.Item>
                    )}
                />
            </div>

            <Modal title="Лог боя" open={open} onOk={() => setOpen(false)} onCancel={() => setOpen(false)} width={700}>
                <div style={{ maxHeight: 400, overflow: 'auto' }}>
                    {log.map((l, i) => <div key={i}><Text>{l}</Text><br /></div>)}
                </div>
            </Modal>
        </Card>
    )
}