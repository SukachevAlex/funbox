import { cn } from '@bem-react/classname';
import React, { Component } from 'react';
import './App.css';

const cnPage = cn('Page');

class App extends Component {
  render() {
    return (
      <div className={cnPage()}></div>
    );
  }
}

export default App;
