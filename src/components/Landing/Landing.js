import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Landing.css';

export default class Landing extends Component {
  render() {
    return(
      <section className="landing">
        <h3>customize your own</h3>
        <h1>Halloween Party Invitation</h1>
        <p>Receive a custom party invitation package to send out for your holiday event.</p>
        <Link to='/editor'>Get Started</Link>
      </section>
    );
  }
};