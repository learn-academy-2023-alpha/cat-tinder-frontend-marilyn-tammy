import { render, screen } from '@testing-library/react';
import Home from './Home';
import { BrowserRouter } from 'react-router-dom'

describe("<Home />", () => {
    it("renders an image", () => {
      render(
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      )
        const image = screen.getByRole('img', {name: /beers cheers/i})
        expect(image).toBeInTheDocument()
    })
  })