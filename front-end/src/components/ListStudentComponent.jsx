import React, { Component } from 'react';
import { Container, Table } from "reactstrap";
import StudentService from '../services/StudentService';

class ListStudentComponent extends Component {

    constructor(props){
        super(props)

        this.state = {
            students: []
        }

        this.addStudent = this.addStudent.bind(this);
        this.editStudent = this.editStudent.bind(this);
    }

    addStudent(){
        this.props.history.push('./add-student');
    }

    editStudent(matriculationNumber){
        this.props.history.push(`./update-student/${matriculationNumber}`);
    }

    componentDidMount(){
        StudentService.getStudents().then((res) => {
            this.setState({students: res.data});
        }
        );
     }


    render() {

        const Students = this.state.students;

        if (Students == undefined) {
        return <p>Failed to load data.</p>;
        }
        const StudentList = Students.map(Student => {
        return (
            <tr scope="row" key = {Student.matriculationNumber}> 
            <td className = "text-center">{Student.firstName}</td>
            <td className = "text-center">{Student.lastName}</td>
            <td className = "text-center">{Student.matriculationNumber}</td>
            <td className = "text-center">{Student.address}</td>
            <td className = "text-center">
                <button className = "btn btn-primary" onClick= { () => this.editStudent(Student.matriculationNumber)}>
                    Update 
                </button>
            </td>
            </tr>
        );
        });

        return (
            
            <div>
                <h2 className = "text-center">Student Service</h2>

                <div className = "row">
                    <button className = "btn btn-primary" onClick={this.addStudent}> Add New Student </button>
                </div>

                <div className = "row">
                    <table className = "table table-striped table-bordered">
                        <thead>
                          <tr>
                            <th className = "text-center">First Name</th>
                            <th className = "text-center">Last Name</th>
                            <th className = "text-center">Mtr. Number</th>
                            <th className = "text-center">Address</th>
                            <th className = "text-center">Actions</th>
                          </tr>
                        </thead>

                         <tbody>
                            {
                                StudentList
                            }
                        </tbody> 

                    </table>
                </div>
            </div>
        );
    }
}

export default ListStudentComponent;