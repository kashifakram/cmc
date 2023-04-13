import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import ProductsList from './components/ProductsList';
import ThankYou from './components/ThankYou';
import Checkout from './components/Checkout';

const POSTS = [
  {Id: 1, title: "Post 1"},
  {Id: 2, title: "Post 2"}
]

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<ProductsList />} />
            <Route path="/thankyou" element={<ThankYou />} />
            <Route path="/checkout" element={<Checkout />} />
          </Route>
        </Routes>
      </BrowserRouter>
  );
}

function wait(duration) {
  return new Promise((resolve, reject) => setTimeout(resolve, duration))
}

export default App;
