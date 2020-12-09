package de.fraunhofer.iem.StudentService.service;

import de.fraunhofer.iem.StudentService.model.Student;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Collection;

@Service
public class StudentService {

    private final Collection<Student> students;

    public StudentService() {
        students = new ArrayList<>() {{
            add(new Student("Sam", "Wart", 111111L, "21 Schiller") {
            });
            add(new Student("Bill", "Beggins", 222222L,"22 Schiller") {
            });
            add(new Student("Stuward", "Gil", 333333L,"23 Schiller") {
            });
        }};
    }

    public Collection<Student> getStudents() {
        return students;
    }
}
