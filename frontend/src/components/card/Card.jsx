import { Link } from "react-router-dom";
import "./Card.scss";
import { useContext } from "react";
import { PropertyContext } from "../../context/PropertyContext";

export default function Card() {
  const properties = useContext(PropertyContext);

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
