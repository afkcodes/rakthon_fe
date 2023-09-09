import { createBrowserRouter } from 'react-router-dom';
import Create from '../pages/Create';
import Landing from '../pages/Landing';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Landing />,
  },
  {
    path: '/create',
    element: <Create />,
  },
]);
