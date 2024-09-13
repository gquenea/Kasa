import "./Lodging.scss";
import { useLocation } from "react-router-dom";

export default function Lodging() {
  const location = useLocation();
  const { property } = location.state || {}; // Récupère les données depuis le state

  if (!property) {
    return <p>Aucune donnée à afficher.</p>; // Gère le cas où les données sont manquantes
  }

  return (
    <div>
      <h1>{property.title}</h1>
      <img src={property.cover} alt={property.title} />
      <p>{property.description}</p>
      {/* Affiche d'autres détails de la propriété */}
    </div>
  );
}
