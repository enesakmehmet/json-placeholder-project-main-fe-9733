import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

interface PostProps {
  id: number;
  userId: number;
  title: string;
  body: string;
}

export function DraggablePost({ id, userId, title, body }: PostProps) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    cursor: 'grab',
    marginBottom: '15px',
    width: '100%',
    maxWidth: '600px'
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <Card className="post-card">
        <Card.Header className="d-flex align-items-center">
          <span className="me-2">
            <i className="fas fa-grip-lines"></i>
          </span>
          <Card.Title>Title: {title}</Card.Title>
        </Card.Header>
        <Card.Body>
          <Link className="post-link" to={`/users/${userId}/posts/${id}`}>
            Body: {body}
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
}
