import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './FoodBox';
import FormAdd from './FormAdd';
import Search from './Search';
import TodayFood from './TodayFood';

export default class App extends Component {
  state = {
    foods: foods,
    displayForm: false,
    search: '',
    basket: [],
    totalCalories: 0
  };

  handleAdd = (newFood) => {
    newFood.quantity = 0;
    this.setState({
      foods: [...this.state.foods, newFood],
      displayForm: !this.state.displayForm,
      //or you can put false instead of !this.state.displayForm
    });
  };

  handleTodayFood = () => {    
    //etape 2: ajouter food id dans mon basket
    //app component soit rebuilder

  }

  handleSearch = (inputText) => {
    console.log(inputText)
    
    this.setState({
      // foods: [...this.state.foods],
      search: inputText
    })
  }
  //onClick={() => this.addNewFood}
  render() {
    //filter here 
    const filteredFood =
    this.state.foods.filter(foods => foods.name.toLowerCase().includes(this.state.search.toLowerCase()))
  


    return (
      <div className="App">
        <button
          onClick={() =>
            this.setState({ displayForm: !this.state.displayForm })
          }
        >
          Add food!
        </button>
        <Search method={this.handleSearch}/>
        {this.state.displayForm && <FormAdd handleAdd={this.handleAdd} />}
        {filteredFood.map((food, i) => (
          <FoodBox foods={food} key={i} handler={this.handleTodayFood}/>
          
        ))}
        <div>
          <p>Today's food</p>
          {this.state.basket.map((food, i) => {
            return (
              <TodayFood quantity={food.quantity} name={food.name} calories={food.calories}/>
            )
          })
          }
          <p> Total : {this.state.totalCalories} cal</p>
        </div>
        {/* passe a todayfood la liste des   food a afficher */}
      </div>
    );
  }
}

