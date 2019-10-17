import React, { Component } from 'react';
import './Editor.css';
import Form from './Form/Form';
import Invitation from './Invitation/Invitation';

export default class Editor extends Component {
  constructor(props) {
    super(props);
    this.state = {

      // Inputs
      greeting: "Join our party until dawn breaks you!",
      host: "",
      location: "",
      date: "",
      time: "",
      email: "",
      phone:"",

      // Checkboxes
      booz: true,
      snacks: true,
      candy: true,
      music: true,
      children: true,
      gross: true
    }
  }
  componentDidMount = () => {
    this.updateState();
  }
  updateState = (fieldname, fieldvalue) => {
    this.setState({
      [fieldname]: fieldvalue
    });
  }
  updateDate = date => {
    console.log(date)
    const selectedDate = date.toString().slice(0,16);
    console.log('selected date' + selectedDate)
    this.setState({
      date: selectedDate
    })
    console.log('update date')
  }
  render() {
    return(
      <div className="editor">
        <Invitation
          greeting={this.state.greeting}
          host={this.state.host}
          location={this.state.location}
          date={this.state.date}
          email={this.state.email}
          phone={this.state.phone}
          booz={this.state.booz}
          snacks={this.state.snacks}
          candy={this.state.candy}
          music={this.state.music}
          children={this.state.children}
          gross={this.state.gross}
        />
        <Form
          updateState={this.updateState}
          updateDate={this.updateDate}
        />
      </div>
    );
  }
};