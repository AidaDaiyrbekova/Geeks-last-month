import { useEffect } from "react"
import { useDataStore } from "../store/store"

export default function UsersPage() {
  const { users, fetchUsers } = useDataStore();

  useEffect(() => {
    fetchUsers()
  }, [fetchUsers])

  return (
    <div>
      <h2>Users</h2>
      <ul>
        {users.map((u) => (
          <li key={u.id} style={{ marginBottom:"10px"}}>
            {u.name}
            </li>
        ))}
      </ul>
    </div>
  )
}
