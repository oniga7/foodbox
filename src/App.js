import './App.css';
import Bar from './components/HomePage/AppBar';
import Login from './components/Login/Login';
import UserLogin from './components/Login/UserLogin';
import Registration from './components/Login/Registration';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Admin from './components/AdminDashboard/AdminDashboard';
import Home from './components/HomePage/Home';
import {useState} from 'react'
import Cart from './components/Cart/Cart';

function App() {
  const [data, setData] = useState([])
  const [customerEmail, setCustomerEmail] = useState('')

  return (
    <Router>
      <div className="App">
        <Bar setData={setData}/>
        <div className='content'>
          <Routes>
            <Route exact path="/" element={<Home data={data} />}>
            </Route>
            <Route exact path="/cart" element={<Cart customerEmail={customerEmail}/>}>
            </Route>
            <Route exact path="/login" element={<Login />}>
            </Route>
            <Route exact path="/userlogin" element={<UserLogin setCustomerEmail={setCustomerEmail}/>}>
            </Route>
            <Route exact path="/signin" element={<Registration />}>
            </Route>
            <Route exact path="/admin" element={<Admin />}>
            </Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
