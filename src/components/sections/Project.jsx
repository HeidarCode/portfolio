import React, { useEffect } from 'react';
import './../../styles/project.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Vlogo from "../../assets/images/logo1.png"
import VIPlogo from '../../assets/images/logo2.svg'
import AbzarLogo from "../../assets/images/logo3.webp"

const projects = [
  {
    title: 'فروشگاه گیاهان',
    description: "طراحی سایت ویجی بازار مرکز محصولات با کیفیت و سلامت محور",
    image: Vlogo,
    link: 'https://vegibazar.com/'
  },
  {
    title: 'پنل مدیریت',
    description: 'سایت فروشگاه ویژه گل و گیاه با هدف ارائه محصولات و گل های  تزئینی به مخاطبین فعالیت می‌کند',
    image: VIPlogo,
    link: 'https://vipshop.flowers/plants/'
  },
  {
    title: 'ابزار ایران',
    description: 'طراحی و توسعه سایت ابزار آنلاین بزرگ ترین فروشگاه ابزار آلات صنعتی و کاری',
    image: AbzarLogo,
    link: 'https://abzarir.com/'
  }
];

export default function Projects() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true }); // fade-up سرعت ۸۰۰ میلی‌ثانیه
  }, []);

  return (
    <section className="projects-section">
      <h2 className="projects-title">پروژه‌های ما</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div
            className="project-card"
            key={index}
            data-aos="fade-up"
          >
            <img src={project.image} alt={project.title} className="project-image" />
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-btn"
            >
              مشاهده جزئیات
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
