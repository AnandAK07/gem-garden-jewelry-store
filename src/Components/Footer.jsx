
import style  from "./Footer.module.css"

const Footer = () => {
  return (
    <footer className={`${style.footer}`}>

      <div className={`${style.firstCol}`}>
        <h1>GEM GARDEN</h1>
        <div>
        <i className="fa-brands fa-facebook-f"></i>
        <i className="fa-brands fa-instagram"></i>
        <i className="fa-brands fa-pinterest"></i>
        <i className="fa-brands fa-telegram"></i>
        </div>
      </div>

      <div className={`${style.secondCol}`}>

        <div>
          <span>Contact Us</span>
          <span>Service</span>
          <span>Return</span>
          <span>Sterms of use</span>
          <span>How to order?</span>
        </div>

        <div>
          <span>Rings</span>
          <span>Bracelets</span>
          <span>Earring</span>
          <span>Necklace & Pendants</span>
          <span>Watches</span>
        </div>

      </div>

      <div className={`${style.thirdCol}`}>
        <p>Discover the latest collection, news and exclusive launches</p>

        <input type="search" placeholder="Enter your e-mail address" />
        <i className="fa-regular fa-arrow-right-long"></i>
        <div>
          <p>Legal Notice</p>
          <p>Privacy Policy</p>
        </div>
      </div>

    </footer>
  )
}

export default Footer