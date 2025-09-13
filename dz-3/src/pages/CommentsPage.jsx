import { useEffect } from "react"
import { useDataStore } from "../store/store"

export default function CommentsPage() {
  const { comments, fetchComments } = useDataStore();

  useEffect(() => {
    fetchComments()
  }, [fetchComments])

  return (
    <div>
      <h2>Comments</h2>
      <ul>
        {comments.map((c) => (
          <li key={c.id} style={{ marginBottom:"10px"}}>
            {c.body}
            </li>
        ))}
      </ul>
    </div>
  )
}
