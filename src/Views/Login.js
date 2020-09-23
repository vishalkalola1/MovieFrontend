import React, { Component } from 'react';
import { Link, BrowserRouter as Router, Route } from 'react-router-dom';
import '../Css/Signup.css'
import { registerUser } from '../api/apiService'
import { authenticateLogin } from '../api/apiService'
import { getToken } from '../api/AuthServices'
import SignUP from './SignUP';

class Login extends Component {

    constructor(props) {
        super(props)
        this.state = {
            username: "",
            password: ""
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onclick = this.onclick.bind(this);
        this.getToken()
    }

    getToken(){
        getToken().then((data)=>{
            console.log("-------------- Token Details ---------------", data)
            let access_token = data.access_token
            localStorage.setItem("secretkey",access_token)
        })
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    onclick(event) {
        event.preventDefault();
        this.props.history.push("/signup")
    }

    returnHome(){
        this.props.history.push('/')
    }

    handleSubmit(event) {
        event.preventDefault();
        authenticateLogin(this.state).then((data) => {
            if (data.status == 200) {
                return data.json()
            } else if (data.status == 401) {
                alert("wrong credentials")
                throw data
            } else {
                this.returnHome()
            }
        }).then((data)=>{
            localStorage.setItem("islogin",true)
            localStorage.setItem("logindata",data)
            this.props.history.push("/home")
        }).catch(err => {
            this.returnHome()
        })
    }
    
    render() {
        return (
            <form>
                <h1>SIGN IN</h1>
                <div className="container">
                    <label for="username"><strong>Username</strong></label>
                    <input type="text" name="username" value={this.state.username} placeholder="Enter username" onChange={this.handleInputChange} required />
                </div>

                <div className="container">
                    <label for="password"><strong>Password</strong></label>
                    <input type="password" name="password" value={this.state.password} placeholder="Enter password" onChange={this.handleInputChange} required />
                </div>

                <button type="submit" onClick={this.handleSubmit}><strong>Sign In</strong></button>
                
                <button type="button" onClick={this.onclick}><strong>Sign Up</strong></button>
                
            </form>
        )
    }
}
export default Login;