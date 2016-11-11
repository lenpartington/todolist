package com.cs.todolist.entities;

import java.util.Collection;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.NamedQuery;
import javax.persistence.NamedQueries;
import javax.persistence.Table;
import javax.persistence.Transient;

@Entity
@Table(catalog = "todolist")
@NamedQueries({
	  @NamedQuery(name="User.login",
	              query="SELECT e FROM User e Where e.login= :login AND e.mdp = :mdp"),
	  @NamedQuery(name="User.testUsername",
	              query="SELECT e FROM User e WHERE e.login= :login"),
	  /* @NamedQuery(name="Professor.findByName",
	              query="SELECT e FROM Professor e WHERE e.name = :name")*/
	})
public class User {

	private int id;
	private String nom;
	private String prenom;
	private String login;
	private String mdp;
	public Collection<Task> tasks;

	public User() {
		
	}
	
	public User(String nom, String prenom, String login, String mdp) {
		super();
		this.nom = nom;
		this.prenom = prenom;
		this.login = login;
		this.mdp = mdp;
		
	}

	@Id
	@GeneratedValue
	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getNom() {
		return nom;
	}

	public void setNom(String nom) {
		this.nom = nom;
	}

	public String getPrenom() {
		return prenom;
	}

	public void setPrenom(String prenom) {
		this.prenom = prenom;
	}

	public String getLogin() {
		return login;
	}

	public void setLogin(String login) {
		this.login = login;
	}

	public String getMdp() {
		return mdp;
	}

	public void setMdp(String mdp) {
		this.mdp = mdp;
	}

	@Transient
	public Collection<Task> getTasks() {
		return tasks;
	}

	public void setTasks(Collection<Task> tasks) {
		this.tasks = tasks;
	}

}
