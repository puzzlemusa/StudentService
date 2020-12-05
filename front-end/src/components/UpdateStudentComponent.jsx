import React, { Component } from 'react';
import StudentService from '../services/StudentService';

class UpdateStudentComponent extends Component {
    
    constructor(props) {
        super(props);
        
        this.state = {
            firstName : '',
            lastName : '',
            matriculationNumber: this.props.match.params.matriculationNumber,
            address: ''
        }

        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.changeAddressHandler = this.changeAddressHandler.bind(this);
        this.changeMatriculationNumberHandler = this.changeMatriculationNumberHandler.bind(this);
        this.updateStudent = this.updateStudent.bind(this);
    }
    
    componentDidMount(){
        StudentService.getStudentByID(this.state.matriculationNumber).then(res => {
            let student = res.data;
            this.setState({firstName: student.firstName , 
                           lastName: student.lastName,
                           matriculationNumber: student.matriculationNumber,
                           address: student.address});
        });
    }

    updateStudent= (e) =>{
        e.preventDefault();

        let student = {firstName: this.state.firstName, lastName: this.state.lastName, matriculationNumber: this.state.matriculationNumber, address: this.state.address};
        console.log('student => ' + JSON.stringify(student));

        StudentService.updateStudent(student, this.state.matriculationNumber).then(res =>{
            this.props.history.push('../students');
        });
    }
    changeFirstNameHandler= (event) => {
        this.setState({firstName: event.target.value});
    }
    
    changeLastNameHandler= (event) => {
        this.setState({lastName: event.target.value});
    }

    changeAddressHandler= (event) => {
        this.setState({address: event.target.value});
    }

    changeMatriculationNumberHandler= (event) => {
        this.setState({matriculationNumber: event.target.value});
    }

    cancel(){
        this.props.history.push('../students');
    }
     
    render() {
        return (
            <div>
                <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h3 className = "text-center">
                                    Update Student
                                </h3>

                                <div className = "card-body">
                                    <form>
                                        <div className="form-group">
                                            <label>
                                                First Name: 
                                            </label>
                                            <input placeholder = "First Name" name = "firstName" 
                                            className = "form-control" value = {this.state.firstName}
                                            onChange = {this.changeFirstNameHandler}/>
                                        </div>

                                        <div className = "form-group">     
                                            <label>
                                                Last Name: 
                                            </label>
                                            <input placeholder = "Last Name" name = "lastName" 
                                            className = "form-control" value = {this.state.lastName}
                                            onChange = {this.changeLastNameHandler}/>
                                        </div>    
                                            
                                        <div className = "form-group">
                                            <label>
                                                Matriculation Number: 
                                            </label>
                                            <input placeholder = "Matriculation Number" name = "matriculationNumber" 
                                            className = "form-control" value = {this.state.matriculationNumber}
                                            onChange = {this.changeMatriculationNumberHandler}/>
                                        </div>

                                        <div className = "form-group">
                                            <label>
                                                Address: 
                                            </label>
                                            <input placeholder = "Address" name = "address" 
                                            className = "form-control" value = {this.state.address}
                                            onChange = {this.changeAddressHandler}/>
                                        </div>    
                                        
                                        <button className = "btn btn-success" onClick = {this.updateStudent}>Update</button>
                                        <button className = "btn btn-danger" onClick = {this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>

                            </div>
                        </div>
                </div>
            </div>
        );
    }
}

export default UpdateStudentComponent;