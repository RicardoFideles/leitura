import React from 'react'
import { Navbar, MenuItem } from 'react-bootstrap';

const Header = props => {
    const {categories} = props

    console.log(categories)

    function handleTitle(title) {
        return title.charAt(0).toUpperCase() + title.slice(1)
    }

    return (
        <Navbar inverse collapseOnSelect>
            <Navbar.Header>
                <Navbar.Brand>
                    <a href="/">Readable Project</a>
                </Navbar.Brand>
                <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
                <ul className="nav navbar-nav">
                    {categories.map(category => (
                        <MenuItem key={category.path} href={category.path}>{handleTitle(category.name)}</MenuItem>
                    ))}
                </ul>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header