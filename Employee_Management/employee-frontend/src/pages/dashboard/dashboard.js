import { useEffect, useState } from "react";
//import { Button, Container } from "react-bootstrap";
import { Button, Container, Row, Col, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
const Dashboard=() =>
{
   const [employees, setEmployees] = useState([]);
const navigate =useNavigate();

    useEffect( ()=>{
        const fetchEmployees =async () =>{
            try{
                const response=await fetch("http://localhost:8080/api/employees");
                const data= await response.json();

                setEmployees(data);

            }catch(error){
                console.error("Error fetching employee ",error.message);
            }
        }
        fetchEmployees();
    },[]);

        const handleDelete =async (employeeId)=>{
            try{
                const responce =await fetch(`http://localhost:8080/api/employees/${employeeId}`,{
                    method: "DELETE",
                });
                if(responce.ok){
                    setEmployees((prevEmployees)=>
                    prevEmployees.filter((employee)=>employees.id!==employeeId))
                }
                console.log(`Employee with id ${employeeId}delete sucessfuly`);
            }catch (error){
                console.error("error deleting employee",error.message);
            }
        }

        const handleUpdate= (employeeId)=>{
                navigate(`/employee/${employeeId}`);
        }
    return (
        <>
        <Container className="mt-5"> 
            <Row>
                <Col>
                <h1 className="text-center">
                    Employees
                </h1>

                <Table striped bordered hover responsive>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>email</th>
                            <th>phone</th>
                            <th>department</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                        <tbody>{employees.map((employees)=>(

                            <tr key={employees.id}>
                                <td>{employees.name}</td>
                                <td>{employees.email}</td>
                                <td>{employees.phone}</td>
                                <td>{employees.department}</td>
                                <td>
                                    <Button variant="outline-secondary" onClick={()=>handleUpdate(employees.id)} >UPdate</Button>{"  "}
                                    <Button variant="outline-danger" onClick={()=>handleDelete(employees.id)}> Delete</Button>
                                </td>
                            </tr>
                        ))}</tbody>
                </Table>
                </Col>

                </Row>
        </Container>
        </>
    )
} 

export default Dashboard;