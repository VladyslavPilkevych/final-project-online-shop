import React from "react";
import './App.scss';
import AppRoutes from './Routes/Routes';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

var qwe = "123"
function App() {
  return (
    <div className="App">
      <Header />
      <AppRoutes />
      <Footer />
    </div>
  );
}
export default App;