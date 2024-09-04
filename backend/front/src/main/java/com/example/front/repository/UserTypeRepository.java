package com.example.front.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.front.entity.UserType;

public interface UserTypeRepository extends JpaRepository<UserType, Long> {
}
