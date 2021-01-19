import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ listings, onDeleteListing }) {

  const listingItems = listings.map((listing) => {
    return <ListingCard key={listing.id} listing={listing} onDeleteListing={onDeleteListing} />
  })
  return (
    <main>
      <ul className="cards">
        {listingItems}
      </ul>
    </main>
  );
}

export default ListingsContainer;
