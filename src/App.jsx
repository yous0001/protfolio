// App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import MainPage from './pages/MainPage';
import NotFound from './pages/NotFound';
import ProjectDetail from './pages/ProjectDetails';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 transition-colors duration-300 flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/project/:id" element={<ProjectDetail />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;