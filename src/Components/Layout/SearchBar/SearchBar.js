import React from 'react'
import {Container, Row, Form, Button, Col, FormControl} from 'react-bootstrap';
const searchBar = (props) => {
    return (
        <Container className="mt-5 justify-content-md-center">
            <Row className="justify-content-center">
            <Col  md={{ offset: 2 }}>
                <Form inline onSubmit={props.search}>
                    <Form.Label><h3>Search Your Favorite Foods</h3></Form.Label>
                    <FormControl type="text" placeholder="Search" className="ml-md-5 mr-sm-2" onChange={props.change}/>
                    <Button variant="outline-success" type="submit">Search</Button>
                </Form>
            </Col>
            </Row>
        </Container>
    )
}

export default searchBar

