package com.shenron.model;

import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Embedded;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.OneToMany;
import lombok.Data;

@Entity
@Data
public class User {
	
	@Id
	@GeneratedValue(strategy= GenerationType.AUTO)
	private Long id;
	private String fullName;
	private String location;
	private String website;
	private String birthDate;
	private String email;
	private String password;
	private String mobile;
	private String image;
	private String backgroundImage;
	private String bio;
	private boolean req_user;//If requested user by (find by id) in database is the same json token's user
	private boolean login_with_google;
	
	
	//Chirps created by user, json ignore because this isn't required while fetching user's data
	//OneToMany because one user can have multiple chirps, mappedBy = user so that another table isn't created
	//CascadeType.ALL so that when user gets deleted all their chirps, likes get deleted
	
	@JsonIgnore
	@OneToMany(mappedBy = "user",cascade = CascadeType.ALL)
	private List<Chirp> chirp = new ArrayList<>(); 
	
	
	@OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
	private List<Like> likes = new ArrayList<>();
	
	@Embedded
	private Verification verification;
	
	public Verification getVerification() {
		return verification;
	}


	public void setVerification(Verification verification) {
		this.verification = verification;
	}


	@JsonIgnore
	@ManyToMany
	private List<User> followers = new ArrayList<>();
	
	@JsonIgnore
	@ManyToMany
	private List<User> following = new ArrayList<>();
	

	public boolean isLogin_with_google() {
		if (login_with_google) {
				return true;
		}
		return false;
	}
	
	


	public Long getId() {
		return id;
	}


	public void setId(Long id) {
		this.id = id;
	}


	public String getFullName() {
		return fullName;
	}


	public void setFullName(String fullName) {
		this.fullName = fullName;
	}


	public String getLocation() {
		return location;
	}


	public void setLocation(String location) {
		this.location = location;
	}


	public String getBirthDate() {
		return birthDate;
	}


	public void setBirthDate(String birthDate) {
		this.birthDate = birthDate;
	}


	public String getEmail() {
		return email;
	}


	public void setEmail(String email) {
		this.email = email;
	}


	public String getPassword() {
		return password;
	}


	public void setPassword(String password) {
		this.password = password;
	}


	public String getMobile() {
		return mobile;
	}


	public void setMobile(String mobile) {
		this.mobile = mobile;
	}


	public void setLogin_with_google(boolean login_with_google) {
		this.login_with_google = login_with_google;
	}


	public String getBackgroundImage() {
		return backgroundImage;
	}


	public String getImage() {
		return image;
	}


	public String getWebsite() {
		return website;
	}


	public String getBio() {
		return bio;
	}


	public boolean isReq_user() {
		return req_user;
	}


	
	
	
	
	
}
