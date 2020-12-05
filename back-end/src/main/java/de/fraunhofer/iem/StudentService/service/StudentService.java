package de.fraunhofer.iem.StudentService.service;

import java.util.ArrayList;
import java.util.Collection;

import org.springframework.stereotype.Service;

import de.fraunhofer.iem.StudentService.model.Student;

@Service
public class StudentService {

    private final Collection<Student> students;

    public StudentService() {
    	students = new ArrayList<>();
    	students.add(new Student("Sam", "Wart", 111111L,""));
    	students.add(new Student("Bill", "Beggins", 222222L,""));
    	students.add(new Student("Stuward", "Gil", 333333L,""));
    	students.add(new Student("Prakhar", "",444444L,""));
    }

    
    public Collection<Student> getStudents() {
        return students;
    }
}
