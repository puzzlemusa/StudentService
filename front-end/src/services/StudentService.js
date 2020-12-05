import axios from 'axios';

const STUDENT_API_URL = "http://localhost:8080/students";

class StudentService{
    getStudents(){
        return axios.get(STUDENT_API_URL);
    }
}

export default new StudentService()