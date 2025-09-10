import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchComments } from "../redux/commentsSlice"

 const CommentsList = () => {


const dispatch = useDispatch()
const {comments, status, error} = useSelector (state => state.commentsReducer)
useEffect(() => {
    if (status==='idle') dispatch(fetchComments())
 }, [status,dispatch])


if (status === 'loading') return <div>Loading...</div>
if (status === 'error') return <div>Error: {error}</div>


    return (
        <ul>
            {comments.map(c => 
            <li key={c.id}>
                <strong>{c.name} </strong> <br />
                <small>{c.email}</small> - <br />{c.body} </li>)}
        </ul>
    )
 }

 export default CommentsList