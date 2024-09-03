import React from "react";
import GlobalRoute from "./routes/GlobalRoute";
import { Route, Routes } from "react-router-dom";
import { Provider } from 'react-redux';

import store from './redux/store'; // Import your Redux store

const App = () => {
  return (
    <>
    <Provider store={store}>
      <Routes basename="/netlify.app">
        <Route path="*" element={<GlobalRoute />} />
      </Routes>
      </Provider>
    </>
  );
};

export default App;
