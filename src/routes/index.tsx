import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NotFound from '../pages/NotFoundPage';
import HomePage from '../pages/HomePage';
import BlogPage from '../pages/BlogPage';
import BlogPostPage from '../pages/BlogPage/[slug]';
import AboutPage from '../pages/AboutPage';
import ContactPage from '../pages/ContactPage';

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/sobre' element={<AboutPage/>} />
        <Route path='/contato' element={<ContactPage/>} />
        <Route path="/articles" element={<BlogPage />} />
        <Route path="/article/:slug" element={<BlogPostPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;