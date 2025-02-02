import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Projects from './pages/Projects.tsx';
import Home from './pages/Home.tsx';
import Skills from './pages/Skills.tsx';
import MainLayout from './layouts/MainLayout';
import Contact from './pages/Contact.tsx';
import { ThemeProvider } from '../src/components/theme-provider.tsx';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Routes>
          <Route
            path="/"
            element={
              <MainLayout>
                <Home />
              </MainLayout>
            }
          />
          <Route
            path="/proyectos"
            element={
              <MainLayout>
                <Projects />
              </MainLayout>
            }
          />
          <Route
            path="/habilidades"
            element={
              <MainLayout>
                <Skills />
              </MainLayout>
            }
          />
          <Route
            path="/contacto"
            element={
              <MainLayout>
                <Contact />
              </MainLayout>
            }
          />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
