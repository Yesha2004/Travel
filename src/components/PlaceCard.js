// PlaceCard.js
import React from 'react';
import './PlaceCard.css';

const PlaceCard = ({ place }) => {
  return (
    <div className="place-card">
      <img src={place.image} alt={place.name} />
      <h2>{place.name}</h2>
      <p>{place.description}</p>
      <p>Best Season: {place.season}</p>
      <p>Budget: {place.budget}</p>
      <p>Country: {place.country}</p>
    </div>
  );
};

export default PlaceCard;
