import React,{useState,useEffect} from 'react'
import { useHistory,useLocation } from "react-router-dom";
import DataService from '../service/DataService';
//import date from 'date-and-time'

function AdminHome() {
    const location = useLocation();
    let history= useHistory();

    const[donars,setDonars]=useState([])
    useEffect(() => {
        /*DataService.bloodDonar().then(res=>setDonars(res.data))*/
        DataService.bloodDonar().then(res=>{setDonars(res)})
        document.title='Admin Home';
    }, [])

    const refreshonce=()=>{
        window.onload = function() {
            if(!window.location.hash) {
                window.location = window.location + '#loaded';
                window.location.reload();
                console.log("Hello")
            }
        }
    }

    const navigate=()=>{
        history.push({
            pathname: '/adminProfile',
            state: { uname: location.state.uname, email:location.state.email}
          });
    }

    function donardetails(demail){
        history.push({
            pathname:'/donarDetails',
            state:{uname:location.state.uname,demail:demail,type:'admin',email:location.state.email}
        });
    }

    const addSample=()=>{
        history.push({
            pathname: '/addSample',
            state: { uname: location.state.uname, email:location.state.email}
          });
    }
    const userManagement=()=>{
        history.push({
            pathname: '/userManagement',
            state: { uname: location.state.uname, email:location.state.email}
          });
    }
    function editDonar(demail,ddate){
        history.push({
            pathname: '/editDonar',
            state: { uname: location.state.uname, email:location.state.email,demail:demail,ddate:ddate}
          });
    }
    function deleteDonar(demail){
        DataService.deleteDonar(demail)
        window.location.reload();
    }

    return (
        <div onLoad={refreshonce}>
            <div className='userhomeheader'>
                <h1>Online Blood Bank</h1>
                <h4 style={{float:'left', color:'beige'}}>Welcome {location.state.uname}</h4>
                <a href="/">Logout</a>
                <a onClick={navigate}>Profile</a>
                <a onClick={userManagement}>Users</a>
            </div>
            <div className='body'>
                <button className='addSample' onClick={addSample} style={{float:'right'}}>Add Blood Details</button>
                <h3 style={{marginTop:'10px',marginLeft:'145px'}}>List of Donars</h3>
            </div>
            {donars.map(
                donar => 
                    <div className='donar' key = {donar.email}>
                        <tr>
                            <td> <button className='donardetails' onClick={()=>donardetails(donar.email)}>{donar.name}</button></td>
                            <td></td>
                            <td></td>
                            <td><td><button className='link' onClick={()=>editDonar(donar.email,donar.date)}>
                                Edit</button></td>
                                <td><button className='link' onClick={()=>deleteDonar(donar.email)}>
                                Delete</button></td></td>
                        </tr>
                        <tr>
                            <td><b>Age : </b>{donar.age}</td>
                            <td><b>Blood Group : </b>{donar.group}</td>
                            <td><b>Donated Date : </b>{donar.date.split("-")[2]+"-"+
                                                        donar.date.split("-")[1]+"-"+
                                                        donar.date.split("-")[0]}</td>
                        </tr>
                    </div>
                )
            }
        </div>
    )
}

export default AdminHome
