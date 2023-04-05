import { render, screen } from '@testing-library/react';
import App from './App';
import { BrowserRouter } from 'react-router-dom'

describe("<App />", () => {
  it("renders a greeting", () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    )
    const greeting = screen.getByText("BEER TINDER")
    expect(greeting).toBeInTheDocument()

  })
})