package com.cs.todolist.service;

import static org.junit.Assert.*;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;

import org.junit.Test;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.cs.todolist.entities.Task;
import com.cs.todolist.entities.User;

public class TacheCRUDServiceTest {
	static ApplicationContext context = new ClassPathXmlApplicationContext("beans.xml");

	@Test
	public void testEnregistrerTache() {
		System.out.println("========Arrange");
		EntityManager entityManager = context.getBean(EntityManagerFactory.class).createEntityManager();
		User user = entityManager.find(User.class, 1);
		Task task = new Task("Acheter Pain", "Aller a auchan pour acheter du pain",  user);
		TacheCRUDService enregistrerTacheService = (TacheCRUDService) context
				.getBean("enregistrerTacheService");

		System.out.println("========Act");
		enregistrerTacheService.enregistrerTache(task);

		System.out.println("========Assert");
		assertTrue(task.getUser().getId() == 1);
	}

}
