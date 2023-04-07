import React, { useEffect, useState } from 'react'
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
import mockBeers from './mockBeers';




const App = () => {

  const [beers, setBeers] = useState([])

  useEffect(() => {
    readBeer()
  }, [])

  const readBeer = () => {
    fetch("http://localhost:3000/beers")
    .then((response) => response.json())
    .then((payload) => setBeers(payload))
    .catch((error) => console.log(error))
  }

  const createBeer = (beer) => {
    fetch("http://localhost:3000/beers", {
      body: JSON.stringify(beer),
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST"
    })
    .then((response) => response.json())
    .then(() => readBeer())
    .catch((errors) => console.log("Beer Create Errors:", errors))
  }

  const updateBeer = (beer, id) => {
    console.log("beer:", beer)
    console.log("id:", id)
  }

  return (
    <>
      <Header />
      <Routes >
        <Route path="/" element={ <Home /> } />
        <Route path="/beerindex" element={ <BeerIndex beers={beers} />} />
        <Route path="/beershow/:id" element={ <BeerShow beers={beers} /> } />
        <Route path="/beernew" element={ <BeerNew createBeer={createBeer} /> } />
        <Route path="/beeredit/:id" element={ <BeerEdit  beers={beers} updateBeer={updateBeer} /> } />
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


