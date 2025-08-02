import { useParams } from 'react-router-dom';

export default function ListingDetails({ listings }) {
  const { id } = useParams();
  const listing = listings.find(l => l.id === id);

  if (!listing) return <div className="listing-not-found">Listing not found</div>;

  return (
    <div className="listing-detail">
      <img src={listing.image} alt={listing.title} />
      <h1>{listing.title}</h1>
      <p className="price">₹{listing.price}</p>
      <p className="location">{listing.location}</p>
      <p className="description">{listing.description}</p>
    </div>
  );
}