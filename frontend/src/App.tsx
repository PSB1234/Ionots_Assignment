import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ProjectList } from './client/components/ProjectList';
import { Header } from './client/components/Header';
import { useProjects } from './client/hooks/useProjects';
import Login from './components/Login';
import Signup from './components/SignUp';

function App() {
  const { projects, loading, error, assignProject } = useProjects();

  if (loading) {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>;
  }

  if (error) {
    return <div className="flex items-center justify-center min-h-screen text-red-600">{error}</div>;
  }

  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Header />
        <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
          <Routes>
            <Route path="/" element={<Login/>} />
            <Route path="/dashboard" element={<ProjectList projects={projects} onAssign={assignProject} />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
