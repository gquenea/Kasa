import "./Footer.scss";
import logo from "../../assets/logo-footer.svg";

export default function Footer() {
  return (
    <footer className="footer">
      <img src={logo} alt="Logo Kasa" />
      <p>© Kasa. All rights reserved</p>
    </footer>
  );
}
