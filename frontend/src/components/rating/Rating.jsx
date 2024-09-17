import "./Rating.scss";
import redStar from "../../assets/red-star.svg";
import greyStar from "../../assets/grey-star.svg";

export default function Rating({ rating }) {
  const stars = Array(5)
    .fill(0)
    .map((_, index) => {
      return (
        <img
          key={index}
          className="star"
          src={index < rating ? redStar : greyStar}
          alt={index < rating ? "red star" : "grey star"}
        />
      );
    });

  return <div>{stars}</div>;
}
