import { Link } from "react-router-dom";
import "./Card.scss";
import { useEffect, useState } from "react";

export default function Card() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    // Fetch des données depuis l'API
    fetch("http://localhost:8080/api/properties")
      .then((response) => response.json())
      .then((data) => {
        setProperties(data); // Stocker les propriétés dans le state
      })
      .catch((error) => {
        console.error("Erreur lors du fetch des propriétés:", error);
      });
  }, []);

  return (
    <div className="card-list">
      {properties.length > 0 ? (
        properties.map((property) => (
          <Link
            to={`/lodging/${property.id}`}
            key={property.id}
            className="card"
            state={{ property }}
          >
            <img src={property.cover} alt={property.title} />
            <h2>{property.title}</h2>
          </Link>
        ))
      ) : (
        <p>Aucune propriété trouvée.</p>
      )}
    </div>
  );
}
