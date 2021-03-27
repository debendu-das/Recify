import React from 'react';
import Aux from '../../../hoc/Auxiliary/Auxiliary';
import './Carousel.css';
import { Carousel } from 'react-bootstrap';
import carousel1 from '../../../assets/carousel1.jpg';
import carousel2 from '../../../assets/carousel2.jpg';
import carousel3 from '../../../assets/carousel3.jpg';


const carousel =()=>{

    return (
        <Aux>
            <Carousel fade>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={carousel1}
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
                    src={carousel2}
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
                    src={carousel3}
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