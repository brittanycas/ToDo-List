import React from 'react';
import Header from './Header'
import TodoList from './TodoList'
import Footer from './Footer'


import './App.css';


function App () {

    return (
      <div className="App">
        <div className="wrapper">
          <Header />
          <TodoList />
        </div>
        <Footer />
      </div>
    );
  }


export default App;
