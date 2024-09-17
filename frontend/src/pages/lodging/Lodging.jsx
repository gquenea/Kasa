import "./Lodging.scss";
import { useLocation } from "react-router-dom";
import Carrousel from "../../components/carrousel/Carrousel";
import Dropdown from "../../components/dropdown/Dropdown";
import Rating from "../../components/rating/Rating";

export default function Lodging() {
  const location = useLocation();
  const { property } = location.state || {}; // Récupère les données depuis le state

  if (!property) {
    return <p>Aucune donnée à afficher.</p>; // Gère le cas où les données sont manquantes
  }

  return (
    <div className="lodging">
      <div className="carrousel">
        <Carrousel images={property.pictures} />
      </div>
      <div className="title-and-host">
        <div className="title">
          <h1>{property.title}</h1>
          <p>{property.location}</p>
        </div>
        <div className="host">
          <p>
            {property.host.name.split(" ")[0]} <br />
            {property.host.name.split(" ")[1]}
          </p>
          <img src={property.host.picture} alt="Photo du propriétaire" />
        </div>
      </div>
      <div className="tags-and-rating">
        <div className="tags">
          <ul>
            {property.tags.map((tag, index) => (
              <li key={index}>{tag}</li>
            ))}
          </ul>
        </div>
        <div className="rating">
          <Rating rating={property.rating} />
        </div>
      </div>
      <div className="dropdowns">
        <Dropdown title="Description" content={property.description} />
        <Dropdown
          title="Equipements"
          content={
              property.equipments.map((equipment, index) => (
                <p key={index}>{equipment}</p>
              ))
          }
        />
      </div>
    </div>
  );
}
