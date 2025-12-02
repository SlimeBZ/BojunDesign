import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Home from '../pages/Home';
import Projects from '../pages/Projects';
import ProjectDetail from '../pages/ProjectDetail';
import About from '../pages/About';
import Contact from '../pages/Contact';
import MainLayout from '../layout/MainLayout';
import PageTransition from '../layout/PageTransition';

const AppRoutes = () => {
  const location = useLocation();

  return (
    <MainLayout>
      <PageTransition locationKey={location.pathname}>
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:slug" element={<ProjectDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </PageTransition>
    </MainLayout>
  );
};

const AppRouter = () => (
  <BrowserRouter basename="/bojundesign">
    <AppRoutes />
  </BrowserRouter>
);

export default AppRouter;
