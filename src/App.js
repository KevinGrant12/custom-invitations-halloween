import React from 'react';
import { Switch, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Landing from './components/Landing/Landing';
import Editor from './components/Editor/Editor';
import Complete from './components/Complete/Complete';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={Landing} exact="true" />
        <Route path="/editor" component={Editor}/>
        <Route path="/complete" component={Complete} />
      </Switch>
    </div>
  );
}

export default App;
