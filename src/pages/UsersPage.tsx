import { useLoaderData, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";
import "./UsersPage.css";
import PageTransition from "../components/PageTransition";

interface UserParams {
  id: number;
  name: string;
  email: string;
  username: string;
}

function UsersPage() {
  const users = useLoaderData() as UserParams[];
  const { addFavorite, removeFavorite, isFavorite } = useContext(FavoritesContext);
  const navigate = useNavigate();

  const handleFavoriteToggle = (e: React.MouseEvent, user: UserParams) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (isFavorite(user.id, 'user')) {
      removeFavorite(user.id, 'user');
    } else {
      addFavorite({
        id: user.id,
        type: 'user',
        title: user.name
      });
    }
  };

  const handleCardClick = (userId: number) => {
    navigate(`/users/${userId}`);
  };

  return (
    <PageTransition>
      <div className="container mt-4">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="mb-0">
            <i className="fas fa-users me-2" style={{ color: 'var(--primary-color)' }}></i>
            Our Users
          </h2>
        </div>
        
        <div className="row">
          {users.map((user) => (
            <div className="col-md-6 col-lg-4 mb-4" key={user.id}>
              <div 
                className="card h-100 user-card" 
                style={{ cursor: 'pointer' }}
                onClick={() => handleCardClick(user.id)}
              >
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <div className="d-flex align-items-center">
                      <div className="rounded-circle bg-primary text-white p-3 me-3" style={{ width: 50, height: 50, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        {user.name.charAt(0)}
                      </div>
                      <div>
                        <h5 className="mb-1">{user.name}</h5>
                        <p className="mb-0 text-muted small">@{user.username}</p>
                      </div>
                    </div>
                    <button 
                      className={`btn btn-sm ${isFavorite(user.id, 'user') ? 'btn-warning' : 'btn-outline-warning'}`}
                      onClick={(e) => handleFavoriteToggle(e, user)}
                    >
                      <i className="fas fa-star"></i>
                    </button>
                  </div>
                  <p className="text-muted mb-3">
                    <i className="fas fa-envelope me-2"></i>{user.email}
                  </p>
                  <button 
                    className="btn btn-primary w-100"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleCardClick(user.id);
                    }}
                  >
                    <i className="fas fa-user me-2"></i>View Profile
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageTransition>
  );
}

export default UsersPage;
