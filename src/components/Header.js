import React from 'react'
import { Nav, NavItem, NavLink } from 'reactstrap'
import beerTinderLogo from '../assets/beerTinderLogo.png'


export const Header = () => {

  return (
    <>
        <Nav className='nav-bar'>
            <div className='nav-logo'>
            <NavItem>
            <NavLink
                active
                href="/"
                style={{color:"white", textDecoration:"none"}}
                >
                    <img src={beerTinderLogo} alt="Beer Tinder Logo"/>
                </NavLink>
            </NavItem>
            </div>
            <div className='nav-text'>
            <NavItem>
                <NavLink
                active
                href="/"
                style={{color:"white", textDecoration:"none"}}
                >
                Home
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="/beerindex" style={{color:"white", textDecoration:"none"}}>
                Beers On Tap
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="/beernew" style={{color:"white", textDecoration:"none"}}>
                New Brew
                </NavLink>
            </NavItem>
            </div>
        </Nav>
    </>
  )
}

export default Header 