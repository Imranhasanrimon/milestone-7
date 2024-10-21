
import './App.css'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Blogs from './Components/Header/Blogs/Blogs'
import Header from './Components/Header/Header'

function App() {

  return (
    <>
      <div className='max-w-screen-xl w-11/12 mx-auto'>
        <Header></Header>
        <div className='grid grid-cols-1 md:grid-cols-3 mt-8'>
          <Blogs></Blogs>
          <Bookmarks></Bookmarks>
        </div>
      </div>

    </>
  )
}

export default App
