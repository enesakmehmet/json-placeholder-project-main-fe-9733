import { useState } from 'react';
import { LoaderFunctionArgs, useLoaderData, useParams } from 'react-router-dom';
import { DndContext, closestCenter, KeyboardSensor, PointerSensor, useSensor, useSensors, DragEndEvent } from '@dnd-kit/core';
import { arrayMove, SortableContext, sortableKeyboardCoordinates, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { DraggablePost } from '../components/DraggablePost';
import { Container, Alert, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';

interface PostParams {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export const DraggablePostDataLoader = async ({ params }: LoaderFunctionArgs) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.userId}/posts`
  );
  const posts = await response.json();
  return posts;
};

function DraggablePostPage() {
  const initialPosts = useLoaderData() as PostParams[];
  const [posts, setPosts] = useState<PostParams[]>(initialPosts);
  const [showAlert, setShowAlert] = useState(false);
  const { userId } = useParams();

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;
    
    if (over && active.id !== over.id) {
      setPosts((items) => {
        const oldIndex = items.findIndex(item => item.id === active.id);
        const newIndex = items.findIndex(item => item.id === over.id);
        
        setShowAlert(true);
        setTimeout(() => setShowAlert(false), 3000);
        
        return arrayMove(items, oldIndex, newIndex);
      });
    }
  }

  function handleSave() {
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 3000);
    
    console.log(`Kullanıcı ${userId} için kaydedilen sıralama:`, posts);
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Container className="mt-4">
        <h1 className="text-center mb-4">Gönderileri Düzenle</h1>
        <p className="text-center mb-4">Gönderileri sürükleyip bırakarak sıralayabilirsiniz</p>
        
        {showAlert && (
          <Alert variant="success" className="mb-3">
            Gönderi sırası güncellendi! (Not: Bu bir demo olduğu için değişiklikler kalıcı değildir)
          </Alert>
        )}
        
        <div className="d-flex justify-content-end mb-3">
          <Button variant="primary" onClick={handleSave}>
            Sıralamayı Kaydet
          </Button>
        </div>
        
        <DndContext 
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}
        >
          <SortableContext 
            items={posts.map(post => post.id)}
            strategy={verticalListSortingStrategy}
          >
            <div className="d-flex flex-column align-items-center">
              {posts.map((post) => (
                <DraggablePost 
                  key={post.id}
                  id={post.id}
                  userId={post.userId}
                  title={post.title}
                  body={post.body}
                />
              ))}
            </div>
          </SortableContext>
        </DndContext>
      </Container>
    </motion.div>
  );
}

export default DraggablePostPage;
