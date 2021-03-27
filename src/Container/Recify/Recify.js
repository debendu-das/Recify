import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";
import RecipesSearcher from '../../Components/RecipiesSearcher/RecipiesSearcher';
import RecipeContent from '../../Components/RecipeContent/RecipeContent';
import axios from 'axios';
import Contact from '../Contact/Contact';
import About from './../../Components/Layout/About/about';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import RingLoader from "react-spinners/RingLoader";
import LazyLoad from 'react-lazyload';
import Navbar from '../../Components/Layout/Navbar/Navbar';

export class Recify extends Component {
    state = {
        recipes: [],
        searchItem: "pizza",
        loading: true,
        fechting: true,
        error: false,
        errorMessage: ""
    }
    componentDidMount() {
        const searchItem = this.state.searchItem;
        const YOUR_APP_ID = "99cf75d9";
        const YOUR_APP_KEY = "783899e4e24939ee50cc3d18003e54ab";

        const url = `https://api.edamam.com/search?q=${searchItem}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=100`;
        // https://api.edamam.com/search?q=mango&app_id=99cf75d9&app_key=783899e4e24939ee50cc3d18003e54ab
        axios.get(url)
            .then(response => {
                this.setState({
                    recipes: response.data.hits,
                    fechting: false,
                    loading: false
                });
            })
            .catch(error => {
                this.setState({
                    loading: false,
                    fechting: false,
                    error: true
                });
            });
    }


    searchHandler = (event) => {
        event.preventDefault();
        console.log('EVENT VALUE', event);
        const searchItem = event.target[0].value;
        console.log(searchItem);

        this.setState({ searchItem: searchItem, fechting: true });
        const YOUR_APP_ID = "99cf75d9";
        const YOUR_APP_KEY = "783899e4e24939ee50cc3d18003e54ab";

        const url = `https://api.edamam.com/search?q=${searchItem}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=100`;

        axios.get(url)
            .then(response => {
                if (response.data.hits.length !== 0) {
                    this.setState({
                        recipes: response.data.hits,
                        searchItem: searchItem,
                        fechting: false,
                        error: false,
                        errorMessage: ""
                    });
                } else {
                    this.setState({
                        recipes: response.data.hits,
                        searchItem: searchItem,
                        fechting: false,
                        error: true,
                        errorMessage: "Oops!! No Recipes Found. Try Something Diffrent"
                    });
                }
                console.log(response.data.hits);
            })
            .catch(error => {
                
                this.setState({
                    fechting: false,
                    error: true,
                    errorMessage: error.message
                });
            });

    }

    changeHandler = (event) => {
        // const item = event.target.value;

    }
    // '#36D7B7'
    render() {
        console.log("RECIFY :" , this.state);
        
        return (
            <Aux>
                {
                    this.state.loading ? 
                        <div className="spinner">
                            <RingLoader color={'#00FFCD'} loading={this.state.loading}  size={100} />
                        </div> :
                        
                        null 
                }
                
                <Navbar search = {this.searchHandler} value={this.state.searchItem} change = {this.changeHandler} />
                <Switch>
                    <Route path="/recipe">
                        <LazyLoad>
                            <RecipeContent />
                        </LazyLoad>
                    </Route>
                    <Route exact path="/contact">
                        <LazyLoad>
                            <Contact />
                        </LazyLoad>
                    </Route>
                    <Route exact path="/about">
                        <About />
                    </Route>
                    <Route exact path="/">
                    <LazyLoad placeholder={<div color={'white'} >Loading.....</div>} >
                        <RecipesSearcher {...this.state}
                            search={this.searchHandler} 
                            change={this.changeHandler}/>
                    </LazyLoad>
                    </Route>
                </Switch>
            </Aux>
        )
    }
}

export default Recify;
