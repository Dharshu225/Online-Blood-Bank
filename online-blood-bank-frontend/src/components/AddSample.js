import React,{useState,useEffect} from 'react'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useHistory,useLocation  } from 'react-router';
import DataService from '../service/DataService';
//import date from 'date-and-time';
import moment from 'moment';

function UpdateProfile() {
    let history= useHistory();
    const location = useLocation();

    const[name,setName]=useState("")
    const[gender,setGender]=useState("")
    const[mobile,setMobile]=useState("")
    const[group,setGroup]=useState("")
    const[locality,setLocality]=useState("")
    const[age,setAge]=useState("")
    const ddate=moment(new Date()).format('DD-MM-YYYY');
    const[demail,setDemail]=useState("")
    const[state,setState]=useState("")
    const[country,setCountry]=useState("")

    useEffect(() => {
        document.title='Add Blood Sample';
    }, [])

    function validateForm() {
        return name.length>0 
                && gender!=="Choose..." && group!=="Choose..." && locality.length>0 && country.length>0
                && demail.length>0 && mobile.length>=10 && age.length>0 && ddate.length>0 && state.length>0 ;
    }
    function navigateBack(){
        history.push({
            pathname: '/adminHome',
            state: { uname: location.state.uname,email:location.state.email}
          });
    }
    function handleSubmit(){
        let donar={
            email:demail,
            name:name,
            locality:locality,
            age:age,
            date:moment(new Date()).format('YYYY-MM-DD'),
            gender:gender,
            mobile:mobile,
            group:group,
            state:state,
            country:country
            
        }
        if(DataService.addSample(donar)){
            history.push({
                pathname: '/adminHome',
                state: { uname: location.state.uname,email:location.state.email}
              });
        }
    }

    return (
        <div>
            <div className='userhomeheader'>
                <h1>Online Blood Bank</h1>
                <h4 style={{float:'left', color:'beige'}}>Welcome {location.state.uname}</h4>
                <a href='/'>Logout</a>
            </div>
            <div className='body'>
                <div className='newUserBody'>
                    <h1>Donar Details</h1>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="name">
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

                        <Form.Group controlId="group">
                            <Form.Label>Blood Group</Form.Label>
                            <Form.Control as="select" value={group} 
                                    onChange={(e)=>{setGroup(e.target.value)}}>
                                <option>Choose...</option>
                                <option>A+</option>
                                <option>A-</option>
                                <option>AB+</option>
                                <option>AB-</option>
                                <option>B+</option>
                                <option>B-</option>
                                <option>O+</option>
                                <option>O-</option>
                            </Form.Control>
                        </Form.Group>

                        <Form.Group controlId="demail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="text" value={demail} 
                                onChange={(e)=>{setDemail(e.target.value)}}
                            />
                        </Form.Group>

                        <Form.Group controlId="mobile">
                            <Form.Label>Contact Number</Form.Label>
                            <Form.Control type="text"  value={mobile} 
                                onChange={(e)=>{setMobile(e.target.value)}}
                            />
                        </Form.Group>

                        <Form.Group controlId="date">
                            <Form.Label>Donated Date</Form.Label>
                            <Form.Control type="text" value={ddate} disabled/>
                        </Form.Group>

                        <Form.Group controlId="locality">
                            <Form.Label>City</Form.Label>
                            <Form.Control type="text" value={locality} 
                                onChange={(e)=>{setLocality(e.target.value)}}
                            />
                        </Form.Group>

                        <Form.Group controlId="state">
                            <Form.Label>State</Form.Label>
                            <Form.Control type="text" value={state} 
                                onChange={(e)=>{setState(e.target.value)}}
                            />
                        </Form.Group>

                        <Form.Group controlId="country">
                            <Form.Label>Country</Form.Label>
                            <Form.Control type="text" value={country} 
                                onChange={(e)=>{setCountry(e.target.value)}}
                            />
                        </Form.Group>
                        <Button  type="submit" disabled={!validateForm()}>
                            Add
                        </Button>
                        <Button className="cancel"  onClick={navigateBack}>Cancel</Button>
                    </Form>
                    <p style={{textAlign:'left'}}><b>Note</b> : Fill all the fields to add donar</p>
                </div>
            </div>
        </div>
    )
}

export default UpdateProfile
