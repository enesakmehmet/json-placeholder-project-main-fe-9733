import {
  Link,
  LoaderFunctionArgs,
  useLoaderData,
  useParams,
} from "react-router-dom";
import "./PostPage.css";
import { Card } from "react-bootstrap";

interface PostParams {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export const PostDataLoader = async ({ params }: LoaderFunctionArgs) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.userId}/posts`
  );
  const Posts = response.json();
  return Posts;
};

function PostPage() {
  const posts = useLoaderData() as PostParams[];
  const { userId } = useParams();

  return (
    <>
      <h2 className="text-center">POSTS</h2>
      <div className="post-card-div">
        {posts.map((post) => (
          <Card className="post-card">
            <Card.Title>Title: {post.title}</Card.Title>
            <Card.Body>
              <Link className="post-link" to={`/users/${userId}/posts/${post.id}`}>
                Body: {post.body}
              </Link>
            </Card.Body>
          </Card>
        ))}
      </div>
    </>
  );
}

export default PostPage;
