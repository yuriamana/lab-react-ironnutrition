import React, { Component } from 'react';
import './App.js';
import 'bulma/css/bulma.css';

export default class Search extends Component {
    handleChange = (evt) => {
        // console.log(evt.target.value)
        console.log(this.props)
        let inputText = evt.target.value
        this.props.method(inputText);
      };

  render() {
    return (
      
       <div>
        <input type="text" class="input search-bar" name="search" placeholder="Search" onChange={this.handleChange}/>
      </div>
       
    );
  }
}
