import { useDispatch } from "react-redux";
import ProductComponent from "./product";
import { useEffect } from "react";
import { fetchProducts } from "../redux/product/actions/productActions";
const ProductsListingComponent = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <div className="ui grid container">
      <ProductComponent />
    </div>
  );
};

export default ProductsListingComponent;
