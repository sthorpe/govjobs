import React from 'react'
import { Link } from 'react-router-dom'
import { Well, Grid, Row, Col, Navbar, Nav, NavItem, NavDropdown, MenuItem, pullRight } from 'react-bootstrap';

const NotBlue = {
  color: "white",
  listStyle: "none",
}

const NavBar = () => (
  <Grid>
    <Navbar inverse collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="/">GovJobs</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <NavItem eventKey={1}>
          <Link style={NotBlue} to={'/home'}>Home</Link>
        </NavItem>
        <NavItem eventKey={2}>
          <Link style={NotBlue} to={'/counter'}>Counter</Link>
        </NavItem>
        <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
          <MenuItem eventKey={3.1}>Action</MenuItem>
          <MenuItem eventKey={3.2}>Another action</MenuItem>
          <MenuItem eventKey={3.3}>Something else here</MenuItem>
          <MenuItem divider />
          <MenuItem eventKey={3.3}>Separated link</MenuItem>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
</Grid>
)

export default NavBar
