import "./css/App.css";
import { BrowserRouter, Router } from "react-router-dom";
import { Home } from "./page/home";


// solution the problem between pages
// create the form for save the book 
// correct json responses 

function App() {
  return (
    <>
      <BrowserRouter>
          <Router path="/"> <Home /> </Router> 
      </BrowserRouter>
    </>
  ) 
}

export default App;
