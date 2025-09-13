import { create } from "zustand"

export const useDataStore = create((set) => ({
  users: [],
  posts: [],
  comments: [],
  fetchUsers: async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users")
    set({ users: await res.json() })
  },
  fetchPosts: async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts")
    set({ posts: await res.json() })
  },
  fetchComments: async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/comments")
    set({ comments: await res.json() })
  },
}))
