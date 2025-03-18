import { Link, useLoaderData } from "react-router-dom";
import "./UsersPage.css";

interface UserParams {
  id: number;
  name: string;
  email: string;
  username: string;
}

export const UsersLoader = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();

  return users;
};

function UsersPage() {
  const users = useLoaderData() as UserParams[];
  return (
    <div className="users-container fade-in">
      <h2 className="users-title">Our Users</h2>
      <div className="users-grid">
        {users.map((user) => (
          <Link to={`/users/${user.id}`} key={user.id} style={{ textDecoration: 'none' }}>
            <div className="user-card">
              <div className="user-card-content">
                <h3>{user.name}</h3>
                <p className="view-profile">
                  View Profile <i className="fas fa-arrow-right"></i>
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default UsersPage;
