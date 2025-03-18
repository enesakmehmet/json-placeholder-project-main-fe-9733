import { LoaderFunctionArgs, useLoaderData } from "react-router-dom";

interface albumDetailsParams {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

export const albumDetailsLoader = async ({params}: LoaderFunctionArgs) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}/photos/`);
  const albumDetail = response.json();
  return albumDetail;
}

function AlbumDetailPage() {
  const albumDetails = useLoaderData() as albumDetailsParams[];

  return (
    <>
      <div>
        <ul>
          {albumDetails.map((albumDetail) => (
            <li key={albumDetail.id}><img src={albumDetail.thumbnailUrl}></img></li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default AlbumDetailPage;
