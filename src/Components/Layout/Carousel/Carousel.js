import React from 'react';
import Aux from '../../../hoc/Auxiliary/Auxiliary';
import './Carousel.css';
import { Carousel } from 'react-bootstrap';
const carousel =()=>{

    return (
        <Aux>
            <Carousel fade>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://source.unsplash.com/1920x1280/?food"
                    alt=""
                    height="100%"
                    />
                    <Carousel.Caption>
                    <h3>WELCOME TO RECIFY</h3>
                    <p>COOKING IS EASY</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://source.unsplash.com/1920x1280/?cake"
                    alt="Second slide"
                    height="100%"
                    />

                    <Carousel.Caption>
                        <h3>WELCOME TO RECIFY</h3>
                        <p>COOKING IS EASY</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://source.unsplash.com/1920x1280/?cake"
                    alt="Third slide"
                    height="100%"
                    />

                    <Carousel.Caption>
                        <h3>WELCOME TO RECIFY</h3>
                        <p>COOKING IS EASY</p>
                    </Carousel.Caption>
                </Carousel.Item>
                </Carousel>


        </Aux>


    );
}
 export default carousel;