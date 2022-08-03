import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router";
import { Navigate } from "react-router-dom";
import Header from "./components/Header";
import Index from "./pages/Index";
import LoginPage from "./pages/LoginPage";

function App() {
  
  const login = "username";
  const password = "password";
  const [isAuth, setIsAuth] = useState(() =>
    localStorage.getItem("logged_user") !== null
  );
  const navigate = useNavigate()
  useEffect(() => {
    localStorage.setItem("logged_user", JSON.stringify(isAuth));
  }, [isAuth]);
  const logIn = () => {
    setIsAuth(true);
    navigate("/", { replace: true })
  };
  const logOut = () => setIsAuth(false);
  return (
    <div className="App">
      <Header isAuth={isAuth} username={login} logOut={()=>{logOut()}} />
      <Routes>
        <Route path="/" element={ isAuth ? <Index isAuth={isAuth} setIsAuth={setIsAuth} /> : <Navigate to="/login" />}
        />
        <Route
          path="/login"
          element={
            <LoginPage
              login={login}
              password={password}
              onLogin={() => {
                logIn();
              }}
              isAuth={isAuth}
              setIsAuth={setIsAuth}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
