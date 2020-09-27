import React, { useState } from 'react';

function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  async function processLogin(event) {
    event.preventDefault()

    if (loading) return;

    setLoading(true)
    await props.loginFunc(email, password);


    setLoading(false)
  }


  return (
    <div style={{ display: props.currentPage ? "block" : "none" }}>
      <h1>Login</h1>

      {props.error().type === "login" && (
        <p className='error'>{props.error().message}</p>
      )}
      <form onSubmit={(e) => processLogin(e)}>
        <input onChange={(event) => setEmail(event.target.value)} type='email' id='email' required placeholder='Email' />
        <input onChange={(event) => setPassword(event.target.value)} type='password' id='password' required placeholder='Password' />
        <button disabled={loading} type='submit'>Sign In</button>
      </form>
    </div>
  )

};

export { Login };