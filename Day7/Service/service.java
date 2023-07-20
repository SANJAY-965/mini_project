package com.example.demo.Service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Entity.register;
import com.example.demo.Repository.repo;


@Service
public class service 
{
	@Autowired
	private repo r;
	
	public register addDetails(register s)
	{
		return r.saveAndFlush(s);
	}
	public List<register>getAllDetails ()
	{
		List<register>arr= new ArrayList<> () ;
		arr= r.findAll();
		return arr;
	}
	public void deleteDepartmentById(int id)
	{
		r.deleteById(id);
	}
	
	public register update(int id,register e) {
		return r.saveAndFlush(e);
	}
}
