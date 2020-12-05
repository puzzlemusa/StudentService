import React, { Component } from 'react';
import { Container, Table } from "reactstrap";

class ListStudentComponent extends Component {

    constructor(props){
        super(props)

        this.state = {
            students: []
        }
    }

    render() {

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

                        {/* <tbody>
                            this.state.students.map(
                                student => {
                                <tr scope="row">
                                    <td>{student.firstName}</td>
                                    <td>{student.lastName}</td>
                                    <td>{student.matriculationNumber}</td>
                                    <td>{student.address}</td>
                                </tr>
                                }
                            )
                        </tbody> */}

                    </table>
                </div>
            </div>
        );
    }
}

export default ListStudentComponent;