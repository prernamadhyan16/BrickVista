import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './assets/pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'

const App = () =>{
  return (
    <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path = '/' element = {<Home></Home>}></Route>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  )
}

export default App