import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProductsPage from "./pages/ProductsPage";
import ProductPage from "./pages/ProductPage";
import MainLayout from "./layouts/MainLayout";
import NotFoundPage from "./pages/NotFoundPage";
import FavoritePage from "./pages/favoritPage";
import UsersPage from "./pages/UsersPage";
import { usersLoader } from "./pages/usersLoader";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
        { index: true, element: <HomePage /> },
      { path: 'products', element: <ProductsPage /> },
      { path: 'products/:id', element: <ProductPage /> },
      { path: 'about', element: <AboutPage /> },
      { path: 'favorites', element: <FavoritePage /> },
      
      { 
        path: 'users', 
        element: <UsersPage />,
        loader: usersLoader 
      },
      
      { path: '*', element: <NotFoundPage /> }

    ]
  }
]);
