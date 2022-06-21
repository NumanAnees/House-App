import React, { useState, useEffect, createContext } from "react";

//Dummy Data
import { housesData } from "../data";

export const HouseContext = createContext();

const HouseContextProvider = ({ children }) => {
  const [houses, setHouses] = useState(housesData);
  const [country, setCountry] = useState("Location (any)");
  const [countries, setCountries] = useState([]);
  const [property, setProperty] = useState("Property type (any)");
  const [properties, setProperties] = useState([]);
  const [price, setPrice] = useState("Price range (any)");
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
    //create a func which checks if string includes any.
    const isDefault = (str) => {
      return str.split(" ").includes("(any)");
    };

    //price
    const minPrice = parseInt(price.split(" ")[0]);
    const maxPrice = parseInt(price.split(" ")[2]);
    //houses
    const newHouses = housesData.filter((house) => {
      const housePrice = parseInt(house.price);
      //if all values are selected
      if (
        house.country === country &&
        house.type === property &&
        housePrice >= minPrice &&
        housePrice <= maxPrice
      ) {
        return house;
      }
      //if all are default
      if (isDefault(country) && isDefault(property) && isDefault(price)) {
        return house;
      }
      //if country is not default
      if (!isDefault(country) && isDefault(property) && isDefault(price)) {
        return house.country === country;
      }
      //if property is not default
      if (isDefault(country) && !isDefault(property) && isDefault(price)) {
        return house.type === property;
      }
      //if price is not default
      if (isDefault(country) && isDefault(property) && !isDefault(price)) {
        return house.price >= minPrice && house.price <= maxPrice;
      }
      //if country and property is not default
      if (!isDefault(country) && !isDefault(property) && isDefault(price)) {
        return house.country === country && house.type === property;
      }
      //if country and price is not default
      if (!isDefault(country) && isDefault(property) && !isDefault(price)) {
        return (
          house.country === country &&
          house.price >= minPrice &&
          house.price <= maxPrice
        );
      }
      //if price and property is not default
      if (isDefault(country) && !isDefault(property) && !isDefault(price)) {
        return (
          house.type === property &&
          house.price >= minPrice &&
          house.price <= maxPrice
        );
      }
    });
    setHouses(newHouses);
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
