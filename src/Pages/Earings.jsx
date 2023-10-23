
import React, { useEffect } from 'react'
import { getData, getData_E, getData_J } from '../Redux/ProductsReducer/action'
import { useDispatch, useSelector } from 'react-redux'
import styles from './Earings.module.css'
import { Link } from 'react-router-dom'

import Footer from '../Components/Footer'

const Earings = () => {

  const items=useSelector((store)=>store.productReducer.earings)
  console.log(items)
  const dispatch=useDispatch();
  useEffect(()=>{
    getData_E(dispatch)
  },[])
  return (
    <div>
    <div className={styles.pContainer}>
      {items.map((item)=>{
        return <Link to={`/earings/${item.id}`}>
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

export default Earings