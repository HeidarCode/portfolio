import React from 'react';
import './../../styles/About.css';
import image from '../../assets/images/IMAGE.avif'

function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-text">
           
          <h2>درباره ما</h2>
           <div className="quote-box">
          <p>
            ما یک تیم دانشجویی خلاق هستیم که ایده‌های تازه را به پروژه‌های نوآورانه تبدیل می‌کنیم.
          </p>
          <p>
             با تعهد واقعی و تکیه بر تجربه و تخصص‌مون، می‌خوایم بهترین رو برای شما بسازیم.
          </p>
          </div>
        </div>
        <div className="about-image">
        <img src={image} alt='image' />
        </div>
      </div>
    </section>
  );
}

export default About;
