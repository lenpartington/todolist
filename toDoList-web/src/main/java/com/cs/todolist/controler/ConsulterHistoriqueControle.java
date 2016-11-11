package com.cs.todolist.controler;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.cs.todolist.entities.User;

/**
 * @author Formation
 * @version 1.0
 * @created 02-nov.-2016 15:37:40
 */

@RestController
public class ConsulterHistoriqueControle {
	
	@CrossOrigin
	@GetMapping("/maliste")
	public @ResponseBody User consulterMaListe() {
		System.out.println("OK");
		
		return new User("POPO", "PEPE", "JOJO", "DODO");
	}

}// end ConsulterHistoriqueControle