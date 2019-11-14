import React from "react";

export const RandomRestaurant = ({ title, restaurant }) => {
  return (
    <div className="title">
      <h3>{restaurant.name ? restaurant.name : title}</h3>
    </div>
  );
};
