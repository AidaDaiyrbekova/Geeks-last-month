import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import UsersPage from "./pages/UsersPage"
import ProfilesPage from "./pages/ProfilesPage"
import { Container, Navbar, Nav } from "react-bootstrap"

function App() {
  return (
    <Router>
     <Navbar bg="dark" variant="dark" expand="lg" className="mb-4 shadow">
  <Container className="justify-content-center">
    <Nav>
      <Nav.Link as={Link} to="/users">Users</Nav.Link>
      <Nav.Link as={Link} to="/profiles">Profiles</Nav.Link>
    </Nav>
  </Container>
</Navbar>


      <Container>
        <Routes>
          <Route path="/users" element={<UsersPage />} />
          <Route path="/profiles" element={<ProfilesPage />} />
        </Routes>
      </Container>
    </Router>
  )
}

export default App;
