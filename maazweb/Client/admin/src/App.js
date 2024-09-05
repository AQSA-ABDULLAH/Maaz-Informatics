import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from 'react-redux';
import GlobalRoute from "./routes/GlobalRoute";
import store from './redux/store'; // Import your Redux store

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="*" element={<GlobalRoute />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;

