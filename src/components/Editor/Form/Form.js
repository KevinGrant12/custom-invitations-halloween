import React, { Component } from 'react';
import './Form.css';
import DatePicker from 'react-date-picker';

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {

      // Inputs
      greeting: "Join our party until dawn breaks you!",
      host: "",
      location: "",
      date: new Date(),
      email: "",
      phone: "",

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
  handleDate = date => {
    this.setState({ date })
    this.props.updateDate(date,date);
  }
  render() {
    return(
      <section className="form">
        <div className="form-details">
          <h1>Custom Invitation Creator</h1>
          <p>Kick off the Halloween bash! Complete the form below and watch your creation come to life!</p>
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
            <h4>Date:</h4>
            <DatePicker
              name="date"
              onChange={this.handleDate}
              value={this.state.date}
              format="M-dd"
              locale=""
            />
          </label>
          <label>
            <h4>Host Phone:</h4>
            <input
              type="tel"
              name="phone"
              value={this.state.phone}
              onChange={this.handleChange}
              maxlength="12"  
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
          <div className="bringers-wrap">
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
          </div>
          <input type="submit" value="submit"/>
        </form>
      </section>
    );
  }
};