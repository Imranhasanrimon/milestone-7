
import './App.css'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Blogs from './Components/Header/Blogs/Blogs'
import Header from './Components/Header/Header'

function App() {

  return (
    <>
      <Header></Header>
      <div className='grid grid-cols-1 md:grid-cols-3 border'>
        <Blogs></Blogs>
        <Bookmarks></Bookmarks>
      </div>

    </>
  )
}

export default App
