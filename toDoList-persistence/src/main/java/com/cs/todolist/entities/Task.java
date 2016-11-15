package com.cs.todolist.entities;

import java.util.Collection;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.OneToMany;
import javax.persistence.OrderBy;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(catalog = "todolist")
@NamedQueries({ @NamedQuery(name = "Task.getTasks", query = "SELECT e FROM Task e Where e.user= :user Order By e.statut"),
		/*
		 * @NamedQuery(name="User.testUsername",
		 * query="SELECT e FROM User e WHERE e.login= :login"),
		 * 
		 * @NamedQuery(name="Professor.findByName",
		 * query="SELECT e FROM Professor e WHERE e.name = :name")
		 */
})
public class Task {

	private int id;
	private String Titre;
	private String Description;
	private Date debutDate;
	private Date finDate;
	private Statut statut;

	public User user;

	public Task() {

	}

	public Task(String titre, String description,
			/* Date debutDate, Date finDate, */ User user) {
		super();
		Titre = titre;
		Description = description;
		// this.debutDate = debutDate;
		// this.finDate = finDate;
		this.statut = Statut.EN_ATTENTE;
		this.user = user;
	}

	@Id
	@GeneratedValue
	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getTitre() {
		return Titre;
	}

	public void setTitre(String titre) {
		Titre = titre;
	}

	public String getDescription() {
		return Description;
	}

	public void setDescription(String description) {
		Description = description;
	}

	@Temporal(TemporalType.DATE)
	@Column(name = "date_debut")
	public Date getDebutDate() {
		return debutDate;
	}

	public void setDebutDate(Date debutDate) {
		this.debutDate = debutDate;
	}

	@Temporal(TemporalType.DATE)
	@Column(name = "date_fin")
	public Date getFinDate() {
		return finDate;
	}

	public void setFinDate(Date finDate) {
		this.finDate = finDate;
	}

	@Enumerated(EnumType.STRING)
	public Statut getStatut() {
		return statut;
	}

	public void setStatut(Statut statut) {
		this.statut = statut;
	}

	@JsonIgnore
	@ManyToOne
	@JoinColumn(name = "id_user")
	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

}
