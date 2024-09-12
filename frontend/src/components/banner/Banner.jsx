import "./Banner.scss";

export default function Banner({ imgSrc, imgTitle }) {
  return (
    <div className="banner">
      <img src={imgSrc} alt={imgTitle} />
      <h1>{imgTitle}</h1>
    </div>
  );
}
