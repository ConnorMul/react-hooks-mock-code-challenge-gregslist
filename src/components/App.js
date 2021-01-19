import React, { useState, useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listings, setListings] = useState([])
  const [search, setSearch] = useState("")

  useEffect(() => {
    fetch("http://localhost:6001/listings")
    .then(resp => resp.json())
    .then(listingObjs => setListings(listingObjs))
  }, [])

  function handleDeleteListing(listingToRemove) {
    
    fetch(`http://localhost:6001/listings/${listingToRemove.id}`, {
      method: "DELETE"
    })
    const updatedListings = listings.filter((listing) => {
      return listing.id !== listingToRemove.id
    }
    )
    setListings(updatedListings)
  }

  const searchedListings = listings.filter(listing => {
    return listing.description.toLowerCase().includes(search.toLowerCase())
  })

  return (
    <div className="app">
      <Header search={search} onSearch={setSearch}/>
      <ListingsContainer listings={searchedListings} onDeleteListing={handleDeleteListing}/>
    </div>
  );
}

export default App;
