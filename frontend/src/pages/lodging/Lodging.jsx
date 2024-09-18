import "./Lodging.scss";
import { useParams, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { PropertyContext } from "../../context/PropertyContext";
import { useEffect } from "react";
import Carrousel from "../../components/carrousel/Carrousel";
import Dropdown from "../../components/dropdown/Dropdown";
import Rating from "../../components/rating/Rating";

export default function Lodging() {
  const { id } = useParams();
  const properties = useContext(PropertyContext);
  const navigate = useNavigate();
  const property = properties.find((p) => p.id === id);

  useEffect(() => {
    if (!property) {
      navigate("/error", { replace: true });
    }
  }, [property, navigate]);

  if (!property) {
    return <p>Aucune donnée à afficher.</p>;
  }

  return (
    <div className="lodging">
      <div className="carrousel">
        <Carrousel images={property.pictures} />
      </div>
      <div className="under-carrousel-description">
        <div className="title-and-tags">
          <div className="title">
            <h1>{property.title}</h1>
            <p>{property.location}</p>
          </div>
          <div className="tags">
            <ul>
              {property.tags.map((tag, index) => (
                <li key={index}>{tag}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="host-and-rating">
          <div className="host">
            <p>
              {property.host.name.split(" ")[0]} <br />
              {property.host.name.split(" ")[1]}
            </p>
            <img src={property.host.picture} alt="Photo du propriétaire" />
          </div>
          <div className="rating">
            <Rating rating={property.rating} />
          </div>
        </div>
      </div>
      <div className="dropdowns">
        <Dropdown title="Description" content={property.description} />
        <Dropdown
          title="Equipements"
          content={property.equipments.map((equipment, index) => (
            <div key={index}>{equipment}</div>
          ))}
        />
      </div>
    </div>
  );
}
