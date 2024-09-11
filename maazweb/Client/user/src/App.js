import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import { Provider } from 'react-redux';
import store from './redux/store';

import AppRoutes from "./routes/Routes.js";
import { BookingProvider } from "./context/booking.js";
function App() {
  return (
    <Provider store={store}>
      <BookingProvider>
      <Router>
        <AppRoutes />
      </Router>
      </BookingProvider>
    </Provider>

  );
}

export default App;
