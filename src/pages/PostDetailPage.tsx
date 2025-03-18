import { Container } from "react-bootstrap";
import { LoaderFunctionArgs, useLoaderData } from "react-router-dom";

interface commentParams {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

interface postParams {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export const postLoader = async ({ params } : LoaderFunctionArgs) => {
  const postResponse = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`
  );
  const post = await postResponse.json();

  const commentResponse = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}/comments`
  );
  const comments = await commentResponse.json();

  return { post, comments };
};

function PostDetailPage() {

    const {post, comments} = useLoaderData() as {post: postParams, comments: commentParams[]}

  return (
    <>
    <h3 className="text-center">TİTLE</h3>
    <div className="comment-div text-center">
      <Container>{post.title}</Container>
    </div>
    <h3 className="text-center">COMMENTS</h3>
    <ul>
        {comments.map((comment) => (
            <div className="comment-div" key={comment.id}>
              <Container className="d-flex justify-content-center">{comment.body}</Container>
              </div>
        ))}
    </ul>
    </>
  );
}

export default PostDetailPage;
