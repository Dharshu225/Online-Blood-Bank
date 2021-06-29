import React,{useState,useEffect} from 'react';
import './styling/UserHome.css';
import { useHistory,useLocation } from "react-router-dom";
import DataService from '../service/DataService';

function UserHome() {
    const location = useLocation();
    let history= useHistory();

    const[donars,setDonars]=useState([])
    useEffect(() => {
        document.title='User Home';
        DataService.bloodDonar().then(res=>setDonars(res))
        window.onload = function() {
            if(!window.location.hash) {
                window.location = window.location + '#loaded';
                window.location.reload();
            }
        }
    }, [])

    const navigate=()=>{
        history.push({
            pathname: '/profile',
            state: { uname: location.state.uname ,email:location.state.email}
          });
    }

    function donardetails(demail){
        history.push({
            pathname:'/donarDetails',
            state:{uname:location.state.uname,demail:demail,type:'user',email:location.state.email}
        });
    }

    return (
        <div>
            <div className='userhomeheader'>
                <h1>Online Blood Bank</h1>
                <h4 style={{float:'left', color:'beige'}}>Welcome {location.state.uname}</h4>
                <a href="/">Logout</a>
                <a onClick={navigate}>Profile</a>
            </div>
            <div className='body'>
                <h3 style={{marginTop:'10px'}}>List of Donars</h3>
            </div>
            {donars.map(
                donar => 
                    <div className='donaruser' key = {donar.email}>
                        <tr>
                            <td> <button className='donardetails' onClick={()=>donardetails(donar.email)}>{donar.name}</button></td>
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

export default UserHome
