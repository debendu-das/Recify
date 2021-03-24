import React, {
    Component
} from 'react'
import {
    Container,
    Row,
    Col
} from 'react-bootstrap';
// import { Switch, Route } from "react-router-dom";
import Aux from '../../hoc/Auxiliary/Auxiliary';
import Recipie from './Recipie/Recipie';
import SearchBar from './../../Components/Layout/SearchBar/SearchBar';
import axios from 'axios';

export class Recipies extends Component {
    state = {
        recipies: null,
        searchItem: '',
        YOUR_APP_ID: "99cf75d9",
        YOUR_APP_KEY: "783899e4e24939ee50cc3d18003e54ab",
        searched: false,
        error: false
    }
    componentDidMount() {
        const searchItem = this.state.searchItem;
        const YOUR_APP_ID = this.state.YOUR_APP_ID;
        const YOUR_APP_KEY = this.state.YOUR_APP_KEY;

        const url = `https://api.edamam.com/search?q=${searchItem}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=18`;
        // https://api.edamam.com/search?q=mango&app_id=99cf75d9&app_key=783899e4e24939ee50cc3d18003e54ab
        axios.get(url)
            .then(response => {
                this.setState({
                    recipies: response.data.hits
                });
                console.log(response.data.hits);
            })
            .catch(error => {
                this.setState({
                    error: true
                });
            });

    }


    searchHandler = (event) => {
        event.preventDefault();
        const searchItem = this.state.searchItem;
        const YOUR_APP_ID = this.state.YOUR_APP_ID;
        const YOUR_APP_KEY = this.state.YOUR_APP_KEY;

        const url = `https://api.edamam.com/search?q=${searchItem}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=18`;

        axios.get(url)
            .then(response => {
                if (response.data.hits.length !== 0) {
                    this.setState({
                        recipies: response.data.hits,
                        searched: true,
                        error: false
                    });
                } else {
                    this.setState({
                        recipies: response.data.hits,
                        searched: true,
                        error: true
                    });
                }
                console.log(response.data.hits);
            })
            .catch(error => {
                this.setState({
                    error: true
                });
            });

    }
    changeHandler = (event) => {
        const item = event.target.value;
        this.setState({
            searchItem: item
        });
    }


    render() {

        console.log(this.state)

        let heading = this.state.searched ? ( <h4> HERE IS YOUR RECIPIES </h4>) : (<h4>SOMETHING YOU MAY LIKE</h4 > );
        let cards = this.state.error ? ( <h4> Ooopps!Nothing is here.Try another dish. </h4>) : null;

            ;

            return ( 
                <Aux>
                    <SearchBar search = {this.searchHandler} value={this.state.searchItem} change = {this.changeHandler}/> 
                    <Container className = "mt-5 justify-content-md-center" >
                        <Row className = "justify-content-center" >
                            <Col > {heading} </Col> 
                        </Row> 
                        <Row className = "mainContent" > 
                            {cards}
                            {this.state.recipies !== null && this.state.recipies.map((recipe, id) => {
                                return <Col md = {{span: 4}} className = "mt-3" > < Recipie key = {id} recipe = { recipe }/></Col > ;
                            })} 
                        </Row>
                    </Container>
                </Aux>
            )
        }
    }

    export default Recipies;