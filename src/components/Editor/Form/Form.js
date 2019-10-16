import React, { Component } from 'react';
import './Form.css';

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {

      // Inputs
      date: "",
      email: "",
      greeting: "Join our party until dawn breaks you!",
      location: "",
      host: "",
      phone: "",
      time: "", 

      // Checkboxes
      booz: true,
      snacks: true,
      candy: true,
      music: true,
      children: true,
      gross: true
    }
  }
  handleSubmit = (event) => {
    alert('Form was submitted');
    event.preventDefault();
  }
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
    this.props.updateState(event.target.name, event.target.value);
  }
  render() {
    return(
      <section className="form">
        <div className="form_details">
          <h3>Kickoff Your Halloween Bash</h3>
          <p>- with a -</p>
          <h1>Custom Invitation</h1>
          <p>Add your details to the form below and watch your creation come to life!</p>
        </div>
        <form onSubmit={this.handleSubmit}>
          <label>
            <h4>Greeting:</h4>
            <input
              type="text"
              name="greeting"
              value={this.state.greeting}
              onChange={this.handleChange}  
              maxlength="40"
            />
          </label>
          <label>
            <h4>Hosted By:</h4>
            <input
              type="text"
              name="host"
              value={this.state.host}
              onChange={this.handleChange}
              maxlength="40"
            />
          </label>
          <fieldset>
            <div className="form-date-wrap">
              <label>
                <h4>Date:</h4>
                <select name="date" id="date" value={this.state.day}>
                  <option value=""></option>
                </select>
              </label>
              <label>
                <h4>Time: </h4>
                <select name="time" id="time" value={this.state.time}>
                  <option value="12">12:00pm</option>
                  <option value="1">1:00pm</option>
                  <option value="2">2:00pm</option>
                  <option value="3">3:00pm</option>
                  <option value="4">4:00pm</option>
                  <option value="5">5:00pm</option>
                  <option value="6">6:00pm</option>
                  <option value="7">7:00pm</option>
                  <option value="8">8:00pm</option>
                  <option value="9">9:00pm</option>
                  <option value="10">10:00pm</option>
                </select>
              </label>
            </div>
          </fieldset>
          <label>
            <h4>Party Location:</h4>
            <input
              type="text"
              name="location"
              value={this.state.location}
              onChange={this.handleChange}
              maxlength="50" 
            />
          </label>
          <label>
            <h4>Host Phone:</h4>
            <input
              type="tel"
              name="phone"
              value={this.state.phone}
              onChange={this.handleChange}  
            />
          </label>
          <label>
            <h4>Host Email:</h4>
            <input
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}  
            />
          </label>
          <fieldset class="bringers">
            <h4>Please Bring: </h4>
            <label>
              <input
                id="booz"
                type="checkbox"
                name="booz"
                checked={this.state.booz}
                onChange={this.handleChange}
              />
              Alcohol
            </label>
            <label>
              <input
                type="checkbox"
                name="snacks"
                checked={this.state.snacks}
                onChange={this.handleChange}
              />
              Snacks
            </label>
            <label>
              <input
                type="checkbox"
                name="candy"
                checked={this.state.candy}
                onChange={this.handleChange}
              />
              Candy
            </label>
            <label>
              <input
                type="checkbox"
                name="music"
                checked={this.state.music}
                onChange={this.handleChange}
              />
              Music
            </label>
          </fieldset>
          <fieldset class="bringers">
            <h4>Do Not Bring: </h4>
            <label>
              <input
                id="children"
                type="checkbox"
                name="children"
                checked={this.state.children}
                onChange={this.handleChange}
              />
              Children
            </label>
            <label>
              <input
                type="checkbox"
                name="gross"
                checked={this.state.gross}
                onChange={this.handleChange}
              />
              Actual Gross Stuff
            </label>
          </fieldset>
          <input type="submit" value="submit"/>
        </form>
      </section>
    );
  }
};