import "./Header.scss";
import logo from "../../assets/logo-header.svg";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <img src={logo} alt="Logo Kasa" />
      <nav>
        <ul>
          <li>
            <NavLink to="/">Accueil</NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              A propos
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
