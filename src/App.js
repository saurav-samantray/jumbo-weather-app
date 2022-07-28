import React from 'react';
import {Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './Home/Home';
import Layout from './components/layout/Layout';

const page = 
<Routes>
  <Route exact path='/' element={< Home />}></Route>
</Routes>;

function App() {
  return (
      <div className="App">
        <Layout content={page} />        
      </div>
  );
}

export default App;
