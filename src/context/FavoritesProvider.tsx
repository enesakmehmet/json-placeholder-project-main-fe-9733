import { useState, useEffect, ReactNode } from 'react';
import { FavoritesContext, FavoriteItem } from './FavoritesContext';

type FavoritesProviderProps = {
  children: ReactNode;
};

export const FavoritesProvider = ({ children }: FavoritesProviderProps) => {
  const [favorites, setFavorites] = useState<FavoriteItem[]>(() => {
    const savedFavorites = localStorage.getItem('favorites');
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const addFavorite = (item: FavoriteItem) => {
    setFavorites((prevFavorites) => {
      
      if (prevFavorites.some((fav) => fav.id === item.id && fav.type === item.type)) {
        return prevFavorites;
      }
      return [...prevFavorites, item];
    });
  };

  const removeFavorite = (id: number, type: string) => {
    setFavorites((prevFavorites) => 
      prevFavorites.filter((item) => !(item.id === id && item.type === type))
    );
  };

  const isFavorite = (id: number, type: string) => {
    return favorites.some((item) => item.id === id && item.type === type);
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite, isFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};
