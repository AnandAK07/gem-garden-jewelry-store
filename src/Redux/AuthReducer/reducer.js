import React from "react";
import {
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT,
} from "./actionTypes";

const initialState = {
  cart: [],
  isAuth: false,
  token: "",
  loading: false,
  error: null,
  success: false,
};

export const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN_REQUEST: {
      return {
        ...state,
        token: "",
        isAuth: false,
        loading: false,
        error: null,
        success: false,
      };
    }
    case LOGIN_SUCCESS: {
      return {
        ...state,
        token: action.payload,
        isAuth: true,
        loading: false,
        error: null,
        success: true,
      };
    }
    case LOGIN_FAILURE: {
      return {
        ...state,
        token: "",
        isAuth: false,
        loading: false,
        error: action.payload,
        success: false,
      };
    }
    default:
      return state;
  }
};
