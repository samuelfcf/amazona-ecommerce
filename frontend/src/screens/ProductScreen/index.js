import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import Rating from "../../components/Rating";
import LoadingBox from "../../components/LoadingBox";
import MessageBox from "../../components/MessageBox";
import { detailsProducts } from "../../actions/productsActions";

const ProductScreen = (props) => {
  const dispatch = useDispatch();
  const productId = props.match.params.id;
  const productDetails = useSelector((state) => state.productDetails);
  const [qty, setQty] = useState(1);
  const { loading, error, product } = productDetails;

  useEffect(() => {
    dispatch(detailsProducts(productId));
  }, [dispatch, productId]);

  const addToCartHandler = () => {
    props.history.push(`/cart/${productId}?qty=${qty}`);
  }

  return (
    <>
      <div>
        {loading ? (
          <LoadingBox></LoadingBox>
        ) : error ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
          <>
            <Link to="/">Back to results</Link>

            <div className="row top">
              <div className="col-2">
                <img className="large" src={product.image} alt={product.name} />
              </div>

              <div className="col-1">
                <ul>

                  <li>
                    <h1>{product.name}</h1>
                  </li>

                  <li>
                    <Rating
                      rating={product.rating}
                      numReviews={product.numReviews}
                    />
                  </li>

                  <li>Price: ${product.price}</li>

                  <li>
                    Description:
                    <p>{product.description}</p>
                  </li>

                </ul>
              </div>

              <div className="col-1">
                <div className="card card-body">
                  <ul>
                    <li>
                      <div className="row">
                        <div>Price</div>
                        <div className="price">${product.price}</div>
                      </div>
                    </li>

                    <li>
                      <div className="row">
                        <div>Status</div>
                        <div className="price">
                          {product.countInStock > 0 ? (
                            <span className="sucess">In Stock</span>
                          ) : (
                            <span className="danger">Unavailable</span>
                          )}
                        </div>
                      </div>
                    </li>

                    <li>
                      {product.countInStock > 0 && (
                        
                        <>
                        
                        <div className="row">
                          <div>Qnt</div>
                          <div>
                            <select value={qty} onChange={e => setQty(e.target.value)}>
                              {
                                [...Array(product.countInStock).keys()].map(x => (
                                  <option key={x + 1} value={x+1}>{x+1}</option>
                                ))
                              }
                            </select>
                          </div>
                        </div>



                        <li>
                          <button onClick={addToCartHandler} className="primary block">Add to Cart</button>
                        </li>

                        </>
                      )}

                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default ProductScreen;
