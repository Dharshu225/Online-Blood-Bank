package com.dharshiny.onlinebloodbank.Controller;

import java.util.ArrayList;
import java.util.List;

import com.dharshiny.onlinebloodbank.Model.Blood;
import com.dharshiny.onlinebloodbank.Model.User;
import com.dharshiny.onlinebloodbank.Repository.BloodRepository;
import com.dharshiny.onlinebloodbank.Repository.UserRepository;
import com.dharshiny.onlinebloodbank.Service.InterfaceService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "https://8081-aedfdcadaeceebeeecafddadaaafdfbabacbdeb.examlyiopb.examly.io/")
@RestController
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private BloodRepository bloodRepository;

    @Autowired
    private InterfaceService interfaceService;

    @GetMapping("/login/{username}/{password}/{type}")
    public String login(@PathVariable String username, 
        @PathVariable String password, @PathVariable String type){

            String validLogin="";
            List<User> user=new ArrayList<>();
            userRepository.findAll().forEach(user::add);
            for(int i=0;i<user.size();i++){
                if(username.equals(user.get(i).getEmail()) && password.equals(user.get(i).getPassword())
                    && type.equals(user.get(i).getType()))
                    validLogin=user.get(i).getFullname();
            }
            return validLogin;
    } 

    @PostMapping("/createUser")
    public void createUser(@RequestBody User user){
        userRepository.save(user);
    }

    @GetMapping("/profile/{email}")
    public User profile(@PathVariable String email){
        User user=new User();
        userRepository.findAll().forEach((temp)->{
            if(email.equals(temp.getEmail())){
                user.setFullname(temp.getFullname());
                user.setEmail(email);
                user.setAge(temp.getAge());
                user.setGender(temp.getGender());
                user.setMobile(temp.getMobile());
            }
        });
        return user;
    }

    @PutMapping("/updateProfile")
    public void updateProfile(@RequestBody User user){
        userRepository.save(user);
    }

    @PostMapping("/addSample")
    public void addSample(@RequestBody Blood donar){
        bloodRepository.save(donar);
    }

    @GetMapping("/getAllDonars")
    public List<Blood> getAllDonars(){
        List<Blood> donars=new ArrayList<>();
        bloodRepository.findAll().forEach(donars::add);
        return donars;
    }

    @GetMapping("/donarDetails/{demail}")
    public Blood donarDetails(@PathVariable String demail){
        Blood donar=new Blood();
        bloodRepository.findAll().forEach((temp)->{
            if(demail.equals(temp.getEmail())){
                donar.setName(temp.getName());
                donar.setEmail(temp.getEmail());
                donar.setAge(temp.getAge());
                donar.setGender(temp.getGender());
                donar.setMobile(temp.getMobile());
                donar.setGroup(temp.getGroup());
                donar.setDate(temp.getDate());
                donar.setLocality(temp.getLocality());
                donar.setState(temp.getState());
                donar.setCountry(temp.getCountry());
            }
        });
        return donar;
    }

    @PutMapping("/updateDonar")
    public void updateDonar(@RequestBody Blood donar){
        bloodRepository.save(donar);
    }

    @DeleteMapping("/deleteDonar/{demail}")
    public void deleteDonar(@PathVariable String demail){
        bloodRepository.deleteById(demail);
    }

    @GetMapping("/getAllUsers/{type}")
    public List<User> getAllUsers(@PathVariable String type){
        List<User> user=new ArrayList<>();
        userRepository.findAll().forEach((temp)->{
            if(type.equals(temp.getType())){
                user.add(temp);
            }
        });
        return user;
    }

    @PostMapping("/deleteOldSamples")
    public void deleteOldSamples(){
        interfaceService.deleteOldSamples();
    }
}
