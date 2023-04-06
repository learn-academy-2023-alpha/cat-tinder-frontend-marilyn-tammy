import React from 'react'
import { Nav, NavItem, NavLink } from 'reactstrap'
import beerTinderLogo from '../assets/beerTinderLogo.png'


export const Header = () => {

  return (
    <>
        <Nav className='nav-bar'>
            <NavItem>
            <img src={beerTinderLogo} alt="Beer Tinder Logo"/>
            </NavItem>
            <NavItem>
                <NavLink
                active
                href="/"
                >
                Home
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="/beerindex">
                Beers On Tap
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="/beernew">
                New Brew
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="/beershow">
                Show
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="/beeredit">
                Edit
                </NavLink>
            </NavItem>
        </Nav>
        <h1>Header</h1>
    </>
  )
}

export default Header 