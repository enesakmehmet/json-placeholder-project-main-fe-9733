import { Link, LoaderFunctionArgs, useLoaderData } from "react-router-dom";
import "../App.css";
import { Card } from "react-bootstrap";

interface AlbumParams {
  userId: number;
  id: number;
  title: string;
}

export const AlbumDataLoader = async ({ params }: LoaderFunctionArgs) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.userId}/albums`
  );
  const albums = response.json();
  return albums;
};

function AlbumPage() {
  const albums = useLoaderData() as AlbumParams[];

  return (
    <>
      <h1 className="text-center mt-3">ALBUMS</h1>
      <div className="albums-card-div">
        {albums.map((album) => (
              <Card className="albums-card" style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Text>
                  <Link className="album-link" to={`/users/${album.userId}/albums/${album.id}`}>{album.title}</Link>
                </Card.Text>
              </Card.Body>
            </Card>
        ))}
      </div>
    </>
  );
}

export default AlbumPage;
