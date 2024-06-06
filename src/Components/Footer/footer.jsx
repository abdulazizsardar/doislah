import { useState } from "react";
import "./compo-footer.css";
import Logo from "../../logo-2.svg";
import switcher from "../../Helpers/switcher";

const Footer = () => {
  const footerCss = {
  };

  const menuData = [
    { name: "হোম", slug:"home"},
    { name: "ইসলাম", slug:"islam"},
    { name: "ইবাদত", slug:"ibadat"},
    { name: "আত্মশুদ্ধি", slug:"attoshuddhi"},
    { name: "অন্যান্য", slug:"others"},
  ]
  return (
    <>
    <div className="footer-main-wrapper"  style={footerCss}>
      <div className="footer-top-section max-w-[1200px] mx-auto grid lg:grid-cols-4 md:grid-cols-2 gap-4">
          <div className="footer-1">
            <div className="footer-widget-heading widget_media_image">
              <img src={Logo} alt="" />
            </div>
            <div className="footer_widget_content">
              <div className="textwidget">
                <p>
                  ইন্টারনেটের মাধ্যেমে ইসলামের
                  <br />
                  সুমহান বাণী প্রত্যেক নর-নারীর নিকট
                  <br />
                  পৌঁছে দেয়ার ক্ষুদ্র প্রয়াস।
                </p>
              </div>
            </div>
          </div>
          <div className="footer-2">
              <div className="footer-widget-heading">
                <h4 className="widget__title-text">দরকারি লিঙ্ক</h4>
              </div>
            <div className="footer_widget_content">
              <div className="menu-footer-container">
                  <ul className="menu-lists">
                  {
                    menuData.map((e, k)=>{
                      return(
                        <li >
                        <a
                          onClick={(k) => {
                            switcher(e.slug, "", "", k);
                          }}
                        >
                          {e.name}
                        </a>
                      </li>
                      )
                    })
                  }
                  </ul>
                
              </div>
            </div>
          </div>
          <div className="footer-3">
            <div className="footer-widget-heading">
              <h4 className="widget__title-text">সোশ্যাল মিডিয়া</h4>
            </div>
            <div className="footer_widget_content">
              <div className="widget-social-counter__inner">
                <ul>
                  <li>
                    <a href="#" className="social-title social-facebook flex items-center">
                    <div className="social-icon"> <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="17" height="17" viewBox="0 0 24 24"><path d="M17.525,9H14V7c0-1.032,0.084-1.682,1.563-1.682h1.868v-3.18C16.522,2.044,15.608,1.998,14.693,2 C11.98,2,10,3.657,10,6.699V9H7v4l3-0.001V22h4v-9.003l3.066-0.001L17.525,9z"></path></svg></div>
                    <div className="social-text"><h5>Facebook</h5></div>
                    </a>
                  </li>
                  <li>
                  <a href="#" className="social-title social-youtube flex items-center">
                  <div className="social-icon"> <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="17" height="17" viewBox="0 0 24 24"><path d="M17.525,9H14V7c0-1.032,0.084-1.682,1.563-1.682h1.868v-3.18C16.522,2.044,15.608,1.998,14.693,2 C11.98,2,10,3.657,10,6.699V9H7v4l3-0.001V22h4v-9.003l3.066-0.001L17.525,9z"></path></svg></div>
                  <div className="social-text"><h5>Facebook</h5></div>
                  </a>
                  </li>
                  <li>
                  <a href="#" className="social-title social-twitter flex items-center">
                    <div className="social-icon"> <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="17" height="17" viewBox="0 0 24 24"><path d="M17.525,9H14V7c0-1.032,0.084-1.682,1.563-1.682h1.868v-3.18C16.522,2.044,15.608,1.998,14.693,2 C11.98,2,10,3.657,10,6.699V9H7v4l3-0.001V22h4v-9.003l3.066-0.001L17.525,9z"></path></svg></div>
                    <div className="social-text"><h5>Facebook</h5></div>
                  </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-4">
            <div  className="footer-widget-heading">
              <div className="textwidget">
                <h4  className="widget__title-text">
                  নিত্য নুতুন তথ্য পেতে এখুনি
                  <br />
                  আপনার ইমেইল দিন
                </h4>
              </div>
            </div>
            <div className="footer_widget_content subscribe-form">
              <form className="mailchimp-subscribe-form">
                <div className="mc4wp-form-fields">
                  <p>
                    <label>
                      <input
                        type="email"
                        name="EMAIL"
                        placeholder="ইমেইল"
                        required=""
                        tp-type="username"
                        className="email-subcribe"
                      />
                    </label>
                  </p>
                  <p>
                    <input type="submit" className="submit-btn" />
                  </p>
                </div>
              </form>
              
            </div>
          </div>
      </div>
      <div className="footer-bottom-section">
        <div className="max-w-[1200px] mx-auto">
          <div className="site-footer__section-inner text-center">
            Copyright © 2024 ইসলাহ করি
          </div>
        </div>
      </div>
    </div>
  </>
  );
};

export default Footer;

