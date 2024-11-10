import logo from './logo.svg';
import './App.css';
import Header from './Header'
import Footer from './Footer';
import React from 'react';

function App() {
  const name = 'T3H';

  const objStyle = {
    color: 'red'
  }
  return (
    <React.Fragment>
    <Header></Header>
    <Header />
    <h1 className="greeting">Hello {name}</h1>
    <Footer />
    </React.Fragment>
  );
}

export default App;
