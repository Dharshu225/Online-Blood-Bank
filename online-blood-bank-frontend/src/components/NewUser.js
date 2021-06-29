import React,{useState,useEffect} from 'react'
import './styling/NewUser.css'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useHistory } from 'react-router';
import DataService from '../service/DataService';

function NewUser() {
    let history= useHistory();

    const[name,setName]=useState("")
    const[email,setEmail]=useState("")
    const[gender,setGender]=useState("")
    const[mobile,setMobile]=useState("")
    const[password,setPassword]=useState("")
    const[cpassword,setCpassword]=useState("")
    const[age,setAge]=useState("")
    const type="user"

    useEffect(() => {
        document.title='New User Registration';
    }, [])

    function validateForm() {
        return name.length>0 && email.length>0 
                && gender!=="Choose..." && password.length>=6 && cpassword.length>=6 
                && password.length<=20 && cpassword.length<=20 &&password===cpassword
                && mobile.length>=10 && age.length>0;
    }
    function navigateLogin(){
        history.push("/");
    }
    function handleSubmit(){
        let user={
            fullname:name,
            email:email,
            gender:gender,
            mobile:mobile,
            password:password,
            type:type,
            age:age
        }
        if(DataService.createuser(user)){
            history.push({
                pathname: '/',
                state: { success:"Successfully Registered!"}
            });
        }
    }

    return (
        <div className='newUserBody'>
            <h1>New User Registration</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="fullname">
                    <Form.Label>Name</Form.Label>
                    <Form.Control autoFocus type="text"  value={name} 
                        onChange={(e)=>{setName(e.target.value)}}
                    />
                </Form.Group>
                <Form.Group controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="text"  value={email} 
                        onChange={(e)=>{setEmail(e.target.value)}}
                    />
                </Form.Group>
                <Form.Group controlId="age">
                    <Form.Label>Age</Form.Label>
                    <Form.Control type="text"  value={age} 
                        onChange={(e)=>{setAge(e.target.value)}}
                    />
                </Form.Group>
                <Form.Group controlId="gender">
                    <Form.Label>Gender</Form.Label>
                    <Form.Control as="select" value={gender} 
                            onChange={(e)=>{setGender(e.target.value)}}>
                        <option>Choose...</option>
                        <option>Male</option>
                        <option>Female</option>
                        <option>Other</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="mobile">
                    <Form.Label>Contact Number</Form.Label>
                    <Form.Control type="text"  value={mobile} 
                        onChange={(e)=>{setMobile(e.target.value)}}
                    />
                </Form.Group>
                <Form.Group controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" value={password} 
                        onChange={(e)=>{setPassword(e.target.value)}}
                    />
                </Form.Group>
                <Form.Group controlId="cpassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" value={cpassword} 
                        onChange={(e)=>{setCpassword(e.target.value)}}
                    />
                </Form.Group>
                <Button  type="submit" disabled={!validateForm()}>
                    Register
                </Button>
                <Button className="cancel"  onClick={navigateLogin}>Cancel</Button>
            </Form>
            <p><b>Note</b> : Password and Confirm Password must be same with 6 to 20 characters</p>
        </div>
    )
}

export default NewUser
