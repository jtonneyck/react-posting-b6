import Axios from "axios";
import qs from "querystring";
const axios = Axios.create({
    withCredentials: true,
    baseURL: process.env.REACT_APP_API,
});
// https://github.com/zeit/next.js/issues/153

export const login = function(username, password) {
        return axios({
            method: "POST",
            url: "/auth/login",
            baseURL: this.domain,
            headers: { 'content-type': 'application/x-www-form-urlencoded' },
            data: qs.stringify({username, password}),
        })
        .then((response)=> {
            this.setUser(response.data)
        })
    }

export const signup = function({username, password, firstname, lastname, email}) {
        return axios({
            method: "POST",
            url: "/auth/signup",
            baseURL: this.domain,
            headers: { 'content-type': 'application/x-www-form-urlencoded' },
            data: qs.stringify({username, firstname, lastname, password, email}),
        })
        .then((response)=> {
            this.setUser(response.data);
        })
    }

export const loggedIn = function(){
        const user = this.getUser()
        return !!user; 
    }

export const setUser = function(user){
        localStorage.setItem('user', JSON.stringify(user));
    }

export const getUser = function(){
        return JSON.parse(localStorage.getItem('user'));
    }

export const logout = function(){
       return axios({
            baseURL: this.domain,
            url: "/auth/logout"
        })
        .then((res)=> {
            localStorage.removeItem('user');
        })
    }    