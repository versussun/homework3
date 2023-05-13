import React from 'react';
import './App.css';
import { PostList } from './components/PostList/PostList';

function App() {
  return (
    <div className="App">
      <div className="header">PostApp</div>
      <PostList></PostList>
      <div className="footer">@PostApp</div>
    </div>
  );
}

export default App;
