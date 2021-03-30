import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Alert } from 'react-bootstrap';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import Recipe from './Recipie/Recipe';
import SearchBar from '../Layout/SearchBar/SearchBar';
import RingLoader from "react-spinners/RingLoader";

import Carousel from '../Layout/Carousel/Carousel';
// const OtherComponent = React.lazy(() => import('./Recipie/Recipe'));


const RecipesSearcher = ( props ) => {
    const LIMIT = 18;
    const LENGTH = 100;

    const [showMore,setShowMore] = useState(true);
    const [index,setIndex] = useState(LIMIT);

    // useEffect(() => {
        
    // }, [props.recipes])

    const loadMore = () => {
        let newIndex = index + LIMIT;
        const newShowMore = newIndex < (LENGTH - 1);
        newIndex = newIndex < (LENGTH - 1) ? newIndex : LENGTH ;
        setIndex(newIndex);
        setShowMore(newShowMore);
    }
    useEffect(() => {
        setIndex(LIMIT);
    }, [props.searchItem])

    

    const errorMessage = (<Alert className="text-center" variant={'danger'}>
                            {props.errorMessage}
                        </Alert>);

    const mainContent = props.error ? 
                                errorMessage
                            :

                                (<Aux>
                                    <Row className = "mainContent" > 
                                        {props.recipes !== [] && props.recipes.slice(0,index).map((recipe, id) => {
                                            return  <Col key = {id} md={4} className="mt-3" >
                                                        <Recipe key = {id} recipe = { recipe }/>
                                                    </Col>;
                                        })}
                                    </Row>
                                    <Row className="vertical-center">
                                        <Col>
                                            {showMore && <Button variant="outline-dark" onClick={loadMore}> Load More </Button>}
                                        </Col>
                                    </Row>
                                </Aux>);
    

    return ( 
        <Aux>
            <Carousel />
            <SearchBar search = {props.search} value={props.searchItem} change = {props.change}/> 
            <Container className = "mt-5 mb-5 justify-content-md-center" >
                <Row className = "justify-content-center" >
                    <Col > <h4> HERE IS YOUR RECIPIES </h4> </Col> 
                </Row> 

            {
                props.fechting ?
                        <Row className = "mainContent" ><Col className="mt-3 mb-3"><RingLoader color="white"/></Col></Row>
                    :
                        mainContent
            }

                
            </Container>
        </Aux>
    )
}

export default RecipesSearcher;