import React, { Component } from 'react';
import Header from './Header'
import Title from './Title'
import ArticleBody from './ArticleBody'
import ArticleLinks from './ArticleLinks'
import Ad from './Ad'
import OtherArticles from './OtherArticles'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
            <Header />
    <main className="expanded row">
      <div className="large-8 medium-12 columns article">
            <Title />
            <ArticleBody />
            <ArticleLinks />
      </div>
            <Ad />

      <div className="small-12 columns other-articles">
          <OtherArticles />
      </div>
    </main>

    <footer className="expanded row">
      <h6>&copy; 2017 Erebor Industries</h6>
      <h6 className="float-right">All rights reserved</h6>
    </footer>
      </div>
    );
  }
}

export default App;
