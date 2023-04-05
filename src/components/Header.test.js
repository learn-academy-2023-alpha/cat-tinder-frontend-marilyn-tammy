import { render, screen } from '@testing-library/react';
import Header from './Header';
import { BrowserRouter } from 'react-router-dom'

describe("<Header />", () => {
    it("renders a heading", () => {
      render(
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      )
        const header = screen.getByRole('heading', {
            name: /header/i
          })
        expect(header).toBeInTheDocument()
  
    })
  })