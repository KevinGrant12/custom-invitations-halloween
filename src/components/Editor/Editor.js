import React, { Component } from 'react';
import './Editor.css';
import Form from './Form/Form';
import Invitation from './Invitation/Invitation';

export default class Editor extends Component {
  render() {
    return(
      <div className="editor">
        <Invitation />
        <Form />
      </div>
    );
  }
};