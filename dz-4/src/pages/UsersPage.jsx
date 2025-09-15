import { Card, Button, Row, Col } from "react-bootstrap";

const users = [
  {
    id: 1,
    name: "Tony Stark",
    role: "Iron Man",
    img: "https://cdn.britannica.com/50/182850-050-8B0F87B3/Robert-Downey-Jr-Iron-Man-film-Tony.jpg",
  },
  {
    id: 2,
    name: "Steve Rogers",
    role: "Captain America",
    img: "https://static.kino.de/72/52/8b/52376feb3d2764036d1d013a33_cmUgMTY4MCA5NDQDNzI1N2VkNjMxMTM=.jpeg",
  },
  {
    id: 3,
    name: "Natasha Romanoff",
    role: "Black Widow",
    img: "https://www.nme.com/wp-content/uploads/2018/02/Black-Widow-Avengers.jpg",
  },
];

export default function UsersPage() {
  return (
    <Row className="justify-content-center">
      {users.map((u) => (
        <Col md={4} key={u.id} className="mb-4">
          <Card className="shadow-sm user-card">
            <Card.Img
              variant="top"
              src={u.img}
              style={{ height: "300px", objectFit: "cover" }}
            />
            <Card.Body>
              <Card.Title>{u.name}</Card.Title>
              <Card.Text className="text-muted">{u.role}</Card.Text>
              <Button variant="primary">View</Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}
