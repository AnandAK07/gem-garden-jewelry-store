import style from "./HomePage.module.css"

const HomePage = () => {
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
    </main>
  )
}

export default HomePage