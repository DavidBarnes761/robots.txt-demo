import React from 'react'
// import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import { Container, Row, Col, Card } from 'react-bootstrap'
import Header from '../components/Header'
import Footer from '../components/Footer'

// images
import Hero from '../img/hero.jpg'
import HeroSmall from '../img/hero-small.jpg'
import IconFF from '../img/Logos-03.svg'
import IconCreate from '../img/creating_your_space_logo.svg'
import IconFlooringStores from '../img/Logos-02.svg'
import IconAdHawk from '../img/Logos-01.svg'

class Index extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Helmet>
          <body className="home" />
          <title>Broadlume</title>
          <meta name="description" content="" />
          <meta name="title" content="Broadlume" />
          <meta
            name="keywords"
            content="FloorForce, Floor Force, flooring websites, flooring advertising, digital marketing for flooring, flooring store advertising, flooring store marketing"
          />
          <meta property="og:title" content="Broadlume" />
          <meta property="og:description" content="" />
          <meta property="og:image" content="" />
          <meta property="og:url" content="https://broadlume.com" />
          <meta property="og:site_name" content="BroadLume" />
          <meta name="twitter:card" content="summary_large_image" />

          <link rel="canonical" href="https://broadlume.com" />
        </Helmet>

        <Header></Header>

        <div className="hero-top-80">
          <Row className="align-items-center">
            <Col className="align-self-center">
              <div className="text-white">
                <Card.Img className="desktop" src={Hero} alt="Card image" />
                <Card.Img className="mobile" src={HeroSmall} alt="Card image" />
                <Card.ImgOverlay className="text-center">
                  <div className="hero-text">
                    <h1>Our Mission</h1>
                    <Card.Text className="h5">
                      We build integrated solutions to transform the way
                      flooring is bought and sold around the world.
                    </Card.Text>
                  </div>
                </Card.ImgOverlay>
              </div>
            </Col>
          </Row>
        </div>

        <Container className="mt-5 mb-5">
          <h2 className="text-center">Our Brands</h2>
          <Row className="mt-3 align-items-center brands">
            <Col xs={12} sm={6} md={3}>
              <a href="https://www.floorforce.com/" rel="noopener noreferrer">
                <img
                  className="text-center center-block"
                  src={IconFF}
                  alt="FloorForce logo"
                />
              </a>
            </Col>
            <Col xs={12} sm={6} md={3}>
              <a
                href="https://www.creatingyourspace.com/"
                rel="noopener noreferrer"
              >
                <img
                  className="text-center center-block create-space"
                  src={IconCreate}
                  alt="Create Your Space logo"
                />
              </a>
            </Col>
            <Col xs={12} sm={6} md={3}>
              <a
                href="https://www.flooringstores.com/"
                rel="noopener noreferrer"
              >
                <img
                  className="text-center center-block"
                  src={IconFlooringStores}
                  alt="Flooring Stores logo"
                />
              </a>
            </Col>
            <Col xs={12} sm={6} md={3}>
              <a href="https://www.tryadhawk.com/" rel="noopener noreferrer">
                <img
                  className="text-center center-block"
                  src={IconAdHawk}
                  alt="AdHawk logo"
                />
              </a>
            </Col>
          </Row>
        </Container>

        <Footer></Footer>
      </React.Fragment>
    )
  }
}

export default Index
