import React from 'react'
import {Card} from 'react-bootstrap';
import { Link } from "react-router-dom";

const recipie = ( props ) => {
    return (
        <Link 
            to={{ 
            pathname: '/recipe', 
            state: { ...props } 
        }}>
            <Card
                bg={'dark'} >
                <Card.Img variant="top" src={props.recipe["recipe"]["image"]}  />
                <Card.Body >
                <Card.Title>{props.recipe["recipe"]["label"]}</Card.Title>
                {/* <Card.Text>
                    {props.title}This is a wider card with supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer.
                </Card.Text> */}
                </Card.Body>
            </Card>
        </Link>
    )
}

export default recipie;
