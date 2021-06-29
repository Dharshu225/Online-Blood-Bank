package com.dharshiny.onlinebloodbank.Model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonFormat;

@Entity
@Table(name="blooddonar")
public class Blood {

    @Id
    @Column(name="email")
    private String email;
    @Column(name="name")
    private String name;
    @Column(name="bgroup")
    private String group;
    @Column(name="mobile")
    private String mobile;
    @Column(name="gender")
    private String gender;
    @Column(name="ddate")
    //@Temporal(TemporalType.DATE)
    @JsonFormat(pattern="dd-MM-yyyy")
    private String date;
    @Column(name="age")
    private String age;
    @Column(name="locality")
    private String locality;
    @Column(name="state")
    private String state;
    @Column(name="country")
    private String country;

    public Blood() {
    }

    public Blood(String email, String name, String group, String mobile, String gender, String date, String age,
            String locality, String state, String country) {
        this.email = email;
        this.name = name;
        this.group = group;
        this.mobile = mobile;
        this.gender = gender;
        this.date = date;
        this.age = age;
        this.locality = locality;
        this.state = state;
        this.country = country;
    }

    public String getState() {
        return state;
    }
    public void setState(String state) {
        this.state = state;
    }


    public String getCountry() {
        return country;
    }
    public void setCountry(String country) {
        this.country = country;
    }


    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }

    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }

    public String getGroup() {
        return group;
    }
    public void setGroup(String group) {
        this.group = group;
    }

    public String getMobile() {
        return mobile;
    }
    public void setMobile(String mobile) {
        this.mobile = mobile;
    }

    public String getGender() {
        return gender;
    }
    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getDate() {
        return date;
    }
    public void setDate(String date) {
        this.date = date;
    }

    public String getAge() {
        return age;
    }
    public void setAge(String age) {
        this.age = age;
    }

    public String getLocality() {
        return locality;
    }
    public void setLocality(String locality) {
        this.locality = locality;
    }
    
    
}
