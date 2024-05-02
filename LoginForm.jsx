import React, { useState } from 'react';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!username.trim()) {
      newErrors.username = 'Username is required';
    }
    if (!password.trim()) {
      newErrors.password = 'Password is required';
    }

    if (Object.keys(newErrors).length === 0) {
     prompt("Form submmited  please write your name")
      
      setUsername('');
      setPassword('');
      setErrors({});
    } else {
      setErrors(newErrors);
    }
  };
const FormStyle = {
  height:"567px",
  width:"97.1%",
  backgroundColor:"Black",
  padding:"20px"
  
}
const InputStyle={
  width:"300px",
  height:'20px',
  color:"red",
  backgroundColor:"black",
border:"1px solid Red",
margin:"20px"

}
const LoginButtonStyle={
  height:"40px",
  width:"150px",
  color:"red",
  backgroundColor:"black",
  border:"1px solid red",
  margin:"10px"

}
  return (
    
    <div style={FormStyle}>
      <br /><br /><br />      <br /><br /><br />
    <form onSubmit={handleSubmit}>
      <div>
        
        <input
        style={InputStyle}
          type="text"
          id="username"
          placeholder='User Name'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        
        {errors.username && <span style={{ color: 'red' }}>{errors.username}</span>}
      </div>
      <div>
       
        <input
          type="password"
          style={InputStyle}
          id="password"
          placeholder='Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        {errors.password && <span style={{ color: 'red' }}>{errors.password}</span>}
      </div>
      <button type="submit" style={LoginButtonStyle}>Login</button>

      
    </form>
    </div>
  );
}

export default LoginForm;
