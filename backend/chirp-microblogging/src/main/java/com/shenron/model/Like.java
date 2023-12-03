package com.shenron.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Data
@Table(name="likes")
public class Like {
	
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;

	@ManyToOne
	private User user;
	
	@ManyToOne
	private Chirp chirp;

	public Long getId() {
		return id;
	}

	public User getUser() {
		return user;
	}

	public Chirp getChirp() {
		return chirp;
	}
	
	
	
}
