import React,{useState,useEffect} from 'react'
import './styling/Profile.css';
import { useHistory,useLocation } from "react-router-dom";
import DataService from '../service/DataService';

function Profile() {
    const location = useLocation();
    let history= useHistory();

    const[name,setName]=useState("");
    const[age,setAge]=useState("");
    const[gender,setGender]=useState("");
    const[mobile,setMobile]=useState("");
    const[email,setEmail]=useState("");

    useEffect(() => {
        document.title='Profile';
        DataService.profile(location.state.email).then(res=>{
            setName(res.fullname)
            setAge(res.age)
            setMobile(res.mobile)
            setEmail(res.email)
            setGender(res.gender)
        })
        window.onload = function() {
            if(!window.location.hash) {
                window.location = window.location + '#loaded';
                window.location.reload();
            }
        }
    }, [])

    function navigateBack(){
        history.push({
            pathname: '/userHome',
            state: { uname: location.state.uname,email:location.state.email}
          });
    }
    function clickHandle(){
        history.push({
            pathname: '/updateProfile',
            state: { uname: location.state.uname,email:email}
          });
    }

    return (
        <div>
            <div className='userhomeheader'>
                <h1>Online Blood Bank</h1>
                <h4 style={{float:'left', color:'beige'}}>Welcome {location.state.uname}</h4>
                <a href='/'>Logout</a>
            </div>
            <div className='body'>
                <div className="profile">
                    <h4>Profile</h4>
                    <table className="pcontainer">
                        <tr>
                            <th>Name</th>
                            <td>: {name}</td>
                        </tr>
                        <tr>
                            <th>Email</th>
                            <td>: {email}</td>
                        </tr>
                        <tr>
                            <th>Age</th>
                            <td>: {age}</td>
                        </tr>
                        <tr>
                            <th>Gender</th>
                            <td>: {gender}</td>
                        </tr>
                        <tr>
                            <th>Mobile</th>
                            <td>: {mobile}</td>
                        </tr>
                    </table>
                    <button className="back"  onClick={navigateBack}>Back</button>
                    <button className="updateButton" onClick={clickHandle}>Edit</button>
                </div>
            </div>
        </div>
    )
}

export default Profile
