import React from 'react'

function Register() {
  return (
    <div>
        <form action="">
            <label htmlFor="username">Username:</label>
            <input type="text" id='username' name='username' /><br />
            <label htmlFor="email">Email:</label>
            <input type="email" id='email' name='email' /><br />
            <label htmlFor="password">Password:</label>
            <input type="password" id='password' name='password' /><br />
            <button type="submit">Register</button>
        </form>
    </div>
  )
}

export default Register