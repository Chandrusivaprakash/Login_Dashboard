import { Route, Routes } from 'react-router-dom';
import './App.css';
import LoginForm from './LoginForm';
import RegistrationForm from './RegistrationForm';
import Dashboard from './Dashboard';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<RegistrationForm/>}/>
        <Route path='/login' element={<LoginForm/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
      </Routes>
    </div>
  );
}


export default App;
