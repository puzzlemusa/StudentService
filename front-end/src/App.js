import React from 'react';
import logo from './logo.svg';
import './App.css';
import ListStudentComponent from './components/ListStudentComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import CreateStudentComponent from './components/CreateStudentComponent';
import UpdateStudentComponent from './components/UpdateStudentComponent';


function App(){
  return(
    <div>
      <Router>
        <HeaderComponent />
          <div className = "container">
            <Switch>  
              <Route path ="/" exact component = {ListStudentComponent}></Route>
              <Route path ="/students" component = {ListStudentComponent}></Route>
              <Route path ="/add-student" component = {CreateStudentComponent}></Route>
              <Route path ="/update-student/:matriculationNumber" component = {UpdateStudentComponent}></Route>
            </Switch>
          </div>
        <FooterComponent />
      </Router>
    </div>
    
  )
}

export default App;