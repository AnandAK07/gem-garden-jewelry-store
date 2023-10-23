
import axios from "axios";
import {
  GET_DATA_REQUEST,
  GET_DATA_SUCCESS,
  GET_DATA_ERRORGET_DATA_SUCCESS,
  GET_DATA_ERROR,
  GET_SINGLE_DATA_LOADING,
  GET_SINGLE_DATA_SUCCESS,
  GET_SINGLE_DATA_ERROR,
  GET_DATA_SUCCESS_J,
  GET_DATA_ERROR_J,
  GET_SINGLE_DATA_LOADING_J,
  GET_SINGLE_DATA_SUCCESS_J,
  GET_DATA_SUCCESS_E,
  GET_DATA_ERROR_E,
  GET_SINGLE_DATA_LOADING_E,
  GET_SINGLE_DATA_SUCCESS_E,
} from "./actionType";

const baseUrl = `https://gem-garden-jewelry-store-api.onrender.com/jewelry`;
const getDataRequest = () => {
  return { type: GET_DATA_REQUEST };
};

const getDataSuccess = (payload) => {
  return { type: GET_DATA_SUCCESS, payload: payload };
};

// <<<<<<< HEAD
// const getDataError = () => {
//   return { type: GET_DATA_ERROR };
// };
// export const getData = async (dispatch) => {
//   try {
//     dispatch(getDataRequest());
//     const res = await axios.get(baseUrl);
//     // console.log(res.data)
//     dispatch(getDataSuccess(res.data));
//   } catch (error) {
//     dispatch(getDataError());
//   }
// };
// =======
const getDataError=()=>{
    return {type:GET_DATA_ERROR}
}
export const getData=(currentPage,limit)=>async(dispatch)=>{
    try {
        dispatch(getDataRequest())
        const res=await axios.get(`${baseUrl}?_page=${currentPage}&_limit=${limit}`);
        // console.log(res.data)
        dispatch(getDataSuccess(res.data))
    } catch (error) {
        dispatch(getDataError())
    }
}
// >>>>>>> f4da83c5bab0f73ce5805c0dd74e315faf34b8ca

export const getSingleProduct = (id) => async (dispatch) => {
  try {
    dispatch({ type: GET_SINGLE_DATA_LOADING });
    const res = await axios.get(
      `https://gem-garden-jewelry-store-api.onrender.com/jewelry/${id}`
    );
    console.log(res.data);
    dispatch({ type: GET_SINGLE_DATA_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: GET_DATA_ERROR });
  }
};

// Actions for Necklaces

const baseUrl_J = `https://gem-garden-jewelry-store-api.onrender.com/jewelry?category=Necklaces`;
const GET_DATA_REQUEST_J = () => {
  return { type: GET_DATA_REQUEST_J };
};

const getDataSuccess_J = (payload) => {
  return { type: GET_DATA_SUCCESS_J, payload: payload };
};

const getDataError_J = () => {
  return { type: GET_DATA_ERROR_J };
};
export const getData_J = async (dispatch) => {
  try {
    dispatch(GET_DATA_REQUEST_J());
    const res = await axios.get(baseUrl_J);
    // console.log(res.data)
    dispatch(getDataSuccess_J(res.data));
  } catch (error) {
    dispatch(getDataError_J());
  }
};

export const getSingleProduct_J = (id) => async (dispatch) => {
  try {
    dispatch({ type: GET_SINGLE_DATA_LOADING_J });
    const res = await axios.get(
      `https://gem-garden-jewelry-store-api.onrender.com/jewelry/${id}`
    );
    console.log(res.data);
    dispatch({ type: GET_SINGLE_DATA_SUCCESS_J, payload: res.data });
  } catch (error) {
    dispatch({ type: GET_DATA_ERROR_J });
  }
};

// Actions for Earings

const baseUrl_E = `https://gem-garden-jewelry-store-api.onrender.com/jewelry?category=Earrings`;
const GET_DATA_REQUEST_E = () => {
  return { type: GET_DATA_REQUEST_E};
};

const getDataSuccess_E = (payload) => {
  return { type: GET_DATA_SUCCESS_E, payload: payload };
};

const getDataError_E = () => {
  return { type: GET_DATA_ERROR_E };
};
export const getData_E = async (dispatch) => {
  try {
    dispatch(GET_DATA_REQUEST_E());
    const res = await axios.get(baseUrl_E);
    // console.log(res.data)
    dispatch(getDataSuccess_E(res.data));
  } catch (error) {
    dispatch(getDataError_E());
  }
};

export const getSingleProduct_E = (id) => async (dispatch) => {
  try {
    dispatch({ type: GET_SINGLE_DATA_LOADING_E});
    const res = await axios.get(
      `https://gem-garden-jewelry-store-api.onrender.com/jewelry/${id}`
    );
    console.log(res.data);
    dispatch({ type: GET_SINGLE_DATA_SUCCESS_E, payload: res.data });
  } catch (error) {
    dispatch({ type: GET_DATA_ERROR_E});
  }
};
