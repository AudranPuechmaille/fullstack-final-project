package com.example.front.controller;

import com.example.front.entity.UserType;
import com.example.front.service.UserTypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/user-types")
@CrossOrigin("*")
public class UserTypeController {

    @Autowired
    private UserTypeService userTypeService;

    @GetMapping
    public List<UserType> getAllUserTypes() {
        return userTypeService.getAllUserTypes();
    }

    @PostMapping
    public UserType createUserType(@RequestBody UserType userType) {
        return userTypeService.saveUserType(userType);
    }

    @DeleteMapping("/{id}")
    public void deleteUserType(@PathVariable Long id) {
        userTypeService.deleteUserType(id);
    }
}
