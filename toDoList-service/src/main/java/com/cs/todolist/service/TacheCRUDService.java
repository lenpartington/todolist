package com.cs.todolist.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cs.todolist.entities.Task;
import com.cs.todolist.entities.User;
import com.cs.todolist.persistence.TaskDAO;
import com.cs.todolist.persistence.UserDAO;

@Service
public class TacheCRUDService {

	@Autowired
	private TaskDAO taskDAO;
	@Autowired
	private UserDAO userDAO;

	public void enregistrerTache(Task task) {
		System.out.println("demande d'enregistrment d'une tache");
		taskDAO.saveTask(task);

	}

	public void deleteTache(Task task) {
		taskDAO.delete(task);

	}

	@Transactional
	public List<Task> saveTask(String username, String password, String taskTitle) {
		User user = userDAO.login(username, password);
		Task task = new Task(taskTitle, "", user);
		taskDAO.saveTask(task);
		return taskDAO.getTasks(user);
	}

	@Transactional
	public List<Task> getTask(String username, String password) {
		User user = userDAO.login(username, password);
		return taskDAO.getTasks(user);
	}

	public List<Task> endTask(String taskId) {
		
		return taskDAO.endTask(taskId);
	}

	public List<Task> supprTask(String taskId) {
		// TODO Auto-generated method stub
		return taskDAO.supprTask(taskId);
	}

	public List<Task> unendTask(String taskId) {
		return taskDAO.unendTask(taskId);
	}
}
