package com.cs.todolist.persistence;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import javax.transaction.Transactional;

import org.springframework.stereotype.Repository;

import com.cs.todolist.entities.Statut;
import com.cs.todolist.entities.Task;
import com.cs.todolist.entities.User;

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

	@Transactional
	public List<Task> getTasks(User user) {
		Query query = entityManager.createNamedQuery("Task.getTasks");
		query.setParameter("user", user);

		if (!query.getResultList().isEmpty()) {
			List<Task> lt = query.getResultList();
			for (Task t : lt) {
				System.out.println(t.getId() + " ; " + t.getTitre());
			}
			return query.getResultList();

		} else {
			System.out.println("In TaskDAO: List Is Empty!");
			return null;
		}
	}

	@Transactional
	public List<Task> endTask(String taskId) {
		Task t = entityManager.find(Task.class, Integer.valueOf(taskId));
		t.setStatut(Statut.FINI);
		return getTasks(t.getUser());
	}

	@Transactional
	public List<Task> supprTask(String taskId) {
		Task t = entityManager.find(Task.class, Integer.valueOf(taskId));
		entityManager.remove(t);
		return getTasks(t.getUser());
	}
	@Transactional
	public List<Task> unendTask(String taskId) {
		Task t = entityManager.find(Task.class, Integer.valueOf(taskId));
		t.setStatut(Statut.EN_ATTENTE);
		return getTasks(t.getUser());
	}

}
