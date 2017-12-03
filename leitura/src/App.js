import React, { Component } from 'react';
import Header from './components/header'
import PostList from './components/post-list'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <PostList />
      </div>
    );
  }
}

export default App
