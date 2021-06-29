import React, { useState,useEffect} from 'react'
import './styling/Login.css';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useHistory } from 'react-router';
import DataService from '../service/DataService';

function Login(){
    let history= useHistory();

    const [username,setUsername]=useState("")
    const [password,setPassword]=useState("")
    const [ausername,setAusername]=useState("")
    const [apassword,setApassword]=useState("")
    const [valid,setValid]=useState();
    const [avalid,setAvalid]=useState();
    const [show,setShow]=useState(false);
    const [ashow,setAshow]=useState(false);
    const atype="admin";
    const type="user";

    useEffect(() => {
        document.title='Login';
    }, [])

    function validateForm() {
        return username.length>0 && password.length>0;
    }
    function avalidateForm(){
        return ausername.length>0 && apassword.length>0;
    }

    function handleSubmit(event){
        event.preventDefault();
        DataService.deleteOldSamples();
        DataService.login(username,password,type).then((res)=> setValid(res))
    }
    function ahandleSubmit(event){
        event.preventDefault();
        DataService.deleteOldSamples();
        DataService.login(ausername,apassword,atype).then((res)=> setAvalid(res))
    }

    function showPassword(){
        setShow(!show);
    }
    function ashowPassword(){
        setAshow(!ashow);
    }

    function newUserNavigate(){
        history.push("/newUser");
    }

    const navigate=()=>{
        history.push({
            pathname: '/userHome',
            state: { uname: valid ,email:username}
          });
    }
    const anavigate=()=>{
        history.push({
            pathname: '/adminHome',
            state: { uname: avalid , email:ausername}
          });
    }

        return (
            <div>
                <h1>Online Blood Bank</h1>
                <div className='header'>
                    <h4>Login</h4>
                    {(valid || valid==="" || avalid || avalid==="") && <p>Invalid Username or Password!</p>}
                </div>
                <div className='loginbody'>   
                <div className='user_container'>
                    <h4>User</h4><br></br>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="username">
                            <Form.Label>Email</Form.Label>
                            <Form.Control autoFocus type="text"  value={username} 
                                onChange={(e)=>{setUsername(e.target.value); setValid(false);}}
                            />
                        </Form.Group>
                        <Form.Group controlId="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type={show ? 'text' : "password"} value={password} 
                                onChange={(e)=>{setPassword(e.target.value)}}
                            />
                        </Form.Group>
                        <Form.Group controlId="checkbox">
                            <Form.Check type="checkbox" label="Show Password" onClick={showPassword}/>
                        </Form.Group>
                        <Button  type="submit" disabled={!validateForm()}>
                            Login
                        </Button>
                        <Button className="newUser" onClick={newUserNavigate}>New User</Button>
                    </Form>
                    {(() => {
                        if (valid) {
                            return (
                              <div>{navigate()}</div>
                            )
                          }
                    })()}
                </div>

                <div className="vl"></div>

                <div className='admin_container'>
                    <h4>Admin</h4><br></br>
                    <Form onSubmit={ahandleSubmit}>
                        <Form.Group controlId="ausername">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="text"  value={ausername} 
                                onChange={(e)=>{setAusername(e.target.value); setAvalid(false);}}
                            />
                        </Form.Group>
                        <Form.Group controlId="apassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type={show ? 'text' : "password"} value={apassword} 
                                onChange={(e)=>{setApassword(e.target.value)}}
                            />
                        </Form.Group>
                        <Form.Group controlId="acheckbox">
                            <Form.Check type="checkbox" label="Show Password" onClick={ashowPassword}/>
                        </Form.Group>
                        <Button  type="submit" disabled={!avalidateForm()}>
                            Login
                        </Button>
                    </Form>
                    {(() => {
                        if (avalid) {
                            return (
                              <div>{anavigate()}</div>
                            )
                          }
                    })()}
                </div>
            </div>
            </div>
        )
}

export default Login;