
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import CommentsList from './components/CommentsList'
import PostsList from './components/Posts'
import Photos from './components/Photos'

function App() {
  

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/comments" element={<CommentsList />} />
        <Route path="/posts" element={<PostsList />} />
        <Route path="/photos" element={<Photos />} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
