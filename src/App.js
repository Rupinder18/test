import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/home/Home';
import Users from './components/users/Users';
import Posts from './components/posts/Posts';
import NewUser from './components/newUser/NewUser';
import EditUser from './components/editUser/EditUser';
import EditPost from './components/posts/EditPost';

function App() {
  return (
    <div className="App">
     <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/users' element={<Users/>} />
      <Route path='/posts' element={<Posts/>} />
      <Route path='/newuser' element={<NewUser/>}/>
      <Route path='/edituser/:id' element={<EditUser/>} />
      <Route path='/editpost/:id' element={<EditPost/>} />
     </Routes>
    </div>
  );
}

export default App;
