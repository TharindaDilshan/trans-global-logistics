import React from 'react';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Homepage from './components/dashboard/Homepage'
import About from './components/dashboard/About'
import Services from './components/dashboard/Services'
import Contact from './components/dashboard/Contact'
import Footer from './components/layout/Footer'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/about' component={About}  />
          <Route path='/services' component={Services} />
          <Route path='/contact' component={Contact} />
        </Switch>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
