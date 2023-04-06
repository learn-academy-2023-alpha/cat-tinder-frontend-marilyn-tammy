import { render, screen } from '@testing-library/react';
import BeerShow from './BeerShow';
import { Routes, MemoryRouter, Route } from 'react-router-dom'
import beers from '../mockBeers';

const renderShow = () => {
    render(
        <MemoryRouter initialEntries={["/beershow/1"]}>
            <Routes>
            <Route path="/beershow/:id" element={ <BeerShow beers = {beers} /> } />
            </Routes>
        </MemoryRouter>
    )
}

describe("<BeerShow />", () => {
    it("renders beer profile attribute", () => {
      renderShow()
      const profile = screen.getByText(`Notes: ${beers[0].profile}`)
      expect(profile).toBeInTheDocument()
        
        })
    })
