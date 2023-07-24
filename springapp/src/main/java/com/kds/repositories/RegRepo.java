package com.kds.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.kds.models.Register;
public interface RegRepo extends JpaRepository<Register,String>{
     Register findByEmail(String email);
}
