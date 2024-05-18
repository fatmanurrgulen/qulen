const Footer = () => {
    return(
  
        <section className="footer">
        <div className="box-container">
          <div className="box">
            <h3>Linkler</h3>
            <a href="anasayfa.html"> <i className="fas fa-arrow-right"></i>Anasayfa </a>
            <a href="#"> <i className="fas fa-arrow-right"></i>Hakkımızda </a>
            <a href="#"> <i className="fas fa-arrow-right"></i>Gizlilik Politikası </a>
          </div>

          <div className="box">
            <h3>Mobil uygulamalar</h3>
            <a href="#"> <i className=""></i> <img src="img/Google_Play.png" alt="Google Play" height="40px" width="130px" /></a>
            <a href="#"> <i className=""></i> <img src="img/appstore.png" alt="App Store" height="40px" width="130px" /></a>
          </div>

          <div className="box">
            <h3>İletişim Bilgileri</h3>
            <a href="#"> <i className="fas fa-phone"></i>+90 (500) 000 00 00 </a>
            <a href="#"> <i className="fas fa-envelope"></i> qulen@gmail.com </a>
          </div>
        </div>

        <div className="share">
          <a href="https://www.facebook.com/" target="_blank" className="fab fa-facebook-f"></a>
          <a href="https://twitter.com/" target="_blank" className="fab fa-twitter"></a>
          <a href="https://www.instagram.com/" target="_blank" className="fab fa-instagram"></a>
          <a href="https://www.linkedin.com/" target="_blank" className="fab fa-linkedin"></a>
        </div>

        <div className="credit"> <span>qulen</span> tarafından oluşturuldu. | Tüm Hakları Saklıdır! </div>
      </section>
  
    )
}

export default Footer