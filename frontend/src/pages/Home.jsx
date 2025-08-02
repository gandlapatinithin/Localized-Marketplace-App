import { useEffect, useState } from 'react';
import ListingCard from '../components/ListingCard';

export default function Home() {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/listings')
      .then(res => res.json())
      .then(data => setListings(Array.isArray(data) ? data : []))
      .catch(() => setListings([]));
  }, []);

  return (
    <div className="home-container">
      <h2>Recent Listings</h2>
      <div className="listing-grid">
        {listings.length ? (
          listings.map(l => <ListingCard key={l.id} listing={l} />)
        ) : (
          <p>No listings available.</p>
        )}
      </div>
    </div>
  );
}