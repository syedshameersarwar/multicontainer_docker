import React from "react";
import logo from "./logo.svg";
import Fib from "./fib";
import OtherPage from "./OtherPage";
import "./App.css";
import { BrowserRouter, Link, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <Link to='/'>Home</Link>
          <Link to='/otherpage'>Other page</Link>
        </header>

        <div>
          <Route exact path='/' component={Fib} />
          <Route path='/otherpage' component={OtherPage} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
