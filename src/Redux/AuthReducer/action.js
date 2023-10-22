import axios from "axios";
import {
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  APPLY_PROMO,
  REMOVE_PROMO,
  LOGOUT,
  ADD_ADDRESS,
  EMPTY_CART,
  PAYMENT_SUCCESS,
} from "./actionType";

export const loginSuccess = (payload) => {
  return {
    type: LOGIN_SUCCESS,
    payload: payload
  }
};
export const loginRequest = () => {
  return {
    type: LOGIN_REQUEST,
  }
};
export const loginFailure = (payload) => {
  return {
    type: LOGIN_FAILURE,
    payload: payload

  }
};
export const addPromoAction = (payload) => {
  return {
    type: APPLY_PROMO,
    payload: payload
  };
}
export const removePromoAction = () => {
  return {
    type: REMOVE_PROMO,
  }
}
export const addAddressAction = (payload) => {
  return {
    type: ADD_ADDRESS,
    payload: payload
  }
}
export const emptyCart = () => {
  return {
    type : EMPTY_CART
  }
}
export const paymentSuccessAction = () => {
  return {
    type: PAYMENT_SUCCESS
  }
}