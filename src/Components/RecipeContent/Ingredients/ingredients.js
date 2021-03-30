import React from 'react';
import { Col } from 'react-bootstrap';
import Ingredient from './Ingredient/ingredient';


function ingredients({ingredients}) {
    
    return (
        <Col>
            <h2><i class="fas fa-grin-beam"></i> Ingredients List :</h2>
            <br></br>
            {ingredients !== null && ingredients.map((ingredient,id) => {
                return <Ingredient key={ingredient['foodId']} className = "mt-3" number={id+1} ingredient={ingredient} /> ;
            })} 
        </Col>
    )
}

export default ingredients
