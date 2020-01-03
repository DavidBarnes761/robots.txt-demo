import React from 'react'
import { Navbar, Container } from 'react-bootstrap'
import Logo from '../img/broadlume_logo-07.svg'
// import $ from 'jquery'

class Header extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <header className="header" id="header">
        <Container style={{ marginBottom: `0` }}>
          <Navbar id="navbar" className="" bg="light" expand="lg">
            <Navbar.Brand href="/">
              <img
                id="navbar-brand"
                src={Logo}
                className="logo d-inline-block align-top"
                alt="BroadLume logo"
              />
              {/* <img
                id="navbar-brand-mobile"
                src={LogoDark}
                className="logo d-inline-block align-top"
                alt="Floorforce logo"
              /> */}
            </Navbar.Brand>

            {/* <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mx-auto">
                <NavDropdown
                  title="Retailers"
                  id="basic-nav-dropdown"
                  data-toggle="dropdown"
                >
                  <NavDropdown.Item href="/retailer-solutions/websites">
                    Websites
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/retailer-solutions/google-ads">
                    Google Advertising
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/retailer-solutions/facebook-ads">
                    Facebook Advertising
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/retailer-solutions/ez-commerce">
                    Ez-Commerce
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/retailer-solutions/messaging">
                    Messaging
                  </NavDropdown.Item>
                </NavDropdown>

                <Nav.Link href="/manufacturer-solutions/">
                  Manufacturers
                </Nav.Link>

                <Nav.Link href="/case-studies/">Case Studies</Nav.Link>

                <NavDropdown
                  title="About"
                  id="basic-nav-dropdown"
                  data-toggle="dropdown"
                >
                  <NavDropdown.Item href="/about">Our Team</NavDropdown.Item>
                  <NavDropdown.Item href="/about/#mission">
                    Our Mission
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/about/#leadership">
                    Our Leadership
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/about/#locations">
                    Locations
                  </NavDropdown.Item>
                  <NavDropdown.Item href="https://www.floorforce.com/blog">
                    Blog
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Link
                className="desktopCTA"
                to="/schedule-free-demo"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="primary">Schedule a Call</Button>
              </Link>
              <Link
                className="manufacturerCTA"
                to="/schedule-free-demo-manufacturer"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="primary">Schedule a Call</Button>
              </Link>
            </Navbar.Collapse> */}
          </Navbar>
        </Container>
      </header>
    )
  }
}

export default Header
