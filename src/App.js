import './App.css';
import Login from './pages/Login';
import Registration from './pages/Registration';
import { Navigate,Route,Routes } from 'react-router-dom'
function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Navigate to ='/login' replace />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/registration' element={<Registration />}/>
      </Routes>
  
    </div>
  );
}

export default App;
