import React from 'react';
import {Row, Col, Image} from 'react-bootstrap';
import noImageAvailable from '../../../../assets/no image available.jpg';

function ingredient({ingredient, number}) {
    return (
        <Row className="Ingredient">
            <Col sm={9}>
                <h4><i class="fa fa-check-circle "></i>&nbsp;&nbsp;<u>{ingredient['text']}</u></h4>
                <ul>
                    <li>Weight : {ingredient['weight'].toFixed(2)} g</li>
                    <li>Food Category : {ingredient['foodCategory']}</li>
                </ul>
            </Col>
            <Col sm={3}
                className="IngredientImage">
                <Image
                    src={ingredient['image'] === null ? noImageAvailable : ingredient['image']}
                    alt="Image Not Available"
                    roundedCircle
                />
            </Col>
        </Row>
    )
}

export default ingredient
