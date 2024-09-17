import Banner from "../../components/banner/Banner";
import "./About.scss";
import aboutBanner from "../../assets/about-banner.png";
import Dropdown from "../../components/dropdown/Dropdown";
import DropdownData from "./AboutDropdownData.json";

export default function About() {
  return (
    <div className="about">
      <Banner imgSrc={aboutBanner} />
      <div className="dropdowns-container">
        {DropdownData.map((data, index) => (
          <Dropdown
            className="dropdown-item"
            key={index}
            title={data.aboutDropdownTitle}
            content={data.aboutDropdownContent}
          />
        ))}
      </div>
    </div>
  );
}
