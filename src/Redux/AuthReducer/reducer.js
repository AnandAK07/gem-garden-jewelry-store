import React from 'react'
const initialState={
    cart:[],
    isAuth:false,
    token:""
}


export const authReducer = (state=initialState,{type,payload}) => {
  switch (type){
    default:return state
  }
}
