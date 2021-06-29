import React, { Component } from 'react';
import Login from './Login';
import UserHome from './UserHome';
import AdminHome from './AdminHome';
import NewUser from './NewUser';
import Profile from './Profile';
import UpdateProfile from './UpdateProfile';
import AdminProfile from './AdminProfile';
import AdminUpdateProfile from './AdminUpdateProfile';
import AddSample from './AddSample'
import UserManagement from './UserManagement';
import DonarDetails from './DonarDetails';
import EditDonar from './EditDonar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

class BloodBankApp extends Component {
    render() {
        return (
            <Router>
                <>
                    <Switch>
                        <Route path="/" exact component={Login} />
                        <Route path="/userHome" exact component={UserHome} />
                        <Route path="/adminHome" exact component={AdminHome} />
                        <Route path="/newUser" exact component={NewUser} />
                        <Route path="/profile" exact component={Profile} />
                        <Route path="/adminProfile" exact component={AdminProfile} />
                        <Route path="/updateProfile" exact component={UpdateProfile} />
                        <Route path="/adminUpdateProfile" exact component={AdminUpdateProfile} />
                        <Route path="/addSample" exact component={AddSample} />
                        <Route path="/userManagement" exact component={UserManagement} />
                        <Route path="/donarDetails" exact component={DonarDetails} />
                        <Route path="/editDonar" exact component={EditDonar} />
                    </Switch>
                </>
            </Router>
        )
    }
}

export default BloodBankApp;