import Banner from "../../components/banner/Banner";
import "./Home.scss";
import homeBanner from "../../assets/home-banner.png";
import Card from "../../components/card/Card";

export default function Home() {
  return (
    <div>
      <div className="banner">
        <Banner imgSrc={homeBanner} imgTitle="Chez vous, partout et ailleurs" />
      </div>
      <article className="card-container">
        <Card />
      </article>
      
    </div>
  );
}
