import React, { useState } from 'react'
import Navbar from './components/navbar/Navbar'
import { assets } from './assets/assets'
import { Route, Routes } from 'react-router-dom'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Home1 from './pages/Home1/Home1'
import Footer from './components/footer/Footer'
import LoginPopUp from './components/loginPopUp/LoginPopUp'



const App = () => {

    const[showLogin, setShowLogin] = useState(false)

  return (
    <>
    {showLogin?<LoginPopUp setShowLogin={setShowLogin} />:<></>}
    <div className='app'>
       <Navbar setShowLogin={setShowLogin} />
       <Routes>
       <Route path='/' element={<Home1/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
        <Route path='/order' element={<PlaceOrder/>}></Route>
       </Routes>
    </div>
    <Footer/>
    </>
  
  )
}

export default App
