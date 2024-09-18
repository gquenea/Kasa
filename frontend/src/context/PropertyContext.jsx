import { createContext, useState, useEffect } from "react";

export const PropertyContext = createContext();

export function PropertyProvider({ children }) {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/properties")
      .then((response) => response.json())
      .then((data) => {
        setProperties(data);
      })
      .catch((error) => {
        console.error("Erreur lors du fetch des propriétés:", error);
      });
  }, []);

  return (
    <PropertyContext.Provider value={properties}>
      {children}
    </PropertyContext.Provider>
  );
}
