import React from 'react';
import './App.css';
import News from './News/News';
import Sidenews from './News/Sidenews';

function App() {
  return (
    <div className="container-fluid">
      
      <div className="navbar-fixed">
        <nav>
            <div className="nav-wrapper indigo lighten-4">
              <a href="/" className="bran-logo-center">My Feed</a>
            </div>
        </nav>  
      </div>

      <div className="row">
        <div className="col s8">
          <News/>
        </div>
        <div className="col s4">
          <Sidenews/>
        </div>
      </div>
      
    </div>
  );
}

export default App;
