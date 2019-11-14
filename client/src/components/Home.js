/* React Libraries */
import React, { useState } from "react";
// import { Button, ButtonGroup } from "react-bootstrap";

/* Custom Components/Hooks */
import { RandomRestaurantForm } from "./RandomRestaurantForm";
import { RandomRestaurant } from "./RandomRestaurant";

export const Home = () => {
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [randomRestaurant, setRandomRestaurant] = useState({});

  const submitChoice = e => {
    e.preventDefault();

    var length = filteredRestaurants.length;
    var randomNumber = Math.floor(Math.random() * length) + 0;

    setRandomRestaurant(filteredRestaurants[randomNumber]);
  };

  // console.table(filteredRestaurants);
  // console.table(randomRestaurant);

  return (
    <>
      <RandomRestaurant title="Restaurant" restaurant={randomRestaurant} />
      <div className="form-grid">
        <RandomRestaurantForm
          setFilteredRestaurants={setFilteredRestaurants}
          onSubmit={submitChoice}
        />
      </div>
    </>
  );
};
