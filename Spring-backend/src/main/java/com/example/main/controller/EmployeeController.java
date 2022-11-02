package com.example.main.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.main.model.Employee;
import com.example.main.repository.EmployeeRepository;
@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v1/")//default
public class EmployeeController {
	
	@Autowired//to inject this repo by spring container
     private EmployeeRepository employeeRepository;
	
	//get all employees
	
	@GetMapping("/employees")
	public List<Employee> getAllEmployees(){
		return employeeRepository.findAll();
	}
     //Create Employee REST API
	@PostMapping("/employees")
	public Employee createEmployee(@RequestBody  Employee employee) {
		return employeeRepository.save(employee);
	}
}
