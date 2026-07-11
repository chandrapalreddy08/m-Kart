
import React from 'react'
import './App.css'
import LandingPage from './pages/LandingPage'
import { Routes,Route } from 'react-router-dom'
import MobilesPage from './pages/MobilesPage'
import NavBar from './store/components/NavBar'
import ComputersPage from './pages/ComputersPage'
import WatchPage from './pages/WatchPage'
import MenPage from './pages/MenPage'
import WoanPage from './pages/WoanPage'
import FurniturePage from './pages/FurniturePage'
import AcPage from './pages/AcPage'
import KitchenPage from './pages/KitchenPage'
import SpeakersPages from './pages/SpeakersPages'
import TvPages from './pages/TvPages'
import BooksPage from './pages/BooksPage'
import MobileSingle from './singles/MobileSingle'
import ComputersSingles from './singles/ComputersSingles'
import WatchSingle from './singles/WatchSingle'
import MenSingle from './singles/MenSingle'
import WomanSingle from './singles/WomanSingle'
import FurnitureSingle from './singles/FurnitureSingle'
import AcSingle from './singles/AcSingle'
import KitchenSingle from './singles/KitchenSingle'
import SpeakersSingle from './singles/SpeakersSingle'
import TvSingles from './singles/TvSingles'
import BooksSingle from './singles/BooksSingle'
import ScrollTop from './pages/ScrollTop'
import FridgePage from './pages/FridgePage'
import FridgeSingle from './singles/FridgeSingle'
import Cart from './singles/Cart'
import FootNav from './store/components/FootNav'

function App() {
  return (
    <>
    <div>
      <ScrollTop/>
      <NavBar/>
     <div className="pages">
       <Routes>
         <Route path='/' element={<LandingPage/>}/>
        <Route path='/mobiles' element={<MobilesPage/>}/>
        <Route path='/computers' element={<ComputersPage/>}/>
        <Route path='/watch' element={<WatchPage/>}/>
        <Route path='/men' element={<MenPage/>}/>
        <Route path='/woman' element={<WoanPage/>}/>
        <Route path='/furniture' element={<FurniturePage/>}/>
        <Route path='/ac' element={<AcPage/>}/>
        <Route path='/kitchen' element={<KitchenPage/>}/>
        <Route path='/speakers' element={<SpeakersPages/>}/>
        <Route path='/fridges' element={<FridgePage/>}/>
        <Route path='/tv' element={<TvPages/>}/>
       
        
        <Route path='/books' element={<BooksPage/>}/>

         
       

            {/* Single pages for products */}
        <Route path='/mobiles/:id' element={<MobileSingle/>}/>
        <Route path='/computers/:id' element={<ComputersSingles/>}/>
        <Route path='/watch/:id' element={<WatchSingle/>}/>
        <Route path='/men/:id' element={<MenSingle/>}/>
        <Route path='/woman/:id' element={<WomanSingle/>}/>
        <Route path='/furniture/:id' element={<FurnitureSingle/>}/>
        <Route path='/ac/:id' element={<AcSingle/>}/>
        <Route path='/kitchen/:id' element={<KitchenSingle/>}/>
        <Route path='/speakers/:id' element={<SpeakersSingle/>}/>
        <Route path='/tv/:id' element={<TvSingles/>}/>
        <Route path='/fridges/:id' element={<FridgeSingle/>}/>
        <Route path='/books/:id' element={<BooksSingle/>}/>

        <Route path='/cart' element={<Cart/>}/>


      </Routes>
     </div>
     <FootNav/>
      
    </div>
    </>
  )
}

export default App