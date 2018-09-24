package com.app.MyHeroes.Pojo;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EntityListeners;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.hibernate.validator.constraints.NotBlank;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name="Hero")
@EntityListeners(AuditingEntityListener.class)
@JsonIgnoreProperties(value = {"createdAt", "updatedAt"}, allowGetters = true)
public class Hero {

private Integer id;
@NotBlank
private String name;
@NotBlank
private String power;

private int points;
private Date createdAt;
private Date updatedAt;

public Hero(){
}

Hero(String name, String power,int points){
	 this.name=name;
	 this.power=power;
	 this.points=points;
}

@Id
@GeneratedValue(strategy=GenerationType.IDENTITY)
public Integer getId() {
	return id;
}
public void setId(Integer id) {
	this.id = id;
}


@Column(unique=true,length=32)
public String getName() {
	return name;
}
public void setName(String name) {
	this.name = name;
}


public String getPower() {
	return power;
}
public void setPower(String power) {
	this.power = power;
}


@Column(length=2)
public int getPoints() {
	return points;
}
public void setPoints(int points) {
	this.points = points;
}

@Column(nullable = false, updatable = false)
@Temporal(TemporalType.TIMESTAMP)
@CreatedDate
public Date getCreatedAt() {
	return createdAt;
}
public void setCreatedAt(Date createdAt) {
	this.createdAt = createdAt;
}

@Column(nullable = false)
@Temporal(TemporalType.TIMESTAMP)
@LastModifiedDate
public Date getUpdatedAt() {
	return updatedAt;
}
public void setUpdatedAt(Date updatedAt) {
	this.updatedAt = updatedAt;
}


}
