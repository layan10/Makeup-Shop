import './App.css'
import {HomePage,ProductsPage,ProductPage,EditPage,CartPage,NotFoundPage,EditProductPage} from './pages'
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import RootLayout from './components/Layout/Layout';
import { UsersProvider } from "./contexts/UsersContext";
import {ProductsProvider} from './contexts/ProductsContext';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <HomePage />
        },
        {
          path: 'products',
          children: [
            {
              index: true,
              element: <ProductsPage />,
            },
            {
              path: ':productId',
              element: <ProductPage />,
            },
            {
              path: 'edit',
              children: [{
                index: true,
                element: <EditPage />
              },
              {
                path: ':productId',
                element: <EditProductPage />
              }]
            },
            {
              path: 'cart',
              element: <CartPage />,
            }
          ],
        },
        {
          path: '*',
          element: <NotFoundPage />
        }
      ]
    }
  ]);

  return (
    <div className='app'>
      <UsersProvider>
        <ProductsProvider>
          <RouterProvider router={router}/>
        </ProductsProvider>
      </UsersProvider>
    </div>
  )
}

export default App;
