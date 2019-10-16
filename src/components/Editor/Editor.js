import React, { Component } from 'react';
import './Editor.css';
import Form from './Form/Form';
import Invitation from './Invitation/Invitation';

export default class Editor extends Component {
  constructor(props) {
    super(props);
    this.state = {

      // Inputs
      location: "",

    }
  }
  updateState = (fieldname, fieldvalue) => {
    this.setState({
      [fieldname]: fieldvalue
    });
  }
  render() {
    return(
      <div className="editor">
        <Invitation
          location={this.state.location}
        />
        <Form
          greeting="test"
          updateState={this.updateState}
        />
      </div>
    );
  }
};