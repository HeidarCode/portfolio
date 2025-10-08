// src/components/Contact.jsx
import React from "react";
import "./../../styles/contact.css";
import { FaInstagram, FaTwitter, FaFacebook, FaLinkedin, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaTelegram } from "react-icons/fa";

const Contact = () => {
    return (
        <div className="contact-info">

  {/* عنوان باکس نئونی */}
  <div className="contact-title-box">
    با ما در ارتباط باشید
  </div>

  {/* آیتم آدرس */}
  <div className="contact-item">
    <FaMapMarkerAlt className="icon" />
    <span>تهران، قرچک، خیابان محمد آباد، مهدیه 8، پلاک 14</span>
  </div>

  {/* آیتم ایمیل */}
  <div className="contact-item email">
    <FaEnvelope className="icon" />
    <span dir="ltr">codenegarcompany@gmail.com</span>
  </div>

  {/* آیتم شماره */}
  <div className="contact-item phone">
    <FaPhoneAlt className="icon" />
    <span dir="ltr">+98 917 726 49 65</span>
  </div>

  {/* آیکن‌های شبکه اجتماعی */}
  <div className="social-icons">
    <a href="#" target="_blank"><FaLinkedin /></a>
    <a href="#" target="_blank"><FaTelegram /></a>
    <a href="#" target="_blank"><FaInstagram /></a>
  </div>

</div>

    );
};

export default Contact;

