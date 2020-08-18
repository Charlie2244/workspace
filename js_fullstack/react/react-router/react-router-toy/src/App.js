import React from 'react';
import './App.css';
import Link from './Link'
import Route from './Route'
import {BrowserRouter} from './BrowserRouter'

function User() {
  return 'User'
}
function About() {
  return 'About'
}
function Home() {
  return 'Home'
}

function App() {
 
  return (
    <BrowserRouter>
    <div className="App">
     <li><Link to='/user'>user</Link></li>
     <li><Link to='/about'>about</Link></li>

     <Route path='/user' component={User} />
     <Route path='/about' component={About} />
     <Route path='/' component={Home} />
    </div>
    </BrowserRouter>
  );
}

export default App;
