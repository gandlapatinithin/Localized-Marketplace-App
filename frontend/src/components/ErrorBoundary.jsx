import { Link, useRouteError } from 'react-router-dom';

export default function ErrorBoundary() {
  const error = useRouteError();

  return (
    <div className="error-page">
      <div className="error-card">
        <h2>Oops! Something went wrong</h2>
        <div className="error-msg">
          {error.status === 404
            ? 'Sorry, the page you’re looking for doesn’t exist.'
            : 'Sorry, an unexpected error has occurred.'}
        </div>
        <p>{error.statusText || error.message}</p>
        <Link to="/" className="home-btn">
          Go back home
        </Link>
      </div>
    </div>
  );
}