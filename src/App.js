import React, { useState } from 'react';
import PlaceCard from './components/PlaceCard';
import SortingOptions from './components/SortingOptions';
import placesData from './data/PlacesData';

function App() {
  const [places, setPlaces] = useState(placesData);
  const [sortBy, setSortBy] = useState('');

  const handleSortChange = (option) => {
    setSortBy(option);
    let sortedPlaces = [...places];
    if (option === 'season') {
      sortedPlaces.sort((a, b) => a.season.localeCompare(b.season));
    } else if (option === 'budget') {
      sortedPlaces.sort((a, b) => a.budget.localeCompare(b.budget));
    } else if (option === 'country') {
      sortedPlaces.sort((a, b) => a.country.localeCompare(b.country));
    }
    setPlaces(sortedPlaces);
  };

  return (
    <div className="App">
      <header>
        <h1>Travel Destinations</h1>
      </header>
      <main>
        <SortingOptions onSortChange={handleSortChange} />
        <div className="places-container">
          {places.map((place) => (
            <PlaceCard key={place.id} place={place} />
          ))}
        </div>
      </main>
      <footer>
        <p>© 2024 Travel Website</p>
      </footer>
    </div>
  );
}

export default App;
