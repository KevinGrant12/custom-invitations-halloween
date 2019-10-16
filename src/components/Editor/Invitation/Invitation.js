import React, { Component } from 'react';
import './Invitation.css';
import Zombies from './invitation-zombies.png';
import Clouds from './invitation-clouds.jpg';
import BloodOne from './invitation-blood-1.png';
import BloodTwo from './invitation-blood-2.png';

export default class Invitation extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return(
      <div className="invitation-wrap">
        <div className="invitation">
          <img src={BloodOne} class="blood blood-one" alt="blood overlay" />
          <img src={BloodTwo} class="blood blood-two" alt="blood overlay" />
          <div className="moon"></div>
          <img src={Zombies} class="zombies" alt="zombies" />
          <img src={Zombies} class="zombies" alt="zombies" />
          <img src={Clouds} class="clouds" alt="clouds" />
          <div className="invitation-text">
            <h1>Happy Halloween</h1>
            <h3>Join our party until dawn breaks you!</h3>
            <h4>Bloody Details:</h4>
            <ul>
              <li><strong>Where: </strong> 3405 Thistle Lane, Lake Villa</li>
              <li><strong>When: </strong> Thursday 10/18 @ 9pm</li>
              <li><strong>Email: </strong>spooky@gmail.com</li>
              <li><strong>Phone: </strong> 666-666-6660</li>
            </ul>
            <ul>
              <p><strong>Please bring one of the following:</strong></p>
              <li>Bloody Booz</li>
              <li>Sinister Snacks</li>
              <li>Creepy Candy</li>
              <li>Mortifying Music</li>
            </ul>
            <ul>
              <p><strong>Do not bring</strong></p>
              <li>Terrible Toddlers</li>
              <li>Anything that is actually dead or disgusting</li>
            </ul>
          </div>
          <div className="social">
            <a href="#"><i class="fab fa-facebook"></i>RSVP if you dare...</a>
          </div>
        </div>
        
      </div>
    );
  }
};