import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Error from "./pages/error/Error";
import Lodging from "./pages/lodging/Lodging";
import { PropertyProvider } from "./context/PropertyContext";

function App() {
  return (
    <PropertyProvider>
      <BrowserRouter>
        <div className="app">
          <div className="wrapper">
            <main className="main-container">
              <Header />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/lodging/:id" element={<Lodging />} />
                <Route path="/*" element={<Error />} />
              </Routes>
            </main>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    </PropertyProvider>
  );
}

export default App;
