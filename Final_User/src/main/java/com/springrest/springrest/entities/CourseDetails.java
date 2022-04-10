package com.springrest.springrest.entities;

import java.io.Serializable;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

@Entity
public class CourseDetails implements Serializable {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private long courseDetailid;
	private String startdate;
	private String enddate;
	private String batch;
	private String duration;
	private String timing;
	private double fees;
	@OneToOne(fetch = FetchType.EAGER)
	@JoinColumn( name = "Course_id", referencedColumnName = "id")
	private Course id;
	public long getCourseDetailid() {
		return courseDetailid;
	}
	public void setCourseDetailid(long courseDetailid) {
		this.courseDetailid = courseDetailid;
	}
	public String getStartdate() {
		return startdate;
	}
	public void setStartdate(String startdate) {
		this.startdate = startdate;
	}
	public String getEnddate() {
		return enddate;
	}
	public void setEnddate(String enddate) {
		this.enddate = enddate;
	}
	public String getBatch() {
		return batch;
	}
	public void setBatch(String batch) {
		this.batch = batch;
	}
	public String getDuration() {
		return duration;
	}
	public void setDuration(String duration) {
		this.duration = duration;
	}
	public String getTiming() {
		return timing;
	}
	public void setTiming(String timing) {
		this.timing = timing;
	}
	public double getFees() {
		return fees;
	}
	public void setFees(double fees) {
		this.fees = fees;
	}
	public Course getId() {
		return id;
	}
	public void setId(Course id) {
		this.id = id;
	}
	public CourseDetails(long courseDetailid, String startdate, String enddate, String batch, String duration,
			String timing, double fees, Course id) {
		super();
		this.courseDetailid = courseDetailid;
		this.startdate = startdate;
		this.enddate = enddate;
		this.batch = batch;
		this.duration = duration;
		this.timing = timing;
		this.fees = fees;
		this.id = id;
	}
	public CourseDetails() {
		super();
		// TODO Auto-generated constructor stub
	}
	

	

}
