import React, { Component } from 'react';
import './Invitation.css';
import Zombies from './invitation-zombies.png';
import Clouds from './invitation-clouds.jpg';
import BloodOne from './invitation-blood-1.png';
import BloodTwo from './invitation-blood-2.png';

export default class Invitation extends Component {
  render() {
    return(
      <div className="invitation-wrap">
        <div className="invitation">
          <img src={BloodOne} class="blood blood-one" alt="blood overlay" />
          <img src={BloodTwo} class="blood blood-two" alt="blood overlay" />
          <div className="moon"></div>
          <img src={Zombies} class="zombies" alt="zombies" />
          <img src={Zombies} class="zombies zombies2" alt="zombies" />
          <img src={Clouds} class="clouds" alt="clouds" />
          <div className="invitation-text">
            <h1>Happy Halloween</h1>
            <h3>{this.props.greeting}</h3>
            <div className="lists-wrap">
              <ul class="info">
                <li><h4>Who:</h4>{this.props.host}</li>
                <li><h4>Where:</h4> {this.props.location}</li>
                <li><h4>When:</h4>{this.props.date}</li>
                <li><h4>Phone:</h4> {this.props.phone}</li>
                <li><h4>Email:</h4>{this.props.email}</li>
              </ul>
              <ul class="extras">
                <h4><strong>Please DO bring:</strong></h4>
                {this.props.booz && <li>Bloody Booz</li>}
                {this.props.snacks && <li>Sinister Snacks</li>}
                {this.props.candy && <li>Creepy Candy</li>}
                {this.props.music && <li>Mortifying Music</li>}
              </ul>
              <ul class="extras">
                <h4><strong>Please DO NOT bring</strong></h4>
                {this.props.children && <li>Terrible Toddlers</li>}
                {this.props.gross && <li>Actual dead things</li>}
              </ul>

            </div>
          </div>
          <div className="social">
            <a href="#!"><i class="fab fa-facebook"></i>RSVP if you dare...</a>
          </div>
        </div>
        
      </div>
    );
  }
};