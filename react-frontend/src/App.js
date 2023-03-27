import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import {useState} from 'react';

import {Landing} from './Landing';
import {CreateDatabase} from './CreateDatabase';
import {GetPosts} from './GetPosts';
import {AddPosts} from './AddPosts';

function App() {   
  const [getPosts, setPosts] = useState([]);
  if(getPosts.length <1) {fetch('http://localhost:8080/getPosts')
  .then(response => response.json())
  .then(response => setPosts(response))};
  
  return (
    <div className="App">
      <header className="App-header">  
        <div>
        <Router>
        <Link to="/createDatabase">  <button> Initialize Database </button> </Link> <br></br> 
        <Link to="/getPosts">  <button> Show Posts </button> </Link>
        <Link to="/addPosts">  <button> Add Posts </button>   </Link>
         <Routes>
          <Route exact path='/' element={<Landing/>} />
          <Route path="/createDatabase" element={<CreateDatabase set = {setPosts} />} />
          <Route path="/getPosts" element={<GetPosts get = {getPosts} />} />
          <Route path="/addPosts" element={ <AddPosts set = {setPosts} /> } />
          </Routes>
        </Router>
        </div>
      
      </header>

      </div>
  );
}

export default App;
