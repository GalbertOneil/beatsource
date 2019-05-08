
import React from 'react';

const Register = (props) => {

  return (
    <div className='registerBody'>
      <h2 className='registerTitle'>Register</h2>
      
      <form className='registerForm' onSubmit={props.handleRegister} >
        <input name="username" type="text" value={props.formData.username} onChange={props.handleChange} />&nbsp;
        <input name="password" type="password" value={props.formData.password} onChange={props.handleChange} />
        <button>Register</button>
      </form>
    </div>
  );
}

export default Register;