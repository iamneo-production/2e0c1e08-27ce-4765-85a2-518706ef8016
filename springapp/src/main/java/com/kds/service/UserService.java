package com.kds.service;

import org.springframework.stereotype.Service;

import com.kds.repositories.RegRepo;
import com.kds.repositories.UserRepo;
import com.kds.models.Register;
import com.kds.models.User;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
@Service
public class UserService {
	
	@Autowired
	private UserRepo Repo;
	@Autowired
	private RegRepo rego;
	
    public boolean deleteStaff(String id) {
        if (Repo.findById(id).isPresent()) {
            Repo.deleteById(id);
            return true;
        } else {
            return false;
        }
    }
    public List<User> getAllStaff() {
        return Repo.findAll();
    }

	public String SignUpx(User  staffx) {
        String email = staffx.getEmail();
        User staffxAuth = rego.findByEmail(email);
        if (staffxAuth == null) {
            rego.save(staffx);
            return "Signup Successful !";
        } else {
            if (staffxAuth.getEmail().equals(email)) {
                return "Email ID Already Exists";
            } else {
                return "Invalid Email ID";
            }
        }
    } 
	public String Loginx(String email, String password) {
		User userx = Repo.findByEmail(email);
		if (userx == null) {
			return "Invalid Email !";
		} else {
			if (userx.getPassword().equals(password)) {
				return "Login Successful !";
			} else {
				return "Invalid Password";
			}
		}
	}
      

  
}