package com.cs.todolist.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cs.todolist.entities.User;
import com.cs.todolist.persistence.UserDAO;

@Service
public class EnregistrerUtilisateurService {

	@Autowired
	private UserDAO userDAO;
	
	
	public void enregistrerUser(User user){
		System.out.println("demande d'enregistrement d'un nouveau utilisateur");
		
		userDAO.enregistrerUser(user);
		
	}
	
}
