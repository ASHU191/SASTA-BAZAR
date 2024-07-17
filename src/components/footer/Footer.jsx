import React from 'react'

const Footer = () => {
  return (
    <div>
       {/* FOOTER */}
       <footer className="footer">
                <div className="footer-top section">
                    <div className="container">
                        <div className="footer-link-box">
                            <ul className="footer-list">
                                <li>
                                    <p className="footer-list-title">Contact Us</p>
                                </li>
                                <li>
                                    <address className="footer-link">
                                        <ion-icon name="location"></ion-icon>
                                        <span className="footer-link-text">
                                            Rim Jhim Mall Shop # 21, Gulshan 13D, Karachi
                                        </span>
                                    </address>
                                </li>
                                <li>
                                    <a href="tel:+923336667575" className="footer-link">
                                        <ion-icon name="call"></ion-icon>
                                        <span className="footer-link-text">+92-00000000</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="mailto:tahashk7184@gmail.com" className="footer-link">
                                        <ion-icon name="mail"></ion-icon>
                                        <span className="footer-link-text">arsalanaftab191@gmail.com</span>
                                    </a>
                                </li>
                            </ul>

                            <ul className="footer-list">
                                <li>
                                    <p className="footer-list-title">My Account</p>
                                </li>
                                <li>
                                    <a href="#" className="footer-link">Track My Order</a>
                                </li>
                                <li>
                                    <a href="#" className="footer-link">View Cart</a>
                                </li>
                                <li>
                                    <a href="#" className="footer-link">Sign In</a>
                                </li>
                                <li>
                                    <a href="#" className="footer-link">Help</a>
                                </li>
                            </ul>

                            <ul className="footer-list">
                                <li>
                                    <p className="footer-list-title">Information</p>
                                </li>
                                <li>
                                    <a href="#" className="footer-link">About Us</a>
                                </li>
                                <li>
                                    <a href="#" className="footer-link">Contact Us</a>
                                </li>
                                <li>
                                    <a href="#" className="footer-link">Terms & Conditions</a>
                                </li>
                                <li>
                                    <a href="#" className="footer-link">Privacy Policy</a>
                                </li>
                            </ul>
                            <div class="footer-list">

            <p class="footer-list-title">Newsletter</p>

            <form action="" class="newsletter-form">
              <input type="email" name="email" required placeholder="Email Address" class="newsletter-input"/>

              <button type="submit" class="btn btn-primary">Subscribe</button>
            </form>
            <br/>

            <div class="footer-brand">
              <ul class="social-list">
    
                <li>
                  <a href="#" class="social-link">
                    <ion-icon name="logo-facebook"></ion-icon>
                  </a>
                </li>
    
                <li>
                  <a href="#" class="social-link">
                    <ion-icon name="logo-twitter"></ion-icon>
                  </a>
                </li>
    
                <li>
                  <a href="#" class="social-link">
                    <ion-icon name="logo-pinterest"></ion-icon>
                  </a>
                </li>
    
                <li>
                  <a href="#" class="social-link">
                    <ion-icon name="logo-linkedin"></ion-icon>
                  </a>
                </li>
    
              </ul>
    
            </div>

          </div>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <div className="container">
                        <p className="copyright">
                            © 2023 Footcap. All Rights Reserved
                        </p>
                    </div>
                </div>
            </footer>
    </div>
  )
}

export default Footer
