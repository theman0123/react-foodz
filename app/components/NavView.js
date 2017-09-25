import React, { Component } from 'react';

import { LinkContainer } from 'react-router-bootstrap';

import { backgroundRed, textWhite, backToWhite, aWhite, dropdownMenu } from '../myStyles.css';

import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';


export default class NavView extends Component {
  constructor(props) {
    super(props);
    this.state = {bar: 'foo'}
  }
  render() {
    return (
      <Navbar className={`${backgroundRed} ${aWhite} `} collapseOnSelect>
        <Navbar.Header>
          <LinkContainer to="/home"><Navbar.Brand className={textWhite}>
            Foodz
          </Navbar.Brand></LinkContainer>
          <Navbar.Toggle className={backToWhite} />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <LinkContainer to="/display" className={dropdownMenu}>
              <NavItem eventKey={1}>Display</NavItem>
            </LinkContainer>
            <NavDropdown eventKey={2} title="Dropdown" id="basic-nav-dropdown" className={dropdownMenu}>
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
