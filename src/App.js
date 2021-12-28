import "./App.css";
import HeaderComponent from "./components/header";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import ProductsListingComponent from "./components/productListing";
import ProductDetailComponent from "./components/productDetail";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <HeaderComponent />
        <Routes>
          <Route path="/" element={<ProductsListingComponent />} exact />
          <Route
            path="/product/:productId"
            element={<ProductDetailComponent />}
            exact
          />
          <Route>404 Not Found</Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
