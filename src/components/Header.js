import React from 'react'
import { Nav, NavItem, NavLink } from 'reactstrap'

export const Header = () => {

  return (
    <>
        <Nav className='nav-bar'>
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
                Index
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="/beernew">
                New
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

    </>
  )
}

export default Header 