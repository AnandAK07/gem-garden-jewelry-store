import axios from "axios";
import {
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT,
} from "./actionTypes";

export const loginSuccess = (payload) => {
  return{
    type:LOGIN_SUCCESS,
    payload:payload
  }
};
export const loginRequest = () => {
  return{
    type:LOGIN_REQUEST,
  }
};
export const loginFailure = (payload) => {
  return{
    type:LOGIN_FAILURE,
    payload:payload

  }
};