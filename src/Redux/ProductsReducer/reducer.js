// import {GET_DATA_REQUEST,GET_DATA_SUCCESS,GET_DATA_ERROR} from './actionType'

// const intialState={
//     isLoading:false,
//     product:[],
//     isError:false
// } 

// export const productReducer = (state=intialState,{type,payload}) => {
//   // console.log(type,payload)
//   switch (type){
//     case GET_DATA_REQUEST:return {...state,isLoading:true}
//     case GET_DATA_SUCCESS:return {...state,isLoading:false,product:payload}
//     case GET_DATA_ERROR:return {...state,isLoading:false,isError:true}

//     default:return state;
//   }
// }


import {GET_DATA_REQUEST,GET_DATA_SUCCESS,GET_DATA_ERROR,GET_SINGLE_DATA_LOADING,GET_SINGLE_DATA_SUCCESS,GET_SINGLE_DATA_ERROR} from './actionType'

const intialState={
    isLoading:false,
    product:[],
    sigleProduct:{},
    isError:false
} 

export const productReducer = (state=intialState,{type,payload}) => {
  // console.log(type,payload)
  switch (type){
    case GET_DATA_REQUEST:return {...state,isLoading:true}
    case GET_DATA_SUCCESS:return {...state,isLoading:false,product:payload}
    case GET_DATA_ERROR:return {...state,isLoading:false,isError:true}

    case GET_SINGLE_DATA_LOADING:return{...state,isLoading:true,isError:false}
    case GET_SINGLE_DATA_SUCCESS:return{...state,isLoading:false,sigleProduct:payload}
    case GET_SINGLE_DATA_ERROR:return{...state,isLoading:false,isError:true}
    default:return state;
  }
}
