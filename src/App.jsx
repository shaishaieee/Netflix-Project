import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/pages/login/Login";
import Home from "./components/pages/home/Home";
import Movie from "./components/pages/movie/Movie";


function App() {

  return (
    <>
     <Router>
      <Routes>
      <Route path="/login" element={<Login/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/movie" element={<Movie/>}/>
      </Routes>
     </Router>
    </>
  )
}

export default App
