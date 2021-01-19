import React, { useState } from "react";

function ListingCard({ listing, onDeleteListing }) {
  const [favorited, setFavorited] = useState(false)

  const {description, image, location, id} = listing

  function handleFavoriteClick() {
    setFavorited(!favorited)
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {favorited ? (
          <button className="emoji-button favorite active" onClick={handleFavoriteClick}>★</button>
        ) : (
          <button className="emoji-button favorite" onClick={handleFavoriteClick}>☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button className="emoji-button delete" onClick={() => onDeleteListing(listing)}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
