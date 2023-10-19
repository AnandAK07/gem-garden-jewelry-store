import style from "./HomePage.module.css"

const HomePage = () => {
  console.log(window.innerHeight)

  return (
    <main>

      <section className={`${style.sectionP1} ${style.sectionM1}`} id={`${style.collection}`}>
        <div className={`${style.heading}`}>
          <div >
            <h1>New Collections</h1>
            <span>Check Out the New Collections of Famous Brands</span>
          </div>

          <div><p>ALL COLLECTIONS</p></div>

        </div>
        <div className={`${style.productContainer}`}>
          <div className={`${style.card}`}>
            <img className={`${style.cardImg}`} src={require(`../Components/image/card1.png`)} alt="Card 1" />
            <p className={`${style.cardTitle}`}>Messika</p>
            <span className={`${style.cardDesc}`} >Move Uno Collection</span>
          </div>


          <div className={`${style.card}`}>
            <img className={`${style.cardImg}`} src={require(`../Components/image/card2.jpg`)} alt="Card 2" />
            <p className={`${style.cardTitle}`}>Cartier</p>
            <span className={`${style.cardDesc}`} >Love Collection</span>
          </div>

          <div className={`${style.card}`}>
            <img className={`${style.cardImg}`} src={require(`../Components/image/card3.png`)} alt="Card 3" />
            <p className={`${style.cardTitle}`}>Garrad</p>
            <span className={`${style.cardDesc}`} >1735 Collection</span>
          </div>

          <div className={`${style.card}`}>
            <img className={`${style.cardImg}`} src={require(`../Components/image/card4.jpg`)} alt="Card 4" />
            <p className={`${style.cardTitle}`}>Messika</p>
            <span className={`${style.cardDesc}`} >Lucky Move Collection</span>
          </div>


        </div>
      </section>


      <section className={`${style.sectionP1} ${style.sectionM1}`} id={`${style.categories}`} >
        <div>
          <div>
            <h1>Categories</h1>
            <span>Discover Our Collection of Jewelry by Categories</span>
          </div>


          <div className={`${style.linkContainer}`}>
            <span>Rings</span>
            <span>Bracelet</span>
            <span className={style.currentLink}>Earring</span>
            <span>Necklace & Pendants</span>
            <span>Watches</span>
            <span>Men's Jewelry</span>
          </div>

          <p>ALL CATEGORIES</p>
        </div>

        <div>
          <img src={require(`../Components/image/card1.png`)} alt="" />
        </div>

      </section>

      <section className={`${style.sectionP1} ${style.sectionM1}`} id={`${style.collection}`}>
        <div className={`${style.heading}`}>
          <div >
            <h1>BestSellers</h1>
            <span>Top-rated Jewelry from Our Collection</span>
          </div>

          <div><p>VIEW ALL</p></div>

        </div>
        <div className={`${style.productContainer}`}>
          <div className={`${style.card}`}>
            <img className={`${style.cardImg}`} src={require(`../Components/image/card1.png`)} alt="Card 1" />
            <p className={`${style.cardTitle}`}>Messika</p>
            <span className={`${style.cardDesc}`} >White Gold Diamond Ring</span>
            <span className={`${style.cardPrice}`} >$1,390</span>
          </div>


          <div className={`${style.card}`}>
            <img className={`${style.cardImg}`} src={require(`../Components/image/card2.jpg`)} alt="Card 2" />
            <p className={`${style.cardTitle}`}>Tiffani</p>
            <span className={`${style.cardDesc}`} >Silver Necklace</span>
            <span className={`${style.cardPrice}`} >$750</span>
          </div>

          <div className={`${style.card}`}>
            <img className={`${style.cardImg}`} src={require(`../Components/image/card3.png`)} alt="Card 3" />
            <p className={`${style.cardTitle}`}>Bulgari</p>
            <span className={`${style.cardDesc}`} >White Gold Diamond Earrings</span>
            <span className={`${style.cardPrice}`} >$7,250</span>
          </div>

          <div className={`${style.card}`}>
            <img className={`${style.cardImg}`} src={require(`../Components/image/card4.jpg`)} alt="Card 4" />
            <p className={`${style.cardTitle}`}>Cartier</p>
            <span className={`${style.cardDesc}`} >White Gold Ring</span>
            <span className={`${style.cardPrice}`} >$1,950</span>
          </div>


        </div>
      </section>

    </main>
  )
}

export default HomePage