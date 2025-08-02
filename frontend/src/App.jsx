import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import { useNavigate } from 'react-router-dom';

function App() {
  const navigate = useNavigate();

  const handleLogin = (data) => {
    console.log('Logged in:', data);
    // optionally redirect after login
    navigate('/');
  };

  const handleRegister = (data) => {
    console.log('Registered:', data);
    navigate('/login');
  };

  const handleCreate = (listing) => {
    console.log('Created listing:', listing);
    navigate('/');
  };

  return (
    <div className="App">
      <Header />
      <main>
        <Outlet context={{ handleLogin, handleRegister, handleCreate }} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
