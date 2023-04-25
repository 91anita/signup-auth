
import Login from "./components/Login";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Home from "./components/home";
function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/home' element={<Home/>}/>
      <Route path='/' element={<Login/>}/>
    </Routes>
      
    </BrowserRouter>
  );
}

export default App;
