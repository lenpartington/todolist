package com.cs.todolist.persistence;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;

import org.springframework.stereotype.Repository;

import com.cs.todolist.entities.Task;

@Repository
public class TaskDAO {
	@PersistenceContext
	EntityManager entityManager;

	@Transactional
	public void saveTask(Task task) {
		System.out.println("enregistrement d'une tache");
		entityManager.persist(task);

	}
@Transactional
	public void delete(Task task) {
		entityManager.remove(task);
		
	}

}
