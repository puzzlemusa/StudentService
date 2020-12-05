package de.fraunhofer.iem.StudentService.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import de.fraunhofer.iem.StudentService.exception.ResourceNotFoundException;
import de.fraunhofer.iem.StudentService.model.Student;
import de.fraunhofer.iem.StudentService.service.StudentRecords;
import de.fraunhofer.iem.StudentService.service.StudentService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/")
public class StudentController {

	@Autowired
	private StudentRecords studentRecords;
	
    private final StudentService studentService;

    public StudentController(StudentService studentService) {
        this.studentService = studentService;
    }

    @GetMapping("students")
    public List<Student> getAllStudent(){
    	return studentRecords.findAll();
    }
    
 /*   public ResponseEntity<Collection<Student>> getStudents() {
        Collection<Student> students = this.studentService.getStudents();
        return new ResponseEntity<>(students, HttpStatus.OK);
    }
   */ 
    //Add Student REST API
    @PostMapping("students")
    public Student createStudent(@RequestBody Student student) {
    	return studentRecords.save(student);
    }
    
    //get Student by Matriculation Number (ID)
    @GetMapping("/students/{matriculationNumber}")
    public ResponseEntity<Student> getStudentByID(@PathVariable Long matriculationNumber) {
    	Student student = studentRecords.findById(matriculationNumber)
    			.orElseThrow(() -> new ResourceNotFoundException("No student with the matriculation number: "+ matriculationNumber));
		return ResponseEntity.ok(student);
    }
}
