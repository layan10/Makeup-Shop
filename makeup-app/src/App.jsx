import './App.css'
import {HomePage,ProductsPage,ProductPage,EditPage,CartPage,NotFoundPage} from './pages'
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import RootLayout from './components/Layout/Layout';
import { UsersProvider } from "./contexts/UsersContext";

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
              element: <EditPage />,
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
        <RouterProvider router={router}/>
      </UsersProvider>
    </div>
  )
}

export default App;
