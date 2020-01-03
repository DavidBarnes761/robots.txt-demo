import React from 'react'
import Helmet from 'react-helmet'
import { Container, Row, Col } from 'react-bootstrap'
import Footer from '../components/Footer'
import Header from '../components/Header'

// import TilesWhite from '../img/tiles_white.svg'

export default function NotFound() {
  return (
    <>
      <Helmet>
        <body className="not-found" />
      </Helmet>

      <div className="blueFade">
        <Header />

        <Container
          className="hero-top pb-3"
          style={{ marginBottom: `0`, minHeight: `800px` }}
        >
          {/* <img
            className="tiles_white"
            src={TilesWhite}
            alt="white accent graphic"
          /> */}
          <Row className="mt-5 mb-5">
            <Col md={12}>
              <h1 className="pt-5 text-uppercase font-weight-bold text-center">
                404: Page Not Found
              </h1>
              <p className="text-uppercase font-weight-bold text-center">
                The page you are looking for might have been moved or renamed.
              </p>
            </Col>
          </Row>
        </Container>
      </div>

      <Footer />
    </>
  )
}
