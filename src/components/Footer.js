import React from 'react'
import { Link } from 'gatsby'
import { Container, Row, Col } from 'react-bootstrap'
// import { FaPhone, FaHome } from 'react-icons/fa'
// import { GoMail } from 'react-icons/go'
// import MarketoFormFooter from '../components/forms/MarketoFormFooter'
// import MarketoManufacturerFooter from '../components/forms/MarketoManufacturerFooter'
// import $ from 'jquery'

// images
// import WatermarkFooter from '../img/floorforce_watermark.svg'
// import IconMail from '../img/social_email.svg'
// import IconFacebook from '../img/social_facebook.svg'
// import IconTwitter from '../img/social_twitter.svg'
// import IconLinkedIn from '../img/social_linkedin.svg'
// import IconInstagram from '../img/social_insatgram.svg'
// import FBBadge from '../img/FB-Badge.svg'
// import Partner from '../img/Google-Partner-Badge.svg'

class Footer extends React.Component {
  componentDidMount() {
    // eslint-disable-next-line
    // $('.card-header').click(function() {
    //   if ($(this).find('.collapse.show')) {
    //     $('svg.plus').css('display', 'none')
    //     $('svg.minus').css('display', 'block')
    //   } else if ($(this).find('.collapse')) {
    //     $('svg.plus').css('display', 'block')
    //     $('svg.minus').css('display', 'none')
    //   }
    // })

    document.getElementById('copyright').innerHTML = new Date().getFullYear()
  }
  render() {
    return (
      <footer>
        <div className="footerBlock">
          <div className="subFooterBlock">
            <Container
              className="pt-3 pb-3 pl-4 pr-4"
              style={{ marginBottom: `0` }}
            >
              <Row className="mt-3">
                <Col className="text-right">
                  <div>
                    © Broadlume <span id="copyright">2019</span>
                  </div>
                  <div>
                    <Link to="/terms-and-conditions">Terms and Conditions</Link>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
