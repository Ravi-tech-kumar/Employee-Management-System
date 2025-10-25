package com.ravi.demoEmployee.Repo;

import com.ravi.demoEmployee.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


public interface EmployeeRepository extends JpaRepository<Employee,Long>  {

}
