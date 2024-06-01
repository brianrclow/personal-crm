package com.brianrclow.personalcrm.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import com.brianrclow.personalcrm.model.User;

public interface UserRepo extends JpaRepository<User, Long> {

    User findUserById(Long id);
}
