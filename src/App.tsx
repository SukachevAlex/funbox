import { cn } from '@bem-react/classname';
import React, { Component } from 'react';

import './fonts/fonts.css';
import './App.css';
import { Product } from './Components/common/Product/Product';

const cnPage = cn('Page');

class App extends Component {
  render() {
    return (
      <div className={cnPage()} style={{backgroundImage: 'url(img/bg.png)'}}>
        <h1 className={cnPage('Title')}>Ты сегодня покормил кота?</h1>
        <Product className={cnPage('Product')} />
      </div>
    );
  }
}

export default App;
