import { useState } from "react"
import Footer from "../Components/Footer"
import style from "./HomePage.module.css"

const HomePage = () => {
  
  

  
 
  return (
    <main>

      <div className={`${style.hero} ${style.sectionP1}`}>
        <div>
          <h2>Your Jewelry Search Starts Here</h2>
          <br />
          <span>Discover  the perfect jewelry pieces &nbsp;&nbsp;  for your uniqye style at our store</span>
          <br /><br /><br /><br /><br />
          <p>DISCOVER</p>
        </div>

        <div>
          <img src={require('../Components/image/hero.png')} alt="Hero Img" />
        </div>
      </div>

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
          <img src={require(`../Components/image/earRing.png`)} alt="" />
          {/* <img src={require(imgURL)} alt="Img url" /> */}
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
            <img className={`${style.cardImg}`} src={require(`../Components/image/card5.png`)} alt="Card 1" />
            <p className={`${style.cardTitle}`}>Messika</p>
            <span className={`${style.cardDesc}`} >White Gold Diamond Ring</span>
            <span className={`${style.cardPrice}`} >$1,390</span>
          </div>


          <div className={`${style.card}`} >
            <img style={{ padding: "20px 7px" }} className={`${style.cardImg}`} src={require(`../Components/image/card6.png`)} alt="Card 2" />
            <p className={`${style.cardTitle}`}>Tiffani</p>
            <span className={`${style.cardDesc}`} >Silver Necklace</span>
            <span className={`${style.cardPrice}`} >$750</span>
          </div>

          <div className={`${style.card}`}>
            <img className={`${style.cardImg}`} src={require(`../Components/image/card7.png`)} alt="Card 3" />
            <p className={`${style.cardTitle}`}>Bulgari</p>
            <span className={`${style.cardDesc}`} >White Gold Diamond Earrings</span>
            <span className={`${style.cardPrice}`} >$7,250</span>
          </div>

          <div className={`${style.card}`}>
            <img className={`${style.cardImg}`} src={require(`../Components/image/card2.jpg`)} alt="Card 4" />
            <p className={`${style.cardTitle}`}>Cartier</p>
            <span className={`${style.cardDesc}`} >White Gold Ring</span>
            <span className={`${style.cardPrice}`} >$1,950</span>
          </div>


        </div>
      </section>

      <section className={`${style.sectionP1} ${style.sectionM1}`} id={`${style.gifts}`}>
        <div>
          <img src={require(`../Components/image/giftBox.png`)} alt="Gift Box" />
        </div>

        <div >
          <h1>Gifts</h1>

          <p>Looking for the perfect gift?</p>
          <p>Look no further! Our extensive collection of jewelry gifts includes something for everyone - from elegant and timeless pieces for her to bold and sophisticated designs for him</p>

          <br /><br /><br />
          <span>SHOP GIFTS</span>


        </div>
      </section>

      <section className={`${style.sectionP1} `} id={`${style.about}`}>

        <div className={`${style.firstDiv}`}>
          <div>
            <h1>About</h1>
            <p>Gem Garden is More Than Just Gliding</p>
            <p>Our Company  is an exclusive supplier of jewelry from the world's best brands. We take pride in offering our customers only the highest quality products created from precious metals and stones by the most experienced master jewelers</p>
            <p>We are constantly expanding our range to meet the needs of our customers and offer them latest and most fashionable trnds in jewelry. We are confident that our collection of jewelry will allow everyone to express their individual style and create a unique image</p>

            <span>OUR STORES</span>
          </div>

          <div>
            <span>GG</span>
          </div>
        </div>

        <div className={`${style.secondDiv} ${style.sectionM1}`}>
          <div>
            <img src={require('../Components/image/meeting.png')} alt="Meeting img" />
          </div>

          <div>
            <h1>Arrange a Meeting with Personal Consultant</h1>
            <p>Find a Boutique Near You or Visit our Flagship Store</p>

            <span>LEARN MORE</span>
          </div>
        </div>

      </section>

      <Footer />

    </main>
  )
}

export default HomePage