import React from 'react'

function login() {
  return (
    <div>
        <form action="">
            <label htmlFor="username">Username:</label>
            <input type="text" id='username' name='username' /><br />
            <label htmlFor="password">Password:</label>
            <input type="password" id='password' name='password' /><br />
            <button type="submit">Login</button>
        </form>
    </div>
  )
}

export default login