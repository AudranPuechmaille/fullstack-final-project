package com.example.front.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.front.entity.User;

public interface UserRepository extends JpaRepository<User, Long> {
}