import React from 'react';
import logo from './logo.svg';
import './App.css';
import AwesomeAnimals from './components/AwesomeAnimals'
import Test from './components/Test'
import ArticleList from './components/ArticleList'
import ArticleCard from './components/ArticleCard'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <AwesomeAnimals />
        <Test />
        <ArticleList>
          <ArticleCard />
        </ArticleList>
      </header>
    </div>
  );
}

export default App;
