import {
  Link,
  Outlet,
  useLoaderData,
  useParams,
} from "react-router-dom";
import { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";
import PageTransition from "../components/PageTransition";
import "../App.css";

interface UserDetailParams {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
  };
}

function UserDetailPage() {
  const userDetail = useLoaderData() as UserDetailParams;
  const { userId } = useParams();
  const { addFavorite, removeFavorite, isFavorite } = useContext(FavoritesContext);

  const handleFavoriteToggle = () => {
    if (isFavorite(userDetail.id, 'user')) {
      removeFavorite(userDetail.id, 'user');
    } else {
      addFavorite({
        id: userDetail.id,
        type: 'user',
        title: userDetail.name
      });
    }
  };

  return (
    <PageTransition>
      <div className="container mt-4">
        <div className="card mb-4">
          <div className="card-body">
            <div className="d-flex justify-content-between align-items-start mb-3">
              <div className="d-flex">
                <div className="rounded-circle bg-primary text-white p-4 me-3" style={{ width: 80, height: 80, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem' }}>
                  {userDetail.name.charAt(0)}
                </div>
                <div>
                  <h2 className="mb-1">{userDetail.name}</h2>
                  <p className="text-muted mb-2">@{userDetail.username}</p>
                  <div className="d-flex flex-wrap">
                    <span className="badge bg-light text-dark me-2 mb-2">
                      <i className="fas fa-envelope me-1"></i> {userDetail.email}
                    </span>
                    <span className="badge bg-light text-dark me-2 mb-2">
                      <i className="fas fa-phone me-1"></i> {userDetail.phone}
                    </span>
                    <span className="badge bg-light text-dark me-2 mb-2">
                      <i className="fas fa-globe me-1"></i> {userDetail.website}
                    </span>
                  </div>
                </div>
              </div>
              <button 
                className={`btn ${isFavorite(userDetail.id, 'user') ? 'btn-warning' : 'btn-outline-warning'}`}
                onClick={handleFavoriteToggle}
              >
                <i className="fas fa-star me-1"></i>
                {isFavorite(userDetail.id, 'user') ? 'Favorilerden Çıkar' : 'Favorilere Ekle'}
              </button>
            </div>

            <div className="row mt-4">
              <div className="col-md-6 mb-3">
                <div className="card h-100">
                  <div className="card-header bg-light">
                    <i className="fas fa-building me-2"></i> Şirket Bilgileri
                  </div>
                  <div className="card-body">
                    <h5>{userDetail.company.name}</h5>
                    <p className="text-muted fst-italic">"{userDetail.company.catchPhrase}"</p>
                    <p className="mb-0"><small>{userDetail.company.bs}</small></p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mb-3">
                <div className="card h-100">
                  <div className="card-header bg-light">
                    <i className="fas fa-map-marker-alt me-2"></i> Adres
                  </div>
                  <div className="card-body">
                    <p className="mb-1">{userDetail.address.street}, {userDetail.address.suite}</p>
                    <p className="mb-1">{userDetail.address.city}, {userDetail.address.zipcode}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <ul className="nav nav-tabs card-header-tabs">
              <li className="nav-item">
                <Link 
                  className="nav-link" 
                  to={`/users/${userId}/posts`}
                  style={{ color: 'var(--primary-color)' }}
                >
                  <i className="fas fa-newspaper me-1"></i> Gönderiler
                </Link>
              </li>
              <li className="nav-item">
                <Link 
                  className="nav-link" 
                  to={`/users/${userId}/albums`}
                  style={{ color: 'var(--primary-color)' }}
                >
                  <i className="fas fa-images me-1"></i> Albümler
                </Link>
              </li>
              <li className="nav-item">
                <Link 
                  className="nav-link" 
                  to={`/users/${userId}/todos`}
                  style={{ color: 'var(--primary-color)' }}
                >
                  <i className="fas fa-tasks me-1"></i> Yapılacaklar
                </Link>
              </li>
            </ul>
          </div>
          <div className="card-body">
            <Outlet />
          </div>
        </div>
      </div>
    </PageTransition>
  );
}

export default UserDetailPage;
