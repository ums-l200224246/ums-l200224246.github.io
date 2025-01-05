import { createHashRouter } from 'react-router-dom'; // Use HashRouter
import Layout from '../components/Layout';
import Home from '../pages/Home';
import Projects from '../pages/Projects';
import Blog from '../pages/Blog';
import BlogPost from '../pages/BlogPost';
import Contact from '../pages/Contact';

export const router = createHashRouter(
  [
    {
      path: '/',
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: 'projects', element: <Projects /> },
        { path: 'blog', element: <Blog /> },
        { path: 'blog/:id', element: <BlogPost /> },
        { path: 'contact', element: <Contact /> },
      ],
    },
  ],
  {
    future: {
      // v7_startTransition: true,
      v7_relativeSplatPath: true,
    },
  }
);
