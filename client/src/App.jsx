import "./css/App.css";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { Home } from "./page/home";
import { SaveBook } from "./page/SaveBook";

// create the form for save the book
// correct json responses

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AddBook" element={<SaveBook />} />
      </Routes>
    </BrowserRouter>
  );
}

function Navigation() {
  return (
    <nav className="navigation">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/AddBook">AddBook</Link>
        </li>
      </ul>
    </nav>
  );
}

export { App };
