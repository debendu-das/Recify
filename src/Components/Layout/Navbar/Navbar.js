import React from 'react';
import Aux from '../../../hoc/Auxiliary/Auxiliary';
import {Nav, Form, FormControl, Button, Navbar} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../../assets/recify.png';
import {NavLink} from 'react-router-dom';

const navbar = (props) => {
    return(
        <Aux>
            <Navbar bg="dark" variant="dark" expand="lg">
                {/* <Navbar.Brand href="./">Recify</Navbar.Brand> */}
                <Navbar.Brand href="/" >
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
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                    <NavLink to="/about">About</NavLink>
                </Nav>
                <Form inline onSubmit={props.search}>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" onChange={props.change}/>
                    <Button variant="outline-success" type="submit">Search</Button>
                </Form>
                </Navbar.Collapse>
            </Navbar>


        </Aux>
    );
}

export default navbar;