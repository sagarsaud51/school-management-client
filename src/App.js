import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch,Routes } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Login from './Login';
import Register from './Register';
import Home from './Home';
function App() {
  return (
    <div className="App">
      <ToastContainer theme="colored"></ToastContainer>
      <Router>
<Routes>
  <Route path='/' element={<Home/>}></Route>
  <Route path='/login' element={<Login/>}></Route>
  <Route path='/register' element={<Register/>}></Route>
</Routes>
      </Router>
    </div>
  );
}

export default App;
