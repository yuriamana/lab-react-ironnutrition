import React, { Component } from 'react';
import './App.js';
import 'bulma/css/bulma.css';

export default class FormAdd extends Component {
  state = {
    name: '',
    calories: 0,
    image: '',
  };

  handleChange = (e) => {
    // console.log(e)
    const target = e.target.id;
    const value = e.target.value;
    this.setState({
      [target]: value,
      //to access the value inside an object
    });
  };

  render() {
    return (
      <section>
        <div>
          <label htmlFor="name">
            Name:
            <input
              type="text"
              id="name"
              value={this.state.name}
              onChange={this.handleChange}
            ></input>
          </label>
        </div>
        <div>
          <label htmlFor="calories">
            Calories:
            <input
              type="text"
              id="calories"
              value={this.state.calories}
              onChange={this.handleChange}
            />
          </label>
        </div>
        <div>
          <label htmlFor="image">
            Image:
            <input
              type="text"
              value={this.state.image}
              onChange={this.handleChange}
            ></input>
          </label>
        </div>
        <div>
          <button
            onClick={() => {
              this.props.handleAdd(this.state);
            }}
          >
            {' '}
            Add new food
          </button>
        </div>
      </section>
    );
  }
}
