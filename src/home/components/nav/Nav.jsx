import logoNav from "../../../assets/nav/LogoNav.svg";
import loginLogo from "../../../assets/nav/login-logo.svg";
import "./nav.css";
const Nav = () => {
  return (
    <div className="Nav">
      <div className="Nav-container">
        <div className="logo-nav">
          <img src={logoNav} className="logo-nav__icon" />
          <p className="logo-nav__title">DONDE ESTUDIO</p>
        </div>
        <div className="nav-wrapper">
          <div className="nav-wrapper__carreras">
            <button className="nav-btn">carreras</button>
            <button className="nav-btn">univercidades</button>
          </div>
          <div className="nav-wrapper-login">
            <button className="nav-btn">register</button>
            <button className="nav-btn">iniciar seccion</button>
          </div>

          <img src={loginLogo} alt="login-logo" className="logo-icon" />
        </div>
      </div>
    </div>
  );
};

export default Nav;
