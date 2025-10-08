import React from "react";
import Header from "./components/layout/Header";
import "./styles/global.css"
// import Hero from "./components/layout/Hero";
import "./styles/Header.css"; // اگر می‌خواهی استایل‌های هدر را از اینجا هم بارگذاری کنی
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Project from "./components/sections/Project"
import Contact from "./components/sections/Contact";
// (در صورت نیاز، پایین توضیح می‌دهم)

function App() {
  return (
    <div>
      <Header />

      {/* Hero directly under header */}
      {/* <Hero /> */}

      <main>

        <section id="about" style={sectionStyle}>
         <About />
        </section>

        <section id="skills">
      <Skills />
        </section>

        <section id="projects">
       <Project />
        </section>
        <section id="contact" style={sectionStyle}>
         <Contact />
        </section>
      </main>
     
    </div>
  );
}

/* سبک سادهٔ هر سکشن برای نمایش بهتر */
const sectionStyle = {
   minHeight: "80vh",
  padding: "2rem",
  borderBottom: "1px solid rgba(255,255,255,0.06)",
  backgroundColor: "#011627",
};

export default App;
