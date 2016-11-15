package com.cs.todolist.service;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cs.todolist.entities.User;
import com.cs.todolist.persistence.UserDAO;

@Service
public class UtilisateurCRUDService {

	@Autowired
	private UserDAO userDAO;
	
	
	public void enregistrerUser(User user){
		System.out.println("demande d'enregistrement d'un nouveau utilisateur");
		
		userDAO.enregistrerUser(user);
		
	}

@Transactional
	public User login(String username, String password) {
	if(!testUSername(username)){
		return null;
	}
		System.out.println("tentative de login d'un utilisateur");
		return userDAO.login(username, password);
		
	}

public User signin(String prenom, String nom, String username, String password) {
	if(!testUSername(username)){
		return null;
	}
	System.out.println("tentative de d'enregistrement d'un utilisateur");
	if (userDAO.TestUsername(username)!=null) {
		System.out.println("login deja utilisé");
		return null;
	}
	
	User user = new User(nom,prenom,username,password);
	return userDAO.signin(user);
}

private boolean testUSername(String username){
	if(username.isEmpty()){
	return false;}
	return true;
}
	
}
