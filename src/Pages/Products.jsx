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

import React, { useEffect, useState } from "react";
import { getData } from "../Redux/ProductsReducer/action";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Products.module.css";
import { Link, useSearchParams } from "react-router-dom";

import Footer from "../Components/Footer";

const Products = () => {
  // const [data,setData]=useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const limit = 20;
  let [searchParam, setSearchParam] = useSearchParams();
  const [category, setCategory] = useState("");

  const items = useSelector((store) => store.productReducer.product);
  console.log(items);
  const dispatch = useDispatch();
  useEffect(() => {
    // getData(dispatch)
    dispatch(getData(currentPage, limit));
  }, [currentPage, limit]);

  useEffect(() => {
    let params = { currentPage, limit };
    setSearchParam(params);
  }, [currentPage, limit]);

  // const completed=todos.filter((el)=>el.status==true);

  return (
    <div>
      <div className={styles.pbtns}>
        <div className={styles.filterBtns}>
          <button
            disabled={currentPage <= 1}
            onClick={() => setCurrentPage((prev) => prev - 1)}
          >
            prev
          </button>
          <button>{currentPage}</button>
          <button onClick={() => setCurrentPage((prev) => prev + 1)}>
            next
          </button>
        </div>
        <div className={styles.filterBtns}>
          <button
            disabled={currentPage <= 1}
            onClick={() => setCurrentPage((prev) => prev - 1)}
          >
            prev
          </button>
          <button>{currentPage}</button>
          <button onClick={() => setCurrentPage((prev) => prev + 1)}>
            next
          </button>
        </div>
      </div>
      <div className={styles.pContainer}>
        {items.map((item, id) => {
          return (
            <Link key={id} to={`/products/${item.id}`}>
              <div className={styles.child}>
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
          );
        })}
      </div>
      <Footer />
    </div>
  );
};

export default Products;
