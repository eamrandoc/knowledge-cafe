
import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Header from './Components/Header/Header'
import Bookmarks from './Components/Bookmarks/Bookmarks'

function App() {
  const [bookmarks, setBookmarks] = useState([])
  const handleBookmarks = (blog)=>{
    const newBookmarks = [...bookmarks, blog]
    setBookmarks(newBookmarks)

  }
  const [readingTime, setReadingTime] = useState(0)
  const handleMarkAsRead = (time,id)=>{
    const newReadingTime = readingTime + time
    setReadingTime(newReadingTime)
    const removeBookmarks = bookmarks.filter(b=> b.id !== id)
    setBookmarks(removeBookmarks)

  }
  

  return (
    <>
      <Header></Header>
      <div className='flex container mx-auto gap-6 py-7'>
      <Blogs handleBookmarks ={handleBookmarks} handleMarkAsRead={handleMarkAsRead}></Blogs>
      <Bookmarks bookmarks={bookmarks} readingTime = {readingTime}></Bookmarks>
      </div>
    </>
  )
}

export default App
