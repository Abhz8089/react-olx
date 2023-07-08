import React,{useEffect,useContext} from 'react';
import './App.css';
import Home from "./Pages/Home";
import { BrowserRouter as Router , Route,Routes } from "react-router-dom";
import Signup from './Pages/Signup'
import Login from "./Pages/Login";
import Create from "./Pages/Create";
import { AuthContext, FirebaseContext } from './store/FirebaseContext';

function App() {
  const {setUser} = useContext(AuthContext)
  const {firebase} = useContext(FirebaseContext)
  useEffect(() => {
    
    firebase.auth().onAuthStateChanged((user)=>{
      
      setUser(user)
    })
    
  }, [])
  
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Routes>
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
        <Routes>
          <Route path="/create" element={<Create />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
