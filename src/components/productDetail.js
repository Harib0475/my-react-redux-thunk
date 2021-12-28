import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import {
  fetchProductDetail,
  removeSelectedProduct,
} from "../redux/product/actions/productActions";

const ProductDetailComponent = () => {
  const product = useSelector((state) => state.product);

  const { productId } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    if (productId && productId !== "") {
      dispatch(fetchProductDetail(productId));
    }
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [productId]);

  return (
    <div>
      {product.title ? (
        <div className="ui link cards">
          <div className="card">
            <div className="image">
              <img src={product.image} alt={product.title} />
            </div>
            <div className="content">
              <div className="header">{product.title}</div>
              <div className="meta price">{product.price}</div>
              <div className="meta">{product.category}</div>
            </div>
          </div>
        </div>
      ) : (
        <div className="ui link cards">
          <div className="card">
            <div className="image">"Loading..."</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetailComponent;
