import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchPhotos } from "../redux/photosSlice"

 const Photos = () => {


const dispatch = useDispatch()
const {photos, status, error} = useSelector (state => state.photosReducer)
useEffect(() => {
    if (status==='idle') dispatch(fetchPhotos())
 }, [status,dispatch])


if (status === 'loading') return <div>Loading...</div>
if (status === 'error') return <div>Error: {error}</div>


    return (
        <ul>
            {photos.map(p => 
            <li key={p.id}>
                {p.title}  <br />
                {p.url} </li>)}
        </ul>
    )
 }

 export default Photos