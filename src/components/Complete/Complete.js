import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Complete extends Component {
  render() {
    return(
      <div className="complete">
        <h1>Thank You!</h1>
        <p>Your custom Halloween party invitation has been created. Check your email for your invitation and additional materials.</p>
        <Link to="/">Start Over</Link>
      </div>
    );
  }
};