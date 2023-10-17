import {GET_DATA_REQUEST,GET_DATA_SUCCESS,GET_DATA_ERROR} from './actionType'

const intialState={
    isLoading:false,
    product:[],
    isError:false
} 

export const productReducer = (state=intialState,{type,payload}) => {
  // console.log(type,payload)
  switch (type){
    case GET_DATA_REQUEST:return {...state,isLoading:true}
    case GET_DATA_SUCCESS:return {...state,isLoading:false,product:payload}
    case GET_DATA_ERROR:return {...state,isLoading:false,isError:true}

    default:return state;
  }
}
