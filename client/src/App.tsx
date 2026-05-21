
import './App.css'
import MainContent from './components/MainContent'
import Navbar from './components/Navbar'
import NewProductForm from './components/popups/NewProductForm'
import Sidebar from './components/Sidebar'
import Dashboard from './pages/Dashboard'
import Inventory from './pages/Inventory'
import PointOfSale from './pages/PointOfSale'
import Product from './pages/Products'
import Report from './pages/Report'
import SalesHistory from './pages/SalesHistory'
import User from './pages/User'

// use Store 
import { usePageStore } from './stores/pageStore'

// import types
import type { Page } from './stores/pageStore'
import { usePopUpStore } from './stores/popUpStore'

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
      return <Inventory/>
    case "Reports":
      return <Report/>
    case "Users":
      return <User/>
    default:
      return <p>No Page found</p>
  }

}

function App() {
  const { page } = usePageStore();
  const { isNewProductFromOpen } = usePopUpStore();

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

      {/* Popup Form Here */}
      {isNewProductFromOpen && <NewProductForm/>}
    </>
  )
}

export default App
