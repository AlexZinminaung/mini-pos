
import './App.css'
import MainContent from './components/MainContent'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'

function App() {

  return (
    <>
      <section className=' main-container flex'>
        <Sidebar/>
        <MainContent>
          <div className='w-full'>
            <Navbar/>
          </div>
        </MainContent>
      </section>
    </>
  )
}

export default App
