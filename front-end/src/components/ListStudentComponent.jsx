import React, { Component } from 'react';
import { Container, Table } from "reactstrap";
import StudentService from '../services/StudentService';

class ListStudentComponent extends Component {

    constructor(props){
        super(props)

        this.state = {
            students: []
        }
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
            <tr scope="row">
            <td className = "text-center">{Student.firstName}</td>
            <td className = "text-center">{Student.lastName}</td>
            <td className = "text-center">{Student.matriculationNumber}</td>
            <td className = "text-center">{Student.address}</td>
            </tr>
        );
        });

        return (
            
            <div>
                <h2 className = "text-center">Student Service</h2>
                <div className = "row">
                    <table className = "table table-striped table-bordered">
                        <thead>
                          <tr>
                            <th className = "text-center">First Name</th>
                            <th className = "text-center">Last Name</th>
                            <th className = "text-center">Mtr. Number</th>
                            <th className = "text-center">Address</th>
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