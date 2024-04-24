import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/pages/login/Login";
import Home from "./components/pages/home/Home";


function App() {

  return (
    <>
     <Router>
      <Routes>
      <Route path="/login" element={<Login/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/movie" element={<h1>Movie</h1>}/>
      </Routes>
     </Router>
    </>
  )
}

export default App
