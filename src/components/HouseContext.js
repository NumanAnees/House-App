import React, { useState, useEffect, createContext } from "react";

//Dummy Data
import { housesData } from "../data";

export const HouseContext = createContext();

const HouseContextProvider = ({ children }) => {
  const [houses, setHouses] = useState(housesData);
  const [country, setCountry] = useState("Location (Any)");
  const [countries, setCountries] = useState([]);
  const [property, setProperty] = useState("Property type (Any)");
  const [properties, setProperties] = useState([]);
  const [price, setPrice] = useState("Price range (Any)");
  const [loading, setLoading] = useState(false);
  //return all counrties
  useEffect(() => {
    const allCountries = houses.map((house) => {
      return house.country;
    });
    //remove duplicates
    const uniqueCountries = ["Location (any)", ...new Set(allCountries)];
    setCountries(uniqueCountries);
  }, []);
  //return all properties
  useEffect(() => {
    const allProperties = houses.map((house) => {
      return house.type;
    });
    //remove duplicates
    const uniqueProperties = ["Property (any)", ...new Set(allProperties)];
    setProperties(uniqueProperties);
  }, []);
  //handle button click
  const handleClick = () => {
    console.log("clicked");
  };

  return (
    <HouseContext.Provider
      value={{
        country,
        setCountry,
        countries,
        property,
        setProperty,
        properties,
        price,
        setPrice,
        houses,
        loading,
        handleClick,
      }}
    >
      {children}
    </HouseContext.Provider>
  );
};

export default HouseContextProvider;
