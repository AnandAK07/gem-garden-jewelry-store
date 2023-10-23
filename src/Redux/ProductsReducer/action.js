// import axios from 'axios'
// import {GET_DATA_REQUEST,GET_DATA_SUCCESS,GET_DATA_ERROR} from './actionType'

// const baseUrl=`https://fakestoreapi.com/products`
// const getDataRequest=()=>{
//     return {type:GET_DATA_REQUEST}
// }

// const getDataSuccess=(payload)=>{
//     return {type:GET_DATA_SUCCESS,payload:payload}
// }

// const getDataError=()=>{
//     return {type:GET_DATA_ERROR}
// }
// export const getData=async(dispatch)=>{
//     try {
//         dispatch(getDataRequest())
//         const res=await axios.get(baseUrl);
//         // console.log(res.data)
//         dispatch(getDataSuccess(res.data))
//     } catch (error) {
//         dispatch(getDataError())
//     }
// }

import axios from 'axios'
import {GET_DATA_REQUEST,GET_DATA_SUCCESS,GET_DATA_ERRORGET_DATA_SUCCESS,GET_DATA_ERROR,GET_SINGLE_DATA_LOADING,GET_SINGLE_DATA_SUCCESS,GET_SINGLE_DATA_ERROR} from './actionType'

const baseUrl=`https://gem-garden-jewelry-store-api.onrender.com/jewelry`
const getDataRequest=()=>{
    return {type:GET_DATA_REQUEST}
}

const getDataSuccess=(payload)=>{
    return {type:GET_DATA_SUCCESS,payload:payload}
}

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

export const getSingleProduct=(id)=>async(dispatch)=>{
    try {
        dispatch({type:GET_SINGLE_DATA_LOADING})
      const res=await axios.get(`https://gem-garden-jewelry-store-api.onrender.com/jewelry/${id}`)
      console.log(res.data)
      dispatch({type:GET_SINGLE_DATA_SUCCESS,payload:res.data})
    } catch (error) {
    dispatch({type:GET_DATA_ERROR})
    }
  }