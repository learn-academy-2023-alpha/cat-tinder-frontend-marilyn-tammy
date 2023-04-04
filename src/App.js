import React, { useState } from 'react'
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { Routes, Route } from "react-router-dom"
import Home from './pages/Home';
import BeerIndex from './pages/BeerIndex';
import BeerNew from './pages/BeerNew';
import BeerShow from './pages/BeerShow';
import BeerEdit from './pages/BeerEdit';
import NotFound from './pages/NotFound';
import beers from './mockBeers';



const App = () => {
  const [mockBeers, setMockBeers] = useState(beers)
  return (
    <>
      <Header />
      <h1>BEER TINDER</h1>
      <br />
      <br />
      <Routes >
        <Route path="/" element={ <Home /> } />
        <Route path="/beerindex" element={ <BeerIndex /> } />
        <Route path="/beernew" element={ <BeerNew /> } />
        <Route path="/beershow" element={ <BeerShow /> } />
        <Route path="/beeredit" element={ <BeerEdit /> } />
        <Route path="*" element={ <NotFound /> } />
      </Routes>
      <br />
      <br />
      <br />
      <Footer />
    </>
  )
}

export default App


