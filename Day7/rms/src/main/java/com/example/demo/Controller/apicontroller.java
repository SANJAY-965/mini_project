package com.example.demo.Controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Entity.register;
import com.example.demo.Service.service;

@RestController
public class apicontroller {
	
		@Autowired
		private service s;
		
		@GetMapping("/get")
		public List<register>getDetails()
		{
			return s.getAllDetails();
		}
		@PostMapping("/add")
		public register addDetails(@RequestBody  register sa)
		{
			return s.addDetails(sa);
		}
		@DeleteMapping("/delete/{id}")
		public void delete(@PathVariable int id)
		{
			 s.deleteDepartmentById(id);
		}
		
		@PutMapping("/update/{id}")
			public register update(@PathVariable int id,@RequestBody register e) {
				return s.update(id, e);
			}
		
}
