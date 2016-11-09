package com.cs.todolist.controler;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cs.todolist.entities.User;

/**
 * @author Formation
 * @version 1.0
 * @created 02-nov.-2016 15:37:40
 */
@RestController
public class ConsulterHistoriqueControle {

	@RequestMapping("/todolist/maliste")
	public User consulterMaListe() {
		System.out.println("OK");
		
		return new User("POPO", "PEPE", "JOJO", "DODO");
	}

}// end ConsulterHistoriqueControle