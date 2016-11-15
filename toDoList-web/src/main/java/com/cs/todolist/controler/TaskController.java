package com.cs.todolist.controler;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.cs.todolist.entities.Task;
import com.cs.todolist.entities.User;
import com.cs.todolist.service.TacheCRUDService;
import com.cs.todolist.service.UtilisateurCRUDService;

/**
 * @author Formation
 * @version 1.0
 * @created 02-nov.-2016 15:37:40
 */
@CrossOrigin
@RestController
public class TaskController {
 @Autowired private UtilisateurCRUDService utilisateurCRUDService;
 @Autowired private TacheCRUDService taskCRUDService;
	
	@RequestMapping(value="/newTask", method = RequestMethod.POST)
	public @ResponseBody List<Task> saveTask(String username, String password, String task) {
		System.out.println(username+";"+task);

		return taskCRUDService.saveTask(username,password,task);
	}
	
	@RequestMapping(value="/getTasks", method = RequestMethod.POST)
	public @ResponseBody List<Task> getTasks(String username, String password) {
		

		return taskCRUDService.getTask(username,password);
	}
	@RequestMapping(value="/endTask", method = RequestMethod.POST)
	public @ResponseBody List<Task> endTask(String taskId) {
		

		return taskCRUDService.endTask(taskId);
	}
	
	@RequestMapping(value="/unendTask", method = RequestMethod.POST)
	public @ResponseBody List<Task> unendTask(String taskId) {
		

		return taskCRUDService.unendTask(taskId);
	}
	@RequestMapping(value="/supprTask", method = RequestMethod.POST)
	public @ResponseBody List<Task> supprTask(String taskId) {
		
		return taskCRUDService.supprTask(taskId);
	}

/*
	@RequestMapping(value = "/login", method = RequestMethod.POST//, headers = { "Content-type=application/json" })
	public @ResponseBody User login(String username, String password) {
		System.out.println(username +";"+password);
				
		return utilisateurCRUDService.login(username,password);// new JsonResponse("OK", "");
	}
	
	@RequestMapping(value = "/signin", method = RequestMethod.POST//, headers = { "Content-type=application/json" })
	public @ResponseBody User signin(String prenom, String nom, String username, String password) {
		System.out.println(prenom +";"+nom +";"+username +";"+password);
		
		
		return utilisateurCRUDService.signin(prenom,nom,username,password);// new JsonResponse("OK", "");
	}
*/

}// end ConsulterHistoriqueControle