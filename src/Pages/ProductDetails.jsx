// import React from 'react'
// import Footer from '../Components/Footer'

// const ProductDetails = () => {
//   return (
//     <div>ProductDetails
//     <Footer/>
//     </div>
//   )
// }

// export default ProductDetails


import React, { useEffect } from 'react'
import Footer from '../Components/Footer'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import {getSingleProduct} from '../Redux/ProductsReducer/action'
import {store} from '../Redux/store'
import styles from './ProductDetails.module.css'

const ProductDetails = () => {

  const singleItem=useSelector((store)=>store.productReducer.sigleProduct)
  console.log(singleItem)
  const {id}=useParams();

  const dispatch=useDispatch();
  // const getSingleProduct=async()=>{
  //   try {
  //     const res=await axios.get(`https://gem-garden-jewelry-store-api.onrender.com/jewelry/${id}`)
  //     console.log(res.data)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }
  useEffect(()=>{
    // getSingleProduct();
    // getSingleProduct(dispatch(id))
    dispatch(getSingleProduct(id))
  },[id])
  return (
    <div>
    <h1>ProductDetails</h1>
    <div className={styles.pDetails}>
      <div className={styles.pDImg}>
        <div className={styles.row1}>
            <img src={singleItem.img1} alt=""/>
        </div>
        <div className={styles.row2}>
          <div><img src={singleItem.img2} alt="" /></div>
          <div><img src={singleItem.img3} alt="" /></div>
        </div>
        <div className={styles.row2}>
          <div><img src={singleItem.img4} alt=""/></div>
          <div><img src={singleItem.img5} alt=""/></div>
        </div>
      </div>
      <div className={styles.details}>
        <h3>{singleItem.title}</h3>
        <p>{singleItem.description}</p>
        <p>{singleItem.price}</p>
        <p>{singleItem.origPrice}</p>
        <button>ADD TO BAG</button>
      </div>
    </div>
    <Footer/>
    </div>
  )
}

export default ProductDetails