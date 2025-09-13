import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import UsersPage from "./pages/UsersPage"
import PostsPage from "./pages/PostsPage"
import CommentsPage from "./pages/CommentsPage"

export default function App() {
  return (
    <Router>
      <nav style={{ display: "flex", gap: "25px", marginBottom: "10px", alignItems: "center", justifyContent: "center", fontSize: "25px" }}>
        <Link to="/users" style={{ textDecoration: "none", fontWeight:"600" }}>Users</Link>
        <Link to="/posts" style={{ textDecoration: "none", fontWeight:"600" }}>Posts</Link>
        <Link to="/comments" style={{ textDecoration: "none", fontWeight:"600" }}>Comments</Link>
      </nav>

      <Routes>
        <Route path="/users" element={<UsersPage />} />
        <Route path="/posts" element={<PostsPage />} />
        <Route path="/comments" element={<CommentsPage />} />
      </Routes>
    </Router>
  )
}
