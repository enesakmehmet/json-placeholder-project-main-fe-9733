import { useState } from 'react';
import { LoaderFunctionArgs, useLoaderData, useParams } from 'react-router-dom';
import { DndContext, closestCenter, KeyboardSensor, PointerSensor, useSensor, useSensors, DragEndEvent } from '@dnd-kit/core';
import { arrayMove, SortableContext, sortableKeyboardCoordinates, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { DraggableAlbum } from '../components/DraggableAlbum';
import { Container, Alert, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';

interface AlbumParams {
  userId: number;
  id: number;
  title: string;
}

export const DraggableAlbumDataLoader = async ({ params }: LoaderFunctionArgs) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.userId}/albums`
  );
  const albums = await response.json();
  return albums;
};

function DraggableAlbumPage() {
  const initialAlbums = useLoaderData() as AlbumParams[];
  const [albums, setAlbums] = useState<AlbumParams[]>(initialAlbums);
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
      setAlbums((items) => {
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
    
    console.log(`Kullanıcı ${userId} için kaydedilen albüm sıralaması:`, albums);
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Container className="mt-4">
        <h1 className="text-center mb-4">Albümleri Düzenle</h1>
        <p className="text-center mb-4">Albümleri sürükleyip bırakarak sıralayabilirsiniz</p>
        
        {showAlert && (
          <Alert variant="success" className="mb-3">
            Albüm sırası güncellendi! (Not: Bu bir demo olduğu için değişiklikler kalıcı değildir)
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
            items={albums.map(album => album.id)}
            strategy={verticalListSortingStrategy}
          >
            <div className="d-flex flex-column align-items-center">
              {albums.map((album) => (
                <DraggableAlbum 
                  key={album.id}
                  id={album.id}
                  userId={album.userId}
                  title={album.title}
                />
              ))}
            </div>
          </SortableContext>
        </DndContext>
      </Container>
    </motion.div>
  );
}

export default DraggableAlbumPage;
