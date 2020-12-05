package de.fraunhofer.iem.StudentService.service;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import de.fraunhofer.iem.StudentService.model.Student;

@Repository
public interface StudentRecords extends JpaRepository< Student , Long> {
	
}
