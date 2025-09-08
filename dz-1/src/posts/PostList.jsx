import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchPosts } from "./postSlise"


export const PostList = () => {

    const dispatch = useDispatch()
     const {posts, status, error} = useSelector(state => state.postsReducer)

     useEffect(() => {
        if(status === 'idle') dispatch (fetchPosts())
     }, [status,dispatch])

    if (status==='loading') return <div>Loading...</div>
    if (status==='failed') return <div>{error}</div>

    return (
        <ol>
        {posts.map(u => 
        <li
            key= {u.id}> 
            <strong>{u.title}</strong> <br />{u.body}
        </li>)}
        </ol>
    )
}