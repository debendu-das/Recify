import React from 'react';
import {Container, Row, Col, Image} from 'react-bootstrap';
import Logo from '../../../assets/recify.png';
import './footer.css';


function footer() {
    return (
        <Container className = " footer justify-content-md-center">
            <Row className="vertical-center">
                <Col md={{span:3, offset:1}}>
                    <Image className="footer-image" src={Logo} roundedCircle  />
                </Col>

                <Col md={3}>
                    <h1>Recify <i class="fab fa-react"></i></h1>
                    <h5 style={{color: 'gray'}}>Free Food Recipe App</h5>

                </Col >

                <Col md={5} className="footer-contact">
                    <h2>Contact Me</h2>
                    <h5 style={{color: 'gray'}}><i class="fas fa-signature"></i> Name: Debendu Das</h5>
                    <h5 style={{color: 'gray'}}><i class="fas fa-envelope"></i> Email: debendudas100@gmail.com</h5>
                    <h5 style={{color: 'gray'}}><i class="fas fa-city"></i> City: Kolkata</h5>
                    <h5 style={{color: 'gray'}}><i class="fas fa-globe-asia"></i> Country: India</h5>
                    <p>**Email me anytime you want !</p>

                
                </Col>

            </Row>
            
        </Container>
    )
}

export default footer
