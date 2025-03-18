import { Container, Nav } from "react-bootstrap";
import {
  Link,
  LoaderFunctionArgs,
  Outlet,
  useLoaderData,
  useParams,
} from "react-router-dom";
import "../App.css";

interface userDetailParams {
  id: number;
  name: string;
  username: string;
  mail: string;
}

export const userDetailData = async ({ params }: LoaderFunctionArgs) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.userId}`
  );
  const useDetail = response.json();
  return useDetail;
};

function UserDetailPage() {
  const useDetail = useLoaderData() as userDetailParams;
  const { userId } = useParams();

  return (
    <>
      <Container className="detail-container">
        <h2>Name: {useDetail.name}</h2>
        <h3>Username: {useDetail.username}</h3>
      </Container>

      <Nav
        className="d-flex justify-content-center mt-5 detail-nav"
        variant="pills"
        defaultActiveKey="/home"
      >
        <Nav.Item>
          <Link className="mx-3 detail-nav-link" to={`/users/${userId}/posts`}>
            POSTS
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Link className="mx-3 detail-nav-link" to={`/users/${userId}/albums`}>
            ALBUMS
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Link className="mx-3 detail-nav-link" to={`/users/${userId}/todos`}>
            TODOS
          </Link>
        </Nav.Item>
      </Nav>

      <Outlet />
    </>
  );
}

export default UserDetailPage;
