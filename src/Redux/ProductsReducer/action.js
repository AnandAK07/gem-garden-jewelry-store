import axios from 'axios'
import {GET_DATA_REQUEST,GET_DATA_SUCCESS,GET_DATA_ERROR} from './actionType'

const baseUrl=`https://fakestoreapi.com/products`
const getDataRequest=()=>{
    return {type:GET_DATA_REQUEST}
}

const getDataSuccess=(payload)=>{
    return {type:GET_DATA_SUCCESS,payload:payload}
}

const getDataError=()=>{
    return {type:GET_DATA_ERROR}
}
export const getData=async(dispatch)=>{
    try {
        dispatch(getDataRequest())
        const res=await axios.get(baseUrl);
        // console.log(res.data)
        dispatch(getDataSuccess(res.data))
    } catch (error) {
        dispatch(getDataError())
    }
}