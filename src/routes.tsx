import { createBrowserRouter, RouteObject } from "react-router-dom";
import RootLayout from "./root"
import HomePage from "./pages/HomePage";
import UsersPage, { UsersLoader } from "./pages/UsersPage";
import FavoritesPage from "./pages/FavoritesPage";
import UserDetailPage, { userDetailData } from "./pages/UserDetailPage";
import PostPage, { PostDataLoader } from "./pages/PostPage";
import AlbumPage, { AlbumDataLoader } from "./pages/AlbumPage";
import TodosPage, { TodoDataLoader } from "./pages/TodosPage";
import AlbumDetailPage, { albumDetailsLoader } from "./pages/AlbumDetailPage";
import PostDetailPage, { postLoader } from "./pages/PostDetailPage";

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
        path: "/Users",
        element: <UsersPage />,
        loader: UsersLoader,
      },
      {
        path: "/Users/:userId",
        element: <UserDetailPage />,
        loader: userDetailData,
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
        path: "/Favorites",
        element: <FavoritesPage />,
      },
      {
        path: "users/:userId/albums/:albumId",
        element: <AlbumDetailPage />,
        loader: albumDetailsLoader,
      },
      {
        path: "users/:userId/posts/:postId",
        element: <PostDetailPage/>,
        loader: postLoader
      }
    ],
  },
];

export const router = createBrowserRouter(routes);