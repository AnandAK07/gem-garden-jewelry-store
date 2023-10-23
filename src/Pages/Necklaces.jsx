// import React, { useEffect } from 'react'
// import { getData } from '../Redux/ProductsReducer/action'
// import { useDispatch, useSelector } from 'react-redux'
// import Footer from '../Components/Footer'

// const Products = () => {

//   const items=useSelector((store)=>store.productReducer.product)
//   console.log(items)
//   const dispatch=useDispatch();
//   useEffect(()=>{
//     getData(dispatch)
//   },[])
//   return (
//     <div>Products
//     {items.map((item)=>{
//       return <div key={item.id}>{item.title}</div>
//     })}
//     <Footer/>
//     </div>
//   )
// }

// export default Products



import React, { useEffect } from 'react'
import { getData, getData_J } from '../Redux/ProductsReducer/action'
import { useDispatch, useSelector } from 'react-redux'
import styles from './Necklaces.module.css'
import { Link } from 'react-router-dom'

import Footer from '../Components/Footer'

const Necklaces = () => {

  const items=useSelector((store)=>store.productReducer.necklaces)
  console.log(items)
  const dispatch=useDispatch();
  useEffect(()=>{
    getData_J(dispatch)
  },[])
  return (
    <div>
    <div className={styles.pContainer}>
      {items.map((item)=>{
        return <Link to={`/necklaces/${item.id}`}>
                    <div key={item.id} className={styles.child}>
                    <img src={item.img1} alt="" />
                    <div className={styles.details}>
                      <h3 className={styles.space}>{item.title}</h3>
                      <div className={styles.price}>
                        <p>₹ {item.price}</p>
                        <p>₹ {item.origPrice}</p>
                      </div>
                      </div>
                    </div>
                </Link>
      })}
    </div>
    <Footer/>
    </div>
  )
}

export default Necklaces