import React, { useEffect } from 'react'
import { getData } from '../Redux/ProductsReducer/action'
import { useDispatch, useSelector } from 'react-redux'

const Products = () => {

  const items=useSelector((store)=>store.productReducer.product)
  console.log(items)
  const dispatch=useDispatch();
  useEffect(()=>{
    getData(dispatch)
  },[])
  return (
    <div>Products
    {items.map((item)=>{
      return <div key={item.id}>{item.title}</div>
    })}
    </div>
  )
}

export default Products