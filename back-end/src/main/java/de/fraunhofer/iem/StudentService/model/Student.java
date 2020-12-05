package de.fraunhofer.iem.StudentService.model;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class Student {

    private String firstName;
    private String lastName;
    private Long matriculationNumber;
    private String Address;
    
    public Student() {
    	System.out.println("First name and Matriculation Number are important to initialize a Student!");
    	System.out.println("Accepted Formats:");
    	System.out.println("1. (first name, matriculation number)\n2.(first name, last name, matriculation number) and\n3.(first name, last name, matriculation number, address)");
    }
    
    public Student(String firstName, Long matriculationNumber) {
        this.firstName = firstName;
        this.matriculationNumber = matriculationNumber;
    }
    
    public Student(String firstName, String lastName, Long matriculationNumber) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.matriculationNumber = matriculationNumber;
    }
    
    public Student(String firstName, String lastName, Long matriculationNumber, String address) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.matriculationNumber = matriculationNumber;
        this.setAddress(address);
    }

	public String getFirstName() {
		return firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public Long getMatriculationNumber() {
		return matriculationNumber;
	}

	public String getAddress() {
		return Address;
	}

	public void setAddress(String address) {
		Address = address;
	}
}
