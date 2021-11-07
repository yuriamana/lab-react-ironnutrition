import React, { Component } from 'react';
import 'bulma/css/bulma.css';

export default class FoodBox extends Component {
  state = {
    // quantity: this.props.foods.quantity
    quantity: 0,
  };

  handleChange = (evt) => {
    this.setState({
      quantity: evt.target.value
    })
  }
  //handleClick
  handleClick = (evt) => {
    console.log('here');
    console.log(evt)
    evt.preventDefault();
    this.props.handler(this.state.quantity, this.props.name, this.props.calories);
    //etape 1: renvoie l'info quand je click sur +
  };
  render() {
    return (
      <div className="columns">
        <div className="column is-half">
          <article className="media">
            <div className="media-left">
              <figure className="image is-64x64">
                <img src={this.props.foods.image} alt="" />
              </figure>
            </div>
            <div className="media-content">
              <div className="content">
                <p>
                  <strong>{this.props.foods.name}</strong> <br />
                  <small>{this.props.foods.calories}</small>
                </p>
              </div>
            </div>
            <div className="media-right">
              <div className="field has-addons">
                <div className="control">
                  <input
                    className="input"
                    type="number"
                    value={this.state.quantity}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="control">
                  <button className="button is-info" onClick={this.handleClick}>
                    +
                  </button>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    );
  }
}
