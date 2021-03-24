import React from 'react';
import Aux from '../../../hoc/Auxiliary/Auxiliary';
import {Nav, Form, FormControl, Button, Navbar} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../../assets/recify.png';
const navbar = () => {

    return(
        <Aux>
            <Navbar bg="dark" variant="dark" expand="lg">
                {/* <Navbar.Brand href="./">Recify</Navbar.Brand> */}
                <Navbar.Brand href="#home">
                    <img
                        alt=""
                        src={logo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                    Recify
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">Contact</Nav.Link>
                    <Nav.Link href="#link">About</Nav.Link>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-success">Search</Button>
                </Form>
                </Navbar.Collapse>
            </Navbar>


        </Aux>
    );
}

export default navbar;