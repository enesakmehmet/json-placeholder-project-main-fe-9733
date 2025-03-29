import { createBrowserRouter, RouteObject } from "react-router-dom";
import RootLayout from "./root"
import HomePage from "./pages/HomePage";
import UsersPage from "./pages/UsersPage";
import FavoritesPage from "./pages/FavoritesPage";
import UserDetailPage from "./pages/UserDetailPage";
import PostPage, { PostDataLoader } from "./pages/PostPage";
import AlbumPage, { AlbumDataLoader } from "./pages/AlbumPage";
import TodosPage, { TodoDataLoader } from "./pages/TodosPage";
import AlbumDetailPage, { albumDetailsLoader } from "./pages/AlbumDetailPage";
import PostDetailPage, { postLoader } from "./pages/PostDetailPage";
import { usersLoader, userDetailLoader } from "./loaders/userLoaders";
import DraggableAlbumPage, { DraggableAlbumDataLoader } from "./pages/DraggableAlbumPage";
import DraggablePostPage, { DraggablePostDataLoader } from "./pages/DraggablePostPage";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/users",
        element: <UsersPage />,
        loader: usersLoader,
      },
      {
        path: "/users/:userId",
        element: <UserDetailPage />,
        loader: userDetailLoader,
        children: [
          {
            path: "posts",
            element: <PostPage />,
            loader: PostDataLoader,
          },
          {
            path: "albums",
            element: <AlbumPage />,
            loader: AlbumDataLoader,
          },
          {
            path: "todos",
            element: <TodosPage />,
            loader: TodoDataLoader,
          },
        ],
      },
      {
        path: "/favorites",
        element: <FavoritesPage />,
      },
      {
        path: "/users/:userId/albums/:albumId",
        element: <AlbumDetailPage />,
        loader: albumDetailsLoader,
      },
      {
        path: "/users/:userId/posts/:postId",
        element: <PostDetailPage/>,
        loader: postLoader
      },
      {
        path: "/users/:userId/draggable-albums",
        element: <DraggableAlbumPage />,
        loader: DraggableAlbumDataLoader,
      },
      {
        path: "/users/:userId/draggable-posts",
        element: <DraggablePostPage />,
        loader: DraggablePostDataLoader,
      }
    ],
  },
];

export const router = createBrowserRouter(routes);