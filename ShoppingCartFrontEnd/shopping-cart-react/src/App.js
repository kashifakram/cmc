import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import ProductsList from './components/ProductsList';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<ProductsList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
