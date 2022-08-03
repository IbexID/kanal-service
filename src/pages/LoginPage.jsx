import React, { useState } from "react";

const LoginPage = ({ isAuth, setIsAuth, onLogin, login, password }) => {
  const [loginValue, setLoginValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [loginErrorMessage, setLoginErrorMessage] = useState('')

const showLoginErrorMessage = (message) => {
    setLoginErrorMessage(message)
    setTimeout(() => {
        setLoginErrorMessage('') 
    }, 3000);
}

  return (
    <div className="login">
      <form
        className="login__form"
        onSubmit={(e) => {
          e.preventDefault();
          if (loginValue === login && passwordValue === password){
              onLogin()
          } else {
            showLoginErrorMessage('Неверный логин или пароль')
          }
        }}
      >
        <h3 className="login__form-title">Authorization</h3>
        <label className="login__form-label">
          
          login
          <input
            className="login__form-input"
            autoComplete="username"
            value={loginValue}
            onChange={(e) => {
              setLoginValue(e.target.value);
            }}
            type="text"
          />
        </label>
        <label className="login__form-label">
          {" "}
          password
          <input
            className="login__form-input"
            autoComplete="current-password"
            type="password"
            value={passwordValue}
            onChange={(e)=>{
                setPasswordValue(e.target.value)
            }}
          />
        </label>
        <input type="submit" hidden />
        {loginErrorMessage &&
        <p className="login__form-error">{loginErrorMessage}</p>
        }
      </form>
    </div>
  );
};

export default LoginPage;
