import "./Error.scss";
import { Link } from "react-router-dom";

export default function Error() {
  return (
    <div className="error">
      <h1>404</h1>
      <p>Oups! La page que vous demandez n&apos;existe pas.</p>
      <div className="home-page-link">
        <Link to="/">Retournez sur la page d&apos;accueil</Link>
      </div>
    </div>
  );
}
