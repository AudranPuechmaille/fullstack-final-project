package com.example.front.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.front.entity.UserType;
import com.example.front.repository.UserTypeRepository;

@Service
public class UserTypeService {

    @Autowired
    private UserTypeRepository userTypeRepository;

    public List<UserType> getAllUserTypes() {
        return userTypeRepository.findAll();
    }

    public UserType saveUserType(UserType userType) {
        return userTypeRepository.save(userType);
    }

    public void deleteUserType(Long id) {
        userTypeRepository.deleteById(id);
    }
}