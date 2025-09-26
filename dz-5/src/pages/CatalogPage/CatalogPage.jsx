import { Button, Card, Col, Empty, Row, Skeleton } from "antd";
import { useProducts } from '@features/product/model/useProducts'
import { useCartStore } from '@features/cart/model/cartStore'
import { Link } from 'react-router-dom'


export function CatalogPage() {
  const {data, isLoading} = useProducts()
  const add = useCartStore(s => s.add)

  if (isLoading) return <Skeleton active />
  if (!data || data.length === 0) return <Empty description="No product" />

  return (
    <Row gutter={[15,16]}>
      {data.map(p => (
        <Col key ={p.id} xs={24} sm={8} lg={6}>
          <Card
          cover={<img src={p.image} alt={p.title} />}
          actions={[<Button key="add" type="primary" onClick={() => add(p)}>Add to cart</Button>]}>
          <Card.Meta title={<Link to={`/product/${p.id}`}></Link>} description={`$${p.price}`}  />
        </Card>
        </Col>
      ))}
    </Row>
  )
}