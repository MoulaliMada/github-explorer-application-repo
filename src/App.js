import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import HomeScreen from "./components/HomeScreen";
import DetailsScreen from "./components/DetailsScreen";
import FavoritesScreen from "./components/FavoritesScreen";
import { ThemeProvider } from "./context/ThemeContext";
//import './styles/App.css';

export default function App() {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <Router>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/details/:id" element={<DetailsScreen />} />
            <Route path="/favorites" element={<FavoritesScreen />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </Provider>
  );
}
