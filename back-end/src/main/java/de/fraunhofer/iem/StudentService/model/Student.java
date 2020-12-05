package de.fraunhofer.iem.StudentService.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "students") 
public class Student {

	@Column(name = "first_name")
    private String firstName;
	
	@Column(name = "first_name")
    private String lastName;

	@Column(name = "first_name")
	private Long matriculationNumber;
	
	@Column(name = "first_name")
    private String Address;
    
    public Student() {
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

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public void setMatriculationNumber(Long matriculationNumber) {
		this.matriculationNumber = matriculationNumber;
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
