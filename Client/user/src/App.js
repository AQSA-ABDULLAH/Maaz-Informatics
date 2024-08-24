import react from "react";
import { BrowserRouter as Router } from "react-router-dom";
import './App.css';
import AppRoutes from "./routes/Routes";

function App() {
  return (
    <Router>
      <AppRoutes/>
    </Router>
  );
}

export default App;
