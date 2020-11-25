import React from 'react';
import './App.css';
import Header from './components/header/header';
import Main from './components/main/main';


const App = () => {
  return (
    <div className="App" style={{position: `relative`}}>
      <Header />
      <Main />
    </div>
  );
};

export default App;
