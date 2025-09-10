import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchPosts } from "../redux/postsSlice"


 const PostsList = () => {
    const dispatch = useDispatch()

  const {posts, status, error} = useSelector (state => state.postsReducer)
  
  useEffect(() => {
      if (status==='idle') dispatch(fetchPosts())
  }, [status,dispatch])



if (status === 'loading') return <div>Loading...</div>
if (status === 'error') return <div>Error: {error}</div>

    return (
        <ul>
            {posts.map(p => <li key={p.id}>
                <strong>{p.title}</strong> - <br />{p.body} </li>)}
        </ul>
    )
 }

 export default PostsList