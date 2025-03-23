import { createContext } from 'react';

export type FavoriteItem = {
  id: number;
  type: 'user' | 'post' | 'album' | 'todo';
  title: string;
  userId?: number;
};

type FavoritesContextType = {
  favorites: FavoriteItem[];
  addFavorite: (item: FavoriteItem) => void;
  removeFavorite: (id: number, type: string) => void;
  isFavorite: (id: number, type: string) => boolean;
};

export const FavoritesContext = createContext<FavoritesContextType>({
  favorites: [],
  addFavorite: () => {},
  removeFavorite: () => {},
  isFavorite: () => false,
});
