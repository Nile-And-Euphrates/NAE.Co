import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Works from "./pages/Works"
import Details from './pages/Details';
import "./App.css"
import Error404 from './pages/Error404';
import Adminpanal from './pages/Adminpanal';
import Main from './pages/main';
import Addproduct from './pages/AddProduct';
import Edit from './pages/Edit';
function App() {
    return (
    <Router>
        <Routes>
            <Route path="NAE.Co/" element={<Home />} />
            <Route path="/works" element={<Works/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/*" element={<Error404/>}></Route>
            <Route path='/Product/:id' element={<Details/>}></Route>
            <Route path='/admin-a5o6s8dfg5f5h56e1c5sd' element={<Main/>}></Route>
            <Route path='/admin-a5o6s8dfg5f5h56e1c5sd/edit' element={<Adminpanal/>}></Route>
            <Route path='/admin-a5o6s8dfg5f5h56e1c5sd/editproduct/:id' element={<Edit/>}></Route>
            <Route path='/admin-a5o6s8dfg5f5h56e1c5sd/addproduct' element={<Addproduct/>}></Route>
        </Routes>
    </Router>
    );
}

export default App;
