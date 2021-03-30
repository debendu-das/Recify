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
import Aux from '../../hoc/Auxiliary/Auxiliary';

function RecipeContent() {

    let history = useHistory();
    const location = useLocation();
    
    let [recipe] = useState(location.state);
    
    
    const recipeTitle = recipe.recipe["recipe"]["label"];
    
    
    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth' })
      }, [])

    return ( 
        <Aux>
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
                        <h3><i class="fab fa-instalod"></i>&nbsp; For Detailed Instructions : &nbsp;&nbsp;&nbsp;&nbsp;<Button variant="info" href={recipe.recipe["recipe"]["url"]} >Click Here</Button></h3>
                    </Col>
                </Row>
            </Container>
        </Aux>
    )
}

export default RecipeContent;