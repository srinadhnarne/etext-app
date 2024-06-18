import './App.css';
import {Route, Routes} from 'react-router-dom'
import PageNotFound from './pages/PageNotFound';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import ForgotPassword from './pages/auth/ForgotPassword';

function App() {
  return (
    <Routes>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/forgot-password' element={<ForgotPassword/>}/>
      <Route path='/*' element={<PageNotFound/>}/>
    </Routes>
  );
}

export default App;
