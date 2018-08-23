import React, { Component } from 'react';
import './App.css';
import Form from './components/Form';
import Recipes from './components/Recipes';



const API_KEY = "2622bd912820d51980959a935609f4f4";


class App extends Component {
  state = {
    recipes: []
  }
  getRecipe = async (e) => {
    //Grabs Input Value 
    const recipeName = e.target.elements.recipeName.value;
    //Prevents Full Page Refresh
    e.preventDefault();
    const api_call = await fetch
    (`https://cors-anywhere.herokuapp.com/http://food2fork.com/api/search?key=${API_KEY}&q=${recipeName}&count=10`);
    //Grabbing data and converting to JSON format
    const data = await api_call.json();
    this.setState({ recipes: data.recipes })
    console.log(this.state.recipes)
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Recipe Search</h1>
        </header>
       <Form getRecipe={this.getRecipe}/>
       <Recipes recipes={this.state.recipes}/>
      </div>
      );
  }
}

export default App;
