import "./Dropdown.scss";
import { useState } from "react";
import dropdownArrow from "../../assets/dropdown-arrow.svg";

export default function Dropdown({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <div className="dropdown-title-box" onClick={toggleDropdown}>
        <p className="dropdown-title">{title}</p>
        <img
          src={dropdownArrow}
          alt="flèche du dropdown"
          className={`dropdown-arrow ${isOpen ? "rotated" : ""}`}
        />
      </div>
      {isOpen && (
        <div className={`dropdown-content ${isOpen ? "open" : ""}`}>
          <div>{content}</div>
        </div>
      )}
    </div>
  );
}
