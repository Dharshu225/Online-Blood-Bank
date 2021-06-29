import React,{useState,useEffect} from 'react'
import { useHistory,useLocation } from "react-router-dom";
import DataService from '../service/DataService';

function AdminHome() {
    const location = useLocation();
    let history= useHistory();

    const[users,setUsers]=useState([])

    useEffect(() => {
        document.title='User Management';
        DataService.getAllUser("user").then(res=>setUsers(res.data))
        //console.log(users)
    }, [])

    const navigate=()=>{
        history.push({
            pathname: '/adminHome',
            state: { uname: location.state.uname, email:location.state.email}
          });
    }

    return (
        <div>
            <div className='userhomeheader'>
                <h1>Online Blood Bank</h1>
                <h5 style={{float:'left', color:'beige'}}>Welcome {location.state.uname}</h5>
                <a href="/">Logout</a>
                <a onClick={navigate}>Home</a>
            </div>
            <div className='body'>
                <h4>List of Users</h4>
                <table className='userlist'>
                    <tr>
                        <th>Name</th>
                        <th>Email ID</th>
                        <th>Age</th>
                        <th>Gender</th>
                        <th>Mobile</th>
                    </tr>
                    {users.map(
                        user => 
                            <tr className='user' key = {user.email}>
                                    <td>{user.fullname}</td>
                                    <td>{user.email}</td>
                                    <td>{user.age}</td>
                                    <td>{user.gender}</td>
                                    <td>{user.mobile}</td>
                            </tr>
                        )
                    }
                </table>
            </div>
        </div>
    )
}

export default AdminHome
