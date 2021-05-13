import React from 'react';

import Compose from './Compose/Compose';
import Post from './Post/Post';

function App() {
  return (
    <div className="App">
      <Compose />
      <Post 
      author="Q. Ackermann"
      content="The main idea in React is to use components. You can create functions and classes called components (function-component and class-component). I had a hard time understanding what exactly is a component when I started using react, but actually it is anything, really. It's a way of splitting your application to loosely couple the logic. Let's say you are building ... a blog!"
      title="Javascript and ReactJS"
      />

      <Post 
      author="Mike Fast"
      content="Linux is better than Windows, it's a fact. Linux is better than Windows, it's a fact. Linux is better than Windows, it's a fact. Linux is better than Windows, it's a fact. Linux is better than Windows, it's a fact. "
      title="Why Linux is better than Windows"
      />

      <Post 
      author="Tim Cho"
      content="Please, you know it! Please, you know it! Please, you know it! Please, you know it! Please, you know it! Please, you know it! Please, you know it! Please, you know it! Please, you know it! Please, you know it! Please, you know it! "
      title="Why OSX is superior to any living thing"
      />
    </div>
  );
}

export default App;
