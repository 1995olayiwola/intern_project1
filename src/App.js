
import './App.css';
import React from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import MyErrorBoundary from './MyErrorBoundary';
import { Suspense } from 'react';
//import Loading from './Loading';
const Profile = React.lazy(()=>import('./component/Profile'));
const Contact = React.lazy(()=>import('./component/Contact'));
function App() {
  return (
    
      
    <MyErrorBoundary>
      <Suspense>
      
<Router>
  <Switch>
    <Route component={Profile} path="/" exact/>
    <Route component={Contact} path="/contact" exact/>
  </Switch>
</Router>

</Suspense>
</MyErrorBoundary>

  );
}

export default App;
