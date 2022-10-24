import logoNav from "../../../assets/nav/LogoNav.svg";
import loginLogo from "../../../assets/nav/login-logo.svg";
import "./nav.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { login, logOut } from "../../../store/slices/auth";
import { useEffect, useState } from "react";
import { signOutUser } from "../../../Firebase/firebase-utils";
const Nav = () => {
  const dispatch = useDispatch()
  const user = useSelector((state) => state.auth);
  const [userActivo, setUserActivo] = useState(false)
  const { photoURL, name, email } = user.auth;
  console.log("DataUser", user.auth)
  const [menu, setMenu] = useState(false)
  const [profile, setProfile] = useState(false)
  console.log("FotoUseeer", photoURL)

  useEffect(() => {
    const user = localStorage.getItem("user")
    const userActivo = JSON.parse(user)
    console.log("userActivo", userActivo)
    return () => {
      userActivo !== null ? setUserActivo(true) : null

    }
  }, [])


  const Profile = () => {
    return <>
      <div className="profile__user">
        <p className="X__profile" onClick={() => setProfile(!profile)}>X</p>
        <div className="profile__user__container">
          <p><b>Name:</b> {name}</p>
          <p><b>Email:</b> {email}</p>
          <p><b>Pseudo:</b> { }</p>
        </div>

      </div>
    </>
  }
  const cerrarSesion = () => {
    setUserActivo(false)
    signOutUser()
    dispatch(logOut({}));

  }

  const menuProfile = () => {
    setMenu(!menu)
    setProfile(!profile)
  }
  return (
    <div className="Nav">
      <div className="Nav-container">
        <div className="logo-nav">
          <img src={logoNav} className="logo-nav__icon" />
          <p className="logo-nav__title">DONDE ESTUDIO</p>
        </div>
        <div className="nav-wrapper">
          <div className="nav-wrapper__carreras">
            <button className="nav-btn">Carreras</button>
            <button className="nav-btn">Universidades</button>
          </div>
          <div className="nav-wrapper-login">
            {!user.auth.email && !userActivo && <Link to="/register"> <button className="nav-btn">Register</button></Link>}
            {!user.auth.email && !userActivo && <Link to="/login"> <button className="nav-btn">Iniciar sesión</button></Link>}
          </div>
        </div>
        <div className="nav__user">
          <img src={photoURL || loginLogo} onClick={() => setMenu(!menu)} alt="login-logo" className="logo-icon" />
          {profile && <Profile />}
          {!profile && <div className="nav__container__sesion">
            {user.auth.email && menu && <a onClick={menuProfile} className="nav__container__sesion__item">Mi perfil</a>}
            {user.auth.email && menu && <a onClick={cerrarSesion} className="nav__container__sesion__item">Cerrar Sesion</a>}
          </div>}
        </div>
      </div>
    </div>
  );
};

export default Nav;
