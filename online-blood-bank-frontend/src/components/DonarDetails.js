import React,{useState,useEffect} from 'react'
import { useHistory,useLocation } from "react-router-dom";
import DataService from '../service/DataService';

function DonarDetails() {
    const location = useLocation();
    let history= useHistory();

    const[name,setName]=useState("");
    const[age,setAge]=useState("");
    const[gender,setGender]=useState("");
    const[mobile,setMobile]=useState("");
    const[email,setEmail]=useState("");
    const[group,setGroup]=useState("");
    const[date,setDate]=useState("");
    const[locality,setLocality]=useState("");
    const[state,setState]=useState("")
    const[country,setCountry]=useState("")

    useEffect(() => {
        document.title='Donar Details';
        DataService.donarDetails(location.state.demail).then(res=>{
            setName(res.name)
            setAge(res.age)
            setMobile(res.mobile)
            setEmail(res.email)
            setGender(res.gender)
            setGroup(res.group)
            setDate(res.date.split("-")[2]+"-"+res.date.split('-')[1]+'-'+res.date.split('-')[0])
            setLocality(res.locality)
            setState(res.state)
            setCountry(res.country)
        })
    }, [])
    function navigateBack(){
        history.push({
            pathname: '/'+location.state.type+'Home',
            state: { uname: location.state.uname,email:location.state.email}
          });
    }

    return (
        <div>
            <div className='userhomeheader'>
                <h1>Online Blood Bank</h1>
                <h4 style={{float:'left', color:'beige'}}>Welcome {location.state.uname}</h4>
                <a href="/">Logout</a>
            </div>
            <div className='body'>
                <h4>Donar Details</h4>
                <div className="profile">
                    <table className="pcontainer">
                        <tr>
                            <th>Name</th>
                            <td>: {name}</td>
                        </tr>
                        <tr>
                            <th>Age</th>
                            <td>: {age}</td>
                        </tr>
                        <tr>
                            <th>Group</th>
                            <td>: {group}</td>
                        </tr>
                        <tr>
                            <th>Gender</th>
                            <td>: {gender}</td>
                        </tr>
                        <tr>
                            <th>Email</th>
                            <td>: {email}</td>
                        </tr>
                        <tr>
                            <th>Mobile</th>
                            <td>: {mobile}</td>
                        </tr>
                        <tr>
                            <th>Donated Date</th>
                            <td>: {date}</td>
                        </tr>
                        <tr>
                            <th>City</th>
                            <td>: {locality}</td>
                        </tr>
                        <tr>
                            <th>State</th>
                            <td>: {state}</td>
                        </tr>
                        <tr>
                            <th>Country</th>
                            <td>: {country}</td>
                        </tr>
                    </table>
                    <button className="back"  onClick={navigateBack}>Back</button>
                </div>
            </div>
        </div>
    )
}

export default DonarDetails