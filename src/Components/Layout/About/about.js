import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import Aux from '../../../hoc/Auxiliary/Auxiliary';
import Logo from '../../../assets/recify.png';
import './About.css';

function about() {
    return (
        <Aux>
            <Container>
                <Row className="vertical-center">
                    <Col md={4}>
                        <Image className="about-image" src={Logo} roundedCircle  />
                    </Col>

                    <Col md={3}>
                        <h1>Recify <i class="fab fa-react"></i></h1>
                        <h5 style={{color: 'gray'}}>Free Food Recipe App</h5>
                    </Col >
                </Row>
                <hr className="white-hr" />

                <Row>
                    <Col>
                        <p>
                            Hello! This is a Free recipe searcher app, Developed by Me. 
                        </p>
                        <p>
                            I am Debendu Das from Kolkata, India, student of Techno International Newtown in Electrical Engineering,
                             developed this wonderful food recipe app named Recify.
                            I just started this as a project and improve furthur and now still it is in development.
                            This app is build in javaScript framework library React js and uses React-bootstrap and axios.
                        </p>
                        <p>
                            If you liked this website or get any trouble for using it, Please give the feeback. It will improve the performance of this app
                            and it encourage me more to build new diffrent types of apps.
                        </p>
                        <p>
                            Thank you for visiting Recify.
                        </p>
                    </Col>
                </Row>

            </Container>
        </Aux>
    )
}

export default about;
