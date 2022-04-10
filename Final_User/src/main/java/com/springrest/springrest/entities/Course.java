package com.springrest.springrest.entities;

import java.io.Serializable;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;

@Entity
public class Course implements Serializable {
	
	
		@Id
		@GeneratedValue(strategy=GenerationType.IDENTITY)
		private long id;
		private String title;
		private String description;
		
		
		private long Course_id;
		
		public Course() {
			super();
			// TODO Auto-generated constructor stub
		}
		public Course(long id, String title, String description) {
			super();
			this.id = id;
			this.title = title;
			this.description = description;
		}
		public long getId() {
			return id;
		}
		public void setId(long id) {
			this.id = id;
		}
		public String getTitle() {
			return title;
		}
		public void setTitle(String title) {
			this.title = title;
		}
		public String getDescription() {
			return description;
		}
		public void setDescription(String description) {
			this.description = description;
		}
		
		public long getCourse_id() {
			return Course_id;
		}
		public void setCourse_id(long course_id) {
			Course_id = course_id;
		}
		@Override
		public String toString() {
			return "Course [id=" + id + ", title=" + title + ", description=" + description + "]";
		}
		
		
}
