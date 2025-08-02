import { Link } from 'react-router-dom';

export default function ListingCard({ listing }) {
  const fallback = `https://picsum.photos/seed/${listing.id}/300/200`;

  return (
    <Link
      to={`/listing/${listing.id}`}
      className="border rounded-lg overflow-hidden shadow hover-shadow transition"
    >
      <img
        src={listing.image || fallback}
        alt={listing.title}
        className="w-full h-48 object-cover"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = fallback;
        }}
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold" style={{ color: 'var(--text)' }}>{listing.title}</h3>
        <p style={{ color: 'var(--muted)' }}>₹{listing.price}</p>
        <p className="text-xs text-gray-500">{listing.location}</p>
      </div>
    </Link>
  );
}