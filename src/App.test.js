import { render, screen } from '@testing-library/react';
import App from './App';
import { BrowserRouter } from 'react-router-dom'

describe("<App />", () => {
  it("renders a logo", () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    )
    const logo = screen.getByRole('img', {
      name: /beer tinder logo/i
    })
      expect(logo).toBeInTheDocument()
  })
})