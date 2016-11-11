package com.cs.todolist.controler;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.cs.todolist.entities.User;
import com.cs.todolist.service.UtilisateurCRUDService;

/**
 * @author Formation
 * @version 1.0
 * @created 02-nov.-2016 15:37:40
 */
@CrossOrigin
@RestController
public class UserConnexionController {
 @Autowired private UtilisateurCRUDService utilisateurCRUDService;
	
	@GetMapping("/maliste")
	public @ResponseBody User consulterMaListe() {
		System.out.println("OK");

		return new User("POPO", "PEPE", "JOJO", "DODO");
	}

	@RequestMapping(value = "/login", method = RequestMethod.POST/*, headers = { "Content-type=application/json" }*/)
	public @ResponseBody User login(String username, String password) {
		System.out.println(username +";"+password);
				
		return utilisateurCRUDService.login(username,password);// new JsonResponse("OK", "");
	}
	
	@RequestMapping(value = "/signin", method = RequestMethod.POST/*, headers = { "Content-type=application/json" }*/)
	public @ResponseBody User signin(String prenom, String nom, String username, String password) {
		System.out.println(prenom +";"+nom +";"+username +";"+password);
		
		
		return utilisateurCRUDService.signin(prenom,nom,username,password);// new JsonResponse("OK", "");
	}


}// end ConsulterHistoriqueControle