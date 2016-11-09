package com.cs.todolist.persistence;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
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

}
