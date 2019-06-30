import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
        <div>
          <Navbar color="light" light expand="sm">
            <NavbarBrand href="/g-eHub">g-eHub</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink href="https://github.com/Kernstall/g-eHub">GitHub</NavLink>
                </NavItem>{/*
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    Баны
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem>
                      Режим игрок
                    </DropdownItem>
                    <DropdownItem>
                      Режим админ
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>*/}
              </Nav>
            </Collapse>
          </Navbar>
        </div>
    );
  }
}