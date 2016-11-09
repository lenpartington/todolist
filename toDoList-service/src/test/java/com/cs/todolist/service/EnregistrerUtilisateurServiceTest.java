package com.cs.todolist.service;
import static org.junit.Assert.*;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;

import org.junit.Test;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.cs.todolist.entities.User;

public class EnregistrerUtilisateurServiceTest {
	static ApplicationContext context = new ClassPathXmlApplicationContext("beans.xml");

	@Test
	public void testEnregistrerUser() {
		System.out.println("===========Starting test");
		System.out.println("===========Arrange");
		System.out.println("===========Get EntityManager");
		EntityManager entityManager = context.getBean(EntityManagerFactory.class).createEntityManager();
		
		System.out.println("===========New User mikoko");
		User user = new User("Cohen", "Miko", "mikoko", "sa");
		
		
		System.out.println("===========get bean EnregistrerUtilisateur");
		EnregistrerUtilisateurService enregistrerUtilisateurService = (EnregistrerUtilisateurService) context.getBean("enregistrerUtilisateurService");
		System.out.println("===========Act");
		System.out.println("===========enregistrement en cours");
		enregistrerUtilisateurService.enregistrerUser(user);
		
		System.out.println("===========Assert");
		assertTrue(user.getId()>0);
	}

}
