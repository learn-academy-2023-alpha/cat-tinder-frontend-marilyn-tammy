import React from 'react'
import { Nav, NavItem, NavLink } from 'reactstrap'

export const Header = () => {

  return (
    <>
        <Nav className='nav-bar'>
            <NavItem>
                <NavLink
                active
                href="#"
                >
                Home
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="#">
                Index
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="#">
                New
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="#">
                Show
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="#">
                Edit
                </NavLink>
            </NavItem>
        </Nav>

    </>
  )
}

export default Header 