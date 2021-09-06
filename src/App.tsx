import React from 'react';
import logo from './logo.svg';
import './App.css';
import Landingpage from './Components/landingpage/Landingpage';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';
// import FoundProductsPage from './Components/foundproductspage/FoundProductsPage';


function App() {
  return (
   <Router>
     <Switch>
          {/* <Route path='/products/:category' exact component={FoundProductsPage} /> */}
          <Route path='/' exact component={Landingpage} />
      
     </Switch>
   </Router>
  );
}

export default App;
