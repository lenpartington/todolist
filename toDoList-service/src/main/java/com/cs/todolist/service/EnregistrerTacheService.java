package com.cs.todolist.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cs.todolist.entities.Task;
import com.cs.todolist.persistence.TaskDAO;

@Service
public class EnregistrerTacheService {
	
@Autowired
private TaskDAO taskDAO;
	
	
	public void enregistrerTache(Task task){
		System.out.println("demande d'enregistrment d'une tache");
		taskDAO.saveTask(task);
		
		
	}
	
	public void deleteTache(Task task){
		taskDAO.delete(task);
		
	}
}
