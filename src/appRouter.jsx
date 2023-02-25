import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import BoardPage from './pages/boardPage';
import BoardsPage from './pages/boardsPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/boards',
    element: <BoardsPage />,
  },
  {
    path: '/board/:id',
    element: <BoardPage id={id} />,
  },
]);

export default router;
