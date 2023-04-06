import { render, screen } from '@testing-library/react';
import BeerIndex from './BeerIndex';
import { BrowserRouter } from 'react-router-dom'
import beers from '../mockBeers';


describe("<BeerIndex />", () => {
    it("renders beer cards", () => {
      render(
        <BrowserRouter>
          <BeerIndex beers={beers} />
        </BrowserRouter>
      )
    //   screen.logTestingPlaygroundURL()
        beers.forEach(beer => {
            const beerName = screen.getByText(beer.name)
            expect(beerName).toBeInTheDocument()
        })
    })
  })

  