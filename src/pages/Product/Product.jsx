import React, { useEffect, useState } from "react";
import "./Product.scss";
import { AddShoppingCart, FavoriteBorder, Balance } from "@mui/icons-material";
import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartReducer";
import { motion } from "framer-motion";
import { Alert, Snackbar } from "@mui/material";

const Product = () => {
  const id = useParams().id;
  const [selectedImg, setSelectedImg] = useState("img");
  const [quantity, setQuantity] = useState(1);
  const { data, loading, error } = useFetch(`/products/${id}?populate=*`);
  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(
      addToCart({
        id: data.id,
        title: data.attributes.title,
        desc: data.attributes.desc,
        price: data.attributes.price,
        img: data.attributes.img.data.attributes.url,
        quantity,
      })
    );
    setOpen(true);
  };

  const [open, setOpen] = useState(false);



  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <motion.div
      className="product"
      initial={{ opacity: 0, x: "-100vh" }}
      animate={{ opacity: 1, x: 0 }}
      // transition={{ type: 'spring', bounce: 0.6 }}
    >
      <div className="left">
        <div className="images">
          <img
            src={
          
              data?.attributes?.img?.data?.attributes?.url
            }
            alt=""
            onClick={(e) => setSelectedImg("img")}
          />
          <img
            src={
             
              data?.attributes?.img2?.data?.attributes?.url
            }
            alt=""
            onClick={(e) => setSelectedImg("img2")}
          />
        </div>
        <div className="mainImg">
          <img
            src={
              process.env.REACT_APP_UPLOAD_URL +
              data?.attributes?.[selectedImg]?.data?.attributes?.url
            }
            alt=""
          />
        </div>
      </div>
      <div className="right">
        <h2>{data?.attributes?.title}</h2>
        <span className="price">$ {data?.attributes?.price}</span>
        <p>{data?.attributes?.desc}</p>
        <div className="quantity">
          <button
            onClick={() =>
              setQuantity((prev) => (prev === 1 ? prev : prev - 1))
            }
          >
            -
          </button>
          {quantity}
          <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
        </div>
        <button className="add" onClick={handleAdd}>
          <AddShoppingCart /> ADD TO CART
        </button>
        <div className="links">
          <div className="item">
            <FavoriteBorder /> ADD TO WISHLIST
          </div>
          <div className="item">
            <Balance /> ADD TO COMPARE
          </div>
        </div>
        <div className="info">
          <span>Vendor: Polo</span>
          <span>Product Type: T-shirt</span>
          <span>Tag: T-shirt, Women, Top</span>
        </div>
        <hr />
        <div className="info">
          <span>DESCRIPTION</span>
          <hr />
          <span>ADDITIONAL INFORMATION</span>
          <hr />
          <span>FAQ</span>
        </div>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}   anchorOrigin={{ vertical: "top", horizontal: "right" }}>
          <Alert
            onClose={handleClose}
            severity="success"
            sx={{ width: "100%" }}
          
          >
           
            {quantity } piece of {data?.attributes?.title.substring(0, 20)}...
          </Alert>
        </Snackbar>
      </div>
    </motion.div>
  );
};

export default Product;
