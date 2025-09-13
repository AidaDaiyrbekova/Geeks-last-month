import { useEffect } from "react"
import { useDataStore } from "../store/store"

export default function PostsPage() {
  const { posts, fetchPosts } = useDataStore();

  useEffect(() => {
    fetchPosts()
  }, [fetchPosts])

  return (
    <div>
      <h2>Posts</h2>
      <ul>
        {posts.map((p) => (
          <li key={p.id} style={{ marginBottom:"10px"}}>
            {p.title}
          </li>
        ))}
      </ul>
    </div>
  )
}
