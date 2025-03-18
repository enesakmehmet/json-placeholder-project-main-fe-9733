import '../App.css';

function HomePage() {
  return (
    <div className="container mt-5 fade-in">
      <div className="home-div">
        <span>WELCOME TO</span>
        <span className="mt-3 d-block">JSON PLACEHOLDER</span>
        <div className="mt-4">
          <p className="lead text-white-50" style={{ fontSize: '1.2rem', fontWeight: 300 }}>
            Explore users, posts, albums, and todos with our beautiful interface
          </p>
          <div className="d-flex justify-content-center gap-3 mt-4">
            <a href="/Users" className="btn btn-light px-4 py-2">
              <i className="fas fa-users me-2"></i>Browse Users
            </a>
            <a href="/Favorites" className="btn btn-outline-light px-4 py-2">
              <i className="fas fa-star me-2"></i>View Favorites
            </a>
          </div>
        </div>
      </div>
      
      <div className="row mt-5 mb-5 slide-up">
        <div className="col-md-4 mb-4">
          <div className="card h-100 p-4 text-center">
            <i className="fas fa-users fa-3x mb-3" style={{ color: 'var(--primary-color)' }}></i>
            <h3 className="mb-3">Users</h3>
            <p className="text-muted">Browse through our collection of users and explore their profiles.</p>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card h-100 p-4 text-center">
            <i className="fas fa-newspaper fa-3x mb-3" style={{ color: 'var(--primary-color)' }}></i>
            <h3 className="mb-3">Posts</h3>
            <p className="text-muted">Read posts from users and engage with their content.</p>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card h-100 p-4 text-center">
            <i className="fas fa-images fa-3x mb-3" style={{ color: 'var(--primary-color)' }}></i>
            <h3 className="mb-3">Albums</h3>
            <p className="text-muted">View photo albums shared by our users.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
