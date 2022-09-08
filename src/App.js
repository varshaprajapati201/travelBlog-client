
import './App.css';
import { Home } from './pages/Home/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import {Compose} from "./pages/Compose/components/Compose"
import {Contact} from "./pages/Contact/components/Contact"
import { BlogArchive } from './pages/Blog-Archive/BlogArchive';
import { EditArticle } from './pages/Blog-Archive/EditArticle';


function App() {
  return (<div>

   <Routes>
      <Route path="/Compose" element={<Compose />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/" element={<Home />} />
      <Route path="/BlogArchive" element={<BlogArchive />} />
      <Route path="/edit/:id" element={<EditArticle />} />
   </Routes>
  
    
  
    
  </div>);
}

export default App;
