package com.cs.todolist.persistence;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import javax.transaction.Transactional;

import org.springframework.stereotype.Repository;

import com.cs.todolist.entities.User;

@Repository
public class UserDAO {
	@PersistenceContext EntityManager entityManager;

	
	@Transactional
	public void enregistrerUser(User user) {
		System.out.println("enregistrement utilisateur");
		entityManager.persist(user);
	}


	public User login(String username, String password) {
		Query query= entityManager.createNamedQuery("User.login");
		query.setParameter("login",username);
		query.setParameter("mdp",password);
		
		System.out.println(query.getSingleResult());
		
		 if(query.getSingleResult()!=null){
			 
		return (User) query.getSingleResult();
		 }else{
			 return null;
		 }
	}

@Transactional
	public User signin(User user) {
	System.out.println("in UserDao signin");
		entityManager.persist(user);
		return user;
	}

@Transactional
	public Object TestUsername(String username) {
		Query query= entityManager.createNamedQuery("User.testUsername");
		query.setParameter("login",username);
		
		 if(!query.getResultList().isEmpty()){
			 System.out.println("In UserDAO: username already in use!");
		return (User) query.getSingleResult();
		
		 }else{
			 return null;
		 }
	}

}
