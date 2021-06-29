package com.dharshiny.onlinebloodbank.Model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="bloodbank")
public class User {
    @Id
    @Column(name="email")
    private String email;
    @Column(name="fullname")
    private String fullname;
    @Column(name="password")
    private String password;
    @Column(name="mobile")
    private String mobile;
    @Column(name="gender")
    private String gender;
    @Column(name="type")
    private String type;
    @Column(name="age")
    private String age;

    public User() {
    }

    public User(String fullname, String password, String email, String mobile, String gender, String type, String age) {
        this.fullname = fullname;
        this.password = password;
        this.email = email;
        this.mobile = mobile;
        this.gender = gender;
        this.type=type;
        this.age=age;
    }

    public String getAge() {
        return age;
    }
    public void setAge(String age) {
        this.age = age;
    }

    public String getGender() {
        return gender;
    }
    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getType() {
        return type;
    }
    public void setType(String type) {
        this.type = type;
    }

    public String getFullname() {
        return fullname;
    }
    public void setFullname(String fullname) {
        this.fullname = fullname;
    }

    public String getPassword() {
        return password;
    }
    public void setPassword(String password) {
        this.password = password;
    }

    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }

    public String getMobile() {
        return mobile;
    }
    public void setMobile(String mobile) {
        this.mobile = mobile;
    }
    
}
