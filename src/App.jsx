
import './App.css'
import Home from './components/Home'
import NavbarMain from './components/Navbar'
import {Route,Routes} from "react-router-dom"
import ReviewPage from './components/cartItem'
import Footer from './components/Footer'


function App() {


  return (
    <>
    <NavbarMain/>
    
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cart" element={<ReviewPage/>}/>
        
      </Routes>
      <Footer/>
    
    
    </>
  )
}

export default App
