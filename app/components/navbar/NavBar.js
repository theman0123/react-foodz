import React, { Component } from 'react';

import { LinkContainer } from 'react-router-bootstrap';

import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

import View from './View.js';

import myStyles from '../../myStyles.css';

const NavBarS = `${myStyles.backgroundRed} ${myStyles.aWhite}`;
const FoodzS = `${myStyles.point} ${myStyles.textWhite}`;
//for View component to display inside NavBar//
//<Nav>
//              <NavItem>
//                {<View view={this.props.placeName}
//                />}
//             </NavItem>
//            </Nav>

export default class NavBar extends Component {

  render() {
    return (
      <Navbar className={NavBarS} collapseOnSelect>
        <Navbar.Header>
          <LinkContainer to="/home">
            <Navbar.Brand className={FoodzS}>
              Foodz
            </Navbar.Brand></LinkContainer>

            <Navbar.Toggle className={myStyles.backToWhite}
            />
            
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <LinkContainer to="/notes" className={myStyles.dropdownMenu}>
              <NavItem eventKey={1}>Notes</NavItem>
            </LinkContainer>
            <NavDropdown eventKey={2} title="Dropdown" id="basic-nav-dropdown" className={myStyles.dropdownMenu}>
              <MenuItem eventKey={3.1}>Another action</MenuItem>
              <MenuItem eventKey={3.2}>Something else here</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={3.3}>Separated link</MenuItem>
            </NavDropdown>
          </Nav>
          <Nav pullRight>
            <NavItem eventKey={1} href="#">Link Right</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
