import { render, screen } from '@testing-library/react';
import BeerNew from './BeerNew';
import { Routes, MemoryRouter, Route, BrowserRouter } from 'react-router-dom'
import beers from '../mockBeers';


    

describe("<BeerNew />", () => {
    beforeEach(() => {
        render(
            <BrowserRouter>
                <BeerNew />
            </BrowserRouter>
        )
    })

    it("renders the BeerNew page for the user", () => {
      const inputTitle = screen.getByText("BEER NAME")
      expect(inputTitle).toBeInTheDocument()    
    })

    it("has a form with entries for name, abv, style, brewery, profile, and image", () => {
        const formName = screen.getByText(/name/i)
        expect(formName.getAttribute("for")).toEqual("name")  
        
        const formABV = screen.getByText(/abv/i)
        expect(formABV.getAttribute("for")).toEqual("abv")

        const formStyle = screen.getByText(/style/i)
        expect(formStyle.getAttribute("for")).toEqual("style")

        const formBrewery = screen.getByText(/brewery/i)
        expect(formBrewery.getAttribute("for")).toEqual("brewery")

        const formProfile = screen.getByText(/notes/i)
        expect(formProfile.getAttribute("for")).toEqual("profile")

        const formImage = screen.getByText(/image url/i)
        expect(formImage.getAttribute("for")).toEqual("image")
    })

})
