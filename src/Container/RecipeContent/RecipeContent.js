import React, {
    useState,
    useEffect
} from 'react'
import {
    useLocation,
    useHistory
} from 'react-router-dom';

import {Container, Row, Col, Image, Button} from 'react-bootstrap';
import './RecipeContent.css';
import Ingredients from './Ingredients/ingredients';

function RecipeContent() {

    let history = useHistory();
    const location = useLocation();
    // console.log(location);
    let [recipe] = useState(location.state);
    // console.log(recipe);
    
    const recipeTitle = recipe.recipe["recipe"]["label"];
    
    // console.log(recipe.recipe["recipe"]["ingredients"]);
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return ( 
        <Container className="RecipeContent">
            <Row>
                <Button variant="dark" onClick={() => history.goBack()}><i class="fas fa-chevron-left fa-2x"></i>&nbsp; Back</Button>
                
            </Row>
            <Row className="justify-content-md-center vertical-center">
                <Col lg={{span:4, offset:0}}> 
                    <Image src={recipe.recipe["recipe"]["image"]} roundedCircle  />
                </Col>
                <Col lg={6}>
                    <h1>{recipeTitle}</h1>
                </Col>
            </Row>
            <hr className="white-hr" />
            <Row>
                <Ingredients ingredients = {recipe.recipe["recipe"]["ingredients"]} />
            </Row>
            <Row>
                <Col>
                    <h3><i class="fab fa-instalod"></i>&nbsp; For Detailed Instructions : &nbsp;&nbsp;&nbsp;&nbsp;<Button variant="info" href={recipe.recipe["recipe"]["url"]}>Click Here</Button></h3>
                </Col>
            </Row>
        </Container>
    )
}

export default RecipeContent;