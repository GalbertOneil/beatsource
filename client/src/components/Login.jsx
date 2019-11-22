import React from 'react';
import { Link } from 'react-router-dom';



const Login = (props) => {

  return (
    <div className='loginBody'>
      <h2 className='loginTitle'>LOGIN</h2>
      
      <form className='loginForm'onSubmit={(e) => {
        e.preventDefault();
        props.handleLogin();}} >
        <input name="username" type="text" value={props.formData.username} onChange={props.handleChange} />&nbsp;
        <input name="password" type="password" value={props.formData.password} onChange={props.handleChange} />
        <button className='loginButtonRegister'>LOGIN</button>
        <Link className='login-Register' to="/register">Register</Link>
      </form>
    </div>
  );
}

export default Login;