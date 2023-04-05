import { render, screen } from '@testing-library/react';
import NotFound from './NotFound';
import { BrowserRouter } from 'react-router-dom'

describe("<NotFound />", () => {
    it("renders an image", () => {
      render(
        <BrowserRouter>
          <NotFound />
        </BrowserRouter>
      )
      screen.logTestingPlaygroundURL()
        const image = screen.getByRole('img', {name: /photo of a cartoon keg/i})
        expect(image).toBeInTheDocument()
    })
  })