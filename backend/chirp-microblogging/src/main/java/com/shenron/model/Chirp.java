package com.shenron.model;

import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import lombok.Data;

//This class is both for a Chirp and a reply

@Entity
@Data
public class Chirp {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	
	@ManyToOne
	private User user;
	
	private String content;
	private String image;
	private String video;
	
	
	@OneToMany(mappedBy = "chirp", cascade = CascadeType.ALL)
	private List<Like> likes = new ArrayList<>();
	
	@OneToMany
	private List<Chirp> replyChirps = new ArrayList<>();
	
	@ManyToMany
	private List<User> rechirpUser = new ArrayList<>();
	
	@ManyToOne
	private Chirp replyFor;
	
	private boolean isReply;
	private boolean isChirp;
	public Long getId() {
		return id;
	}
	public User getUser() {
		return user;
	}
	public boolean isReply() {
		return isReply;
	}
	public boolean isChirp() {
		return isChirp;
	}
	public String getContent() {
		return content;
	}
	public String getImage() {
		return image;
	}
	public String getVideo() {
		return video;
	}
	
	
	
}
