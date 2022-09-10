
import './App.css';
import { Home } from './pages/Home/Home';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import {Compose} from "./pages/Compose/components/Compose"
import {Contact} from "./pages/Contact/components/Contact"
import { BlogArchive } from './pages/Blog-Archive/BlogArchive';
import { EditArticle } from './pages/Blog-Archive/EditArticle';
import Navbar from './shared/Header';


function App() {
  return (<div>
<BrowserRouter>
<Navbar />
   <Routes>
      <Route path="/add" element={<Compose />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/" element={<Home />} />
      <Route path="/all" element={<BlogArchive />} />
      <Route path="/edit/:id" element={<EditArticle />} />
   </Routes>
   </BrowserRouter>
  </div>);
}

export default App;
