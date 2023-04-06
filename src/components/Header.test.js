import { render, screen } from '@testing-library/react';
import Header from './Header';
import { BrowserRouter } from 'react-router-dom'

describe("<Header />", () => {
    it("renders a logo image", () => {
      render(
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      )
      const header = screen.getByRole('img', {
        name: /beer tinder logo/i
      })
        expect(header).toBeInTheDocument()
    })
})