import React from 'react'



const Contact = () => {
  return (
    <>
    <div className="container-contact">
      <main className="row">

        {/* Left Section (Column) Starts */}
        <section className="col left">

          {/* Title Starts */}
          <div className="contactTitle">
            <h2>Get In Touch</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</p>
          </div>
          {/* Title Ends */}

          {/* Contact Info Starts */}
          <div className="contactInfo">

            <div className="group">
              <div className="icon-con">
                {/* <i className="fa-solid fa-phone"></i> */}
                <i className="fa-brands fa-facebook-f"></i>
                
                
              </div>
              <div className="details">
                <span>Phone</span>
                <span>+92 3010209887</span>
              </div>
            </div>

            <div className="group">
              <div className="icon-con">
                <i className="fa-solid fa-envelope"></i>
              </div>
              <div className="details">
                <span>Email</span>
                <span>arsalanaftab191@gmail.com</span>
              </div>
            </div>

            <div className="group">
              <div className="icon-con">
              <i class="fa-brands fa-facebook-f"></i>
              </div>
              <div className="details">
                <span >Location</span>
                <span>📌Rim Jhim Mall Shop # 21,<br/> Gulshan 13D, Karachi
                </span>
              </div>
            </div>

          </div>
          {/* Contact Info Ends */}

          {/* Social Media Starts */}
          <div className="socialMedia">
            <a href="#"><i className="fa-brands fa-linkedin"></i></a>
            <a href="#"><i className="fa-brands fa-youtube"></i></a>
            <a href="#"><i className="fa-brands fa-facebook"></i></a>
            <a href="#"><i className="fa-brands fa-twitter"></i></a>
            <a href="#"><i className="fa-brands fa-pinterest"></i></a>
            <a href="#"><i className="fa-brands fa-instagram"></i></a>
          </div>
          {/* Social Media Ends */}
        </section>
        {/* Left Section (Column) Ends */}

        {/* Right Section (Column) Starts */}
        <section className="col right">

          {/* Form Starts */}
          <form className="messageForm">

            <div className="inputGroup halfWidth">
              <input type="text" name="" required="required" />
              <label>Your Name</label>
            </div>

            <div className="inputGroup halfWidth">
              <input type="email" name="" required="required" />
              <label>Email</label>
            </div>

            <div className="inputGroup fullWidth">
              <input type="text" name="" required="required" />
              <label>Subject</label>
            </div>

            <div className="inputGroup fullWidth">
              <textarea required="required"></textarea>
              <label>Say Something</label>
            </div>

            <div className="inputGroup fullWidth">
              <button>Send Message</button>
            </div>

          </form>
          {/* Form Ends */}
        </section>
        {/* Right Section (Column) Ends */}
      </main>
    </div>
    </>
  )
}

export default Contact
