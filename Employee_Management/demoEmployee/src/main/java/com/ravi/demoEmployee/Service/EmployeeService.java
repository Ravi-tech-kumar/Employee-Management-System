package com.ravi.demoEmployee.Service;

import com.ravi.demoEmployee.Employee;
import com.ravi.demoEmployee.Repo.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;
import java.util.Optional;
@CrossOrigin("*")
@Service
public class EmployeeService {
    @Autowired
    private EmployeeRepository employeeRepository;

    public Employee savEmployee(Employee employee){
        return employeeRepository.save(employee);
    }
    public List<Employee> getEmployee(){
        return employeeRepository.findAll();
    }
    public Optional<Employee> getEmployeeById(Long id) {
        return employeeRepository.findById(id);
    }

    public Employee updateEmployee(Long id, Employee updatedemployee){
        return employeeRepository.findById(id).map(employee -> {
            employee.setName(updatedemployee.getName());
            employee.setEmail(updatedemployee.getEmail());
            employee.setDepartment(updatedemployee.getDepartment());
            employee.setPhone(updatedemployee.getPhone());
            return employeeRepository.save(employee);
        }).orElseThrow(()-> new RuntimeException("Employee not found"));
    }
 public  void deleteEmployee(Long id){
      employeeRepository.deleteById(id);
 }



}
