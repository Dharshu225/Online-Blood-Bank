import React,{useState,useEffect} from 'react'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useHistory,useLocation  } from 'react-router';
import DataService from '../service/DataService';

function UpdateProfile() {
    let history= useHistory();
    const location = useLocation();

    const[name,setName]=useState("")
    const[gender,setGender]=useState("")
    const[mobile,setMobile]=useState("")
    const[password,setPassword]=useState("")
    const[cpassword,setCpassword]=useState("")
    const[age,setAge]=useState("")
    const email=location.state.email

    useEffect(() => {
        document.title='Edit Profile';
    }, [])

    function validateForm() {
        return name.length>0 
                && gender!=="Choose..." && password.length>=6 && cpassword.length>=6 
                && password.length<=20 && cpassword.length<=20 &&password===cpassword
                && mobile.length>=10 && age.length>0;
    }
    function navigateBack(){
        history.push({
            pathname: '/profile',
            state: { uname: location.state.uname,email:location.state.email}
          });
    }
    const navigate=()=>{
        history.push({
            pathname: '/userHome',
            state: { uname: location.state.uname,email:location.state.email}
          });
    }
    function handleSubmit(){
        let user={
            email:email,
            fullname:name,
            gender:gender,
            mobile:mobile,
            password:password,
            age:age,
            type:"user"
        }
        if(DataService.updateProfile(user)){
            history.push({
                pathname: '/profile',
                state: { uname: name,email:location.state.email}
              });
        }
    }

    return (
        <div>
            <div className='userhomeheader'>
                <h1>Online Blood Bank</h1>
                <h4 style={{float:'left', color:'beige'}}>Welcome {location.state.uname}</h4>
                <a href='/'>Logout</a>
                <a onClick={navigate}>Home</a>
            </div>
            <div className='body'>
            <div className='newUserBody'>
            <h1>Edit Profile</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="fullname">
                    <Form.Label>Name</Form.Label>
                    <Form.Control autoFocus type="text"  value={name} 
                        onChange={(e)=>{setName(e.target.value)}}
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
                    Update
                </Button>
                <Button className="cancel"  onClick={navigateBack}>Cancel</Button>
            </Form>
            <p><b>Note</b> : Password and Confirm Password must be same with 6 to 20 characters</p>
        </div>
        </div>
        </div>
    )
}

export default UpdateProfile
