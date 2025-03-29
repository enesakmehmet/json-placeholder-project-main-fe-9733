import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

interface AlbumProps {
  id: number;
  userId: number;
  title: string;
}

export function DraggableAlbum({ id, userId, title }: AlbumProps) {
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
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <Card className="albums-card mb-3" style={{ width: '18rem' }}>
        <Card.Body>
          <div className="d-flex align-items-center">
            <span className="me-2">
              <i className="fas fa-grip-lines"></i>
            </span>
            <Card.Text>
              <Link className="album-link" to={`/users/${userId}/albums/${id}`}>
                {title}
              </Link>
            </Card.Text>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}
