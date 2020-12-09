import React, { Component } from "react";
import { Container, Table } from "reactstrap";
import ReactDOM from 'react-dom';


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

class UpdateDialog extends React.Component {

	constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(e) {
		e.preventDefault();
		const updatedStudent = {};
		this.props.attributes.forEach(attribute => {
			updatedStudent[attribute] = ReactDOM.findDOMNode(this.refs[attribute]).value.trim();
		});
		this.props.onUpdate(this.props.student, updatedStudent);
		window.location = "#";
	}

	render() {
		const inputs = this.props.attributes.map(attribute =>
			<p key={this.props.student.entity[attribute]}>
				<input type="text" placeholder={attribute}
					   defaultValue={this.props.student.entity[attribute]}
					   ref={attribute} className="field"/>
			</p>
		);

		const dialogId = "updateStudent-" + this.props.student.entity._links.self.href;

		return (
			<div key={this.props.student.entity._links.self.href}>
				<a href={"#" + dialogId}>Update</a>
				<div id={dialogId} className="modalDialog">
					<div>
						<a href="#" title="Close" className="close">X</a>

						<h2>Update a student</h2>

						<form>
							{inputs}
							<button onClick={this.handleSubmit}>Update</button>
						</form>
					</div>
				</div>
			</div>
		)
	}

};

export default App;
