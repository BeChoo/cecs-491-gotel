import React, { useState } from 'react';
import './mappage.css';
import MapContainer from './map';

const Mappage = () => {
  const [city, setCity] = useState('');

  const handleSearch = (event) => {
    event.preventDefault();
    setCity(event.target.elements.city.value);
    event.target.elements.city.value = '';
  };

  return (
    <div>
      <header>
        <h1>Browse below</h1>
      </header>
      <main>
        <form className="searchBar" onSubmit={handleSearch}>
          <input type="search" name="city" placeholder="Enter city" />
          <button className='default-button' type="submit">Search</button>
        </form>
        <div className="map-container center">
          <MapContainer city={city} />
        </div>
      </main>
    </div>
  );
}

export default Mappage;
