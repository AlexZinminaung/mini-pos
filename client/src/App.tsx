
import './App.css'
import MainContent from './components/MainContent'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Dashboard from './pages/Dashboard'
import PointOfSale from './pages/PointOfSale'
import Product from './pages/Products'
import SalesHistory from './pages/SalesHistory'

// use Store 
import { usePageStore } from './stores/pageStore'

// import types
import type { Page } from './stores/pageStore'

const getSelectedPage = (page: Page) =>
{

  switch(page)
  {
    case "Dashboard":
      return <Dashboard/>
    case "Point of Sale":
      return <PointOfSale/>
    case "Sales History":
      return <SalesHistory/>
    case "Products":
      return <Product/>
    case "Inventory":
      return <p>Inventory</p>
    case "Reports":
      return <p>Reports</p>
    case "Users":
      return <p>User</p>
    default:
      return <p>No Page found</p>
  }

}

function App() {
  const { page } = usePageStore();

  const selectedPage = getSelectedPage(page);

  return (
    <>
      <section className='main-container flex'>
        <Sidebar/>
        <MainContent>
          <Navbar/>
          {selectedPage}
        </MainContent>
      </section>
    </>
  )
}

export default App
