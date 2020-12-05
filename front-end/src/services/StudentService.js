import axios from 'axios';

const STUDENT_API_URL = "http://localhost:8080/students";

class StudentService{
    getStudents(){
        return axios.get(STUDENT_API_URL);
    }

    createStudent(student){
        return axios.post(STUDENT_API_URL, student);
    }

    getStudentByID(matriculationNumber){
        return axios.get(STUDENT_API_URL + '/' + matriculationNumber);
    }

    updateStudent(student, matriculationNumber){
        return axios.put(STUDENT_API_URL + '/' + matriculationNumber,student);
    }
}

export default new StudentService()