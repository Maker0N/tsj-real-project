import React from 'react'

const Login = () => (
  <main>
    <form className="form-login">
      <div className="login-input">
        <div>
          login
        </div>
        <input type="text" placeholder="login" />
      </div>
      <div className="login-input">
        <div>
          password
        </div>
        <input type="password" placeholder="password" />
      </div>
    </form>
    <div className="signup">SignUp</div>
  </main>
)

export default Login
