import { useContext } from 'react';
import { FavoritesContext, FavoriteItem } from '../context/FavoritesContext';
import { Link } from 'react-router-dom';
import PageTransition from '../components/PageTransition';

function FavoritesPage() {
  const { favorites, removeFavorite } = useContext(FavoritesContext);

  const getIconByType = (type: string) => {
    switch (type) {
      case 'user':
        return 'fas fa-user';
      case 'post':
        return 'fas fa-newspaper';
      case 'album':
        return 'fas fa-images';
      case 'todo':
        return 'fas fa-tasks';
      default:
        return 'fas fa-star';
    }
  };

  const getLinkByType = (item: FavoriteItem) => {
    switch (item.type) {
      case 'user':
        return `/users/${item.id}`;
      case 'post':
        return `/users/${item.userId}/posts/${item.id}`;
      case 'album':
        return `/users/${item.userId}/albums/${item.id}`;
      case 'todo':
        return `/users/${item.userId}/todos`;
      default:
        return '/';
    }
  };

  return (
    <PageTransition>
      <div className="container mt-4">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="mb-0">
            <i className="fas fa-star me-2" style={{ color: 'var(--primary-color)' }}></i>
            Favorites
          </h2>
        </div>

        {favorites.length === 0 ? (
          <div className="card p-5 text-center">
            <i className="fas fa-star-half-alt fa-4x mb-3 text-muted"></i>
            <h3 className="mb-3">No Favorites Yet</h3>
            <p className="text-muted mb-4">
              You haven't added any items to your favorites yet. Browse through users, posts, albums, and todos to add them to your favorites.
            </p>
            <div className="d-flex justify-content-center">
              <Link to="/users" className="btn btn-primary px-4">
                <i className="fas fa-users me-2"></i>Browse Users
              </Link>
            </div>
          </div>
        ) : (
          <div className="row">
            {favorites.map((item: FavoriteItem) => (
              <div className="col-md-6 col-lg-4 mb-4" key={`${item.type}-${item.id}`}>
                <div className="card h-100">
                  <div className="card-body">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <div className="d-flex align-items-center">
                        <div className="me-3 rounded-circle bg-light p-2" style={{ width: 40, height: 40, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <i className={getIconByType(item.type)} style={{ color: 'var(--primary-color)' }}></i>
                        </div>
                        <span className="text-uppercase small text-muted">{item.type}</span>
                      </div>
                      <button 
                        className="btn btn-sm btn-outline-danger" 
                        onClick={() => removeFavorite(item.id, item.type)}
                      >
                        <i className="fas fa-trash-alt"></i>
                      </button>
                    </div>
                    <h5 className="card-title">{item.title}</h5>
                    <Link to={getLinkByType(item)} className="btn btn-sm btn-primary mt-2">
                      <i className="fas fa-eye me-1"></i> View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </PageTransition>
  );
}

export default FavoritesPage;