import axios from 'axios'

const API_URL = 'https://8080-aedfdcadaeceebeeecafddadaaafdfbabacbdeb.examlyiopb.examly.io/'

class DataService {
    login(username,password,type){
        return axios.get(`${API_URL}/login/${username}/${password}/${type}`)
            .then((response)=>response.data)
    }
    createuser(user){
        return axios.post(`${API_URL}/createUser/`,user);
    }
    profile(email){
        return axios.get(`${API_URL}/profile/${email}`)
            .then((response)=>response.data)
    }
    updateProfile(user){
        return axios.put(`${API_URL}/updateProfile/`,user)
    }
    addSample(donar){

        return axios.post(`${API_URL}/addSample/`,donar);
    }
    async bloodDonar(){
        const response=await fetch (`${API_URL}/getAllDonars`);
        const data=await response.json();
        return data;;
        //return axios.get(`${API_URL}/getAllDonars`);
    }
    async donarDetails(demail){
        const response=await fetch(`${API_URL}/donarDetails/${demail}`);
        const data=await response.json();
        return data;
        /*return axios.get(`${API_URL}/donarDetails/${demail}`)
            .then((response)=>response.data)*/
    }
    updateDonar(donar){
        return axios.put(`${API_URL}/updateDonar/`,donar)
    }
    deleteDonar(demail){
        return axios.delete(`${API_URL}/deleteDonar/${demail}`)
    }
    deleteOldSamples(){
        return axios.post(`${API_URL}/deleteOldSamples`).then((res)=>res.data)
    }
    getAllUser(type){
        return axios.get(`${API_URL}/getAllUsers/${type}`);
    }
}

export default new DataService()
