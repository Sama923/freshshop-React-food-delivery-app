import React from 'react'
import logo from "../../assets/images/logo.png"
import { Container, Row, Col, ListInlineItem, List } from 'reactstrap'
import "../../styles/footer.css"
import { Link } from 'react-router-dom'
const Footer = () => {
  return (

    <footer className="footer">
      <Container>
        <Row>
          <Col lg="4" md="12" sm="12">
            <div className="footer__logo">
              <img src={logo} alt="logo" />
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia autem ad expedita! Exercitationem</p>
            </div>
          </Col>

          <Col lg="4" md="12" sm="12">
            <h5 className='footer__title'>Social Media</h5>

            <List type="inline" className='social__links'>
              <ListInlineItem>
                <Link to="/#"><i className="ri-facebook-circle-line"></i></Link>
              </ListInlineItem>

              <ListInlineItem>
                <Link to="/#"><i className="ri-whatsapp-fill"></i></Link>
              </ListInlineItem>

              <ListInlineItem>
                <Link to="/#"><i className="ri-linkedin-fill"></i></Link>
              </ListInlineItem>
            </List>

          </Col>
          <Col lg="4" md="12" sm="12">
            <h5 className="footer__title">Contact</h5>
            <List type="unstyled" className='location__list'>
              <li>
                Location: Cairo, Egypt
              </li>
              <li>
                Phone: +20 000-000-00  </li>
              <li>
                Email: example@gmail.com
              </li>
            </List>

          </Col>
        </Row>
      </Container>
    </footer>

  )
}

export default Footer
