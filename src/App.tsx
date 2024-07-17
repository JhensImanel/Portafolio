import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Experience from './pages/Experience.tsx';
import Projects from './pages/Projects.tsx';
import Home from './pages/Home.tsx';
import Skills from './pages/Skills.tsx';
import MainLayout from './layouts/MainLayout';
import Contact from './pages/Contact.tsx';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout><Home /></MainLayout>} />
        <Route path="/proyectos" element={<MainLayout><Projects /></MainLayout>} />
        <Route path="/experiencia" element={<MainLayout><Experience /></MainLayout>} />
        <Route path="/habilidades" element={<MainLayout><Skills /></MainLayout>} />
        <Route path="/contacto" element={<MainLayout><Contact /></MainLayout>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
