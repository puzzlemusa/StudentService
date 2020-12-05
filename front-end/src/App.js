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

/*import React, { Component } from "react";
import { Container, Table } from "reactstrap";


class App extends Component {

  constructor(props){
    super(props);
    this.state = {students: []};
  }

  componentDidMount(){
    
     fetch("/students", {
      headers: {
			  "Access-Control-Allow-Origin": "http://localhost:8080",
			  "Accept": "application/json",
			  "Content-Type": "application/json"
			}
     }).then(response =>
      response
        .json()
        .then(data => this.setState({students: data}))
    );
    const r = 4;
  }

  render(){
    const Students = this.state.students;

    if (Students == undefined) {
      return <p>Failed to load data.</p>;
    }
    const StudentList = Students.map(Student => {
      return (
        <tr scope="row">
          <td>{Student.firstName}</td>
          <td>{Student.lastName}</td>
          <td>{Student.matriculationNumber}</td>
          <td>{Student.address}</td>
        </tr>
      );
    });

    return (
      <div>
        <Container fluid>
        <Table>
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Mtr. Number</th>
          <th>Address</th>
        </tr>
      </thead>
      <tbody>{StudentList}</tbody>
    </Table>
        </Container>
      </div>
    );
  }
}

export default App;
*/