
import { Link } from "react-router-dom";
const Navbar = () => {
    return(
  
        <header className="header">
        <section className="header-1">
          <a  className="logo"> <i className="fas fa-car"></i> Gulen </a>
          <form action="" className="search-form">
            <input type="search" name="" placeholder="Buraya yaz" id="search-box" />
            <label htmlFor="search-box" className="fas fa-search"></label>
          </form>
          <div className="icons">
            <div id="search-btn"></div>
            <a href="/login"> Giriş Yap</a>
            <a to="#" >Hakkımızda</a>
            <a to="#">İletişim</a>
          </div>
        </section>
      </header>
  
    )
}

export default Navbar