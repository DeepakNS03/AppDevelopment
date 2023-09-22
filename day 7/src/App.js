import './App.css';
import Login from './Components/Login';
import { BrowserRouter, Routes ,Route} from 'react-router-dom';
import Register from './Components/Register';
import AdminBars from './Components/adminHome';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
       <Routes>
       <Route path="/" element ={<Login />}></Route>
       <Route path="/register" element ={<Register />}></Route>
       <Route path='/adminDash' element={<AdminBars />}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
