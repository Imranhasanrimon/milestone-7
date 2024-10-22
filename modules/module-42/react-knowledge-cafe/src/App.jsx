
import { useState } from 'react'
import './App.css'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Blogs from './Components/Header/Blogs/Blogs'
import Header from './Components/Header/Header'

function App() {
  const [bookMarks, setBookMarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);
  const handleBookMark = (title, time) => {
    const newBookMarks = [...bookMarks, title];
    setBookMarks(newBookMarks);
    setReadingTime(readingTime + time)
  }
  return (
    <>
      <div className='max-w-screen-xl w-11/12 mx-auto'>
        <Header></Header>
        <div className='grid grid-cols-1 md:grid-cols-3 mt-8 gap-3'>
          <Blogs handleBookMark={handleBookMark}></Blogs>
          <Bookmarks readingTime={readingTime} titles={bookMarks}></Bookmarks>
        </div>
      </div>

    </>
  )
}

export default App
