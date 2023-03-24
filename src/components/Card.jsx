import React, { Component } from "react";

class Card extends Component {
  state = {};
  
    getStyle(){
        return this.props.style;
    }

  render() {
    return (
      <div className="card" style={this.getStyle()}>
        <div className="card-body">{this.props.children}</div>
      </div>
    );
  }
}

export default Card;
