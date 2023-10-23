import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import Products from "../Pages/Products";
import ProductDetails from '../Pages/ProductDetails'
import Login from "../Authentication/Login"
import SignUp from "../Authentication/SignUp"
import Cart from "../Pages/Cart";
import PrivateRoutes from "./PrivateRoutes";
import Payments from "../Pages/Payments";
import PaymentSuccess from "../Pages/PaymentSuccess";


const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route
        path="/products"
        element={
          <PrivateRoutes>
            {" "}
            <Products />
          </PrivateRoutes>
        }
      />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route
        path="/cart"
        element={
          <PrivateRoutes>
            <Cart />
          </PrivateRoutes>
        }
      />
      <Route path="pay" element={<PrivateRoutes>
        <Payments />
      </PrivateRoutes>}>
        <Route path="success" element={<PrivateRoutes><PaymentSuccess /></PrivateRoutes>} />
      </Route>
      <Route path="/products/:id" element={<ProductDetails/>}/>
    </Routes>
  );
};

export default AllRoutes;
