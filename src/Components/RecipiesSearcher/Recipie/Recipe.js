import React, { useState } from 'react';
import {Card} from 'react-bootstrap';
import { Link } from "react-router-dom";
import './Recipe.css';
import RingLoader from "react-spinners/RingLoader";


const Recipie = ( props ) => {

    const [loading, setLoading] = useState(true);
    const imageLoaded = () => {
        setLoading(false);
    }
    return (
        <Link 
            style={{ textDecoration: 'none' }}
            className="Card-links"
            to={{ 
            pathname: '/recipe', 
            state: { ...props } 
        }}>
            <Card
                bg={'dark'} >
                
                <div className="component-loader" style={{display: loading ? 'flex' : 'none' }}>
                    <RingLoader  loading={loading} color="white"/>
                </div>
                <Card.Img variant="top" style={{display: loading ? 'none' : 'block' }} src={props.recipe["recipe"]["image"]} onLoad={imageLoaded} />
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

export default Recipie;
