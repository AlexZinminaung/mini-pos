
import './App.css'
import MainContent from './components/MainContent'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Dashboard from './pages/Dashboard'

// use Store 
// import { usePageStore } from './stores/pageStore'

function App() {
  // const { page } = usePageStore();

  return (
    <>
      <section className=' main-container flex'>
        <Sidebar/>
        <MainContent>
          <Navbar/>
          <Dashboard/>
        </MainContent>
      </section>
    </>
  )
}

export default App
