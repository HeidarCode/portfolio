import React from 'react';
import './../../styles/Skill.css'
import photoshop from "../../assets/icons/icons8-photoshop-48.png"
import UiUx from "../../assets/icons/icons8-web-design-64.png"
import MUI from "../../assets/icons/icons8-material-ui-48.png"
import DevOps from "../../assets/icons/icons8-devops-60.png"
import Soft from "../../assets/icons/icons8-test-50.png"
import premirePro from "../../assets/icons/icons8-adobe-premiere-pro-48.png"
import AfterEfect from "../../assets/icons/icons8-adobe-after-effects-48.png"
import word from "../../assets/icons/icons8-microsoft-word-48.png"
import powerpoint from "../../assets/icons/icons8-powerpoint-48.png"
import excel from "../../assets/icons/icons8-excel-48.png"

import wordpress  from "../../assets/icons/icons8-wordpress-48.png"


const skills = [
   
   { name: 'React', icon: <i className="devicon-react-original colored"></i> },
  { name: 'JavaScript', icon: <i className="devicon-javascript-plain colored"></i> },
  { name: 'Material UI', icon: <img src={MUI} alt="Material UI" /> },
  { name: 'UI/UX', icon: <img src={UiUx} alt="UI/UX" /> },
    { name: 'CSS', icon: <i className="devicon-css3-plain colored"></i> },
    { name: 'HTML', icon: <i className="devicon-html5-plain colored"></i> },
 
 

{ name: 'wordpress', icon: <img src={wordpress} alt="Photoshop" /> },
   { name: 'Software Testing', icon: <img src={Soft} alt="Software Testing" /> },
   { name: 'DevOps', icon: <img src={DevOps} alt="DevOps" /> },
 
 
 
 { name: 'Golang', icon: <i className="devicon-go-original-wordmark colored"></i> },

   { name: 'FastAPI', icon: <i className="devicon-fastapi-plain colored"></i> },
    { name: 'Python', icon: <i className="devicon-python-plain colored"></i> },
     
  
 

   { name: 'Excel', icon: <img src={excel} alt="Excel" /> },
{ name: 'PowerPoint', icon: <img src={powerpoint} alt="PowerPoint" /> },
 { name: 'Microsoft Word', icon: <img src={word} alt="Word" /> },
    { name: 'After Effects', icon: <img src={AfterEfect} alt="After Effects" /> },
  { name: 'Premiere Pro', icon: <img src={premirePro} alt="Premiere Pro" /> },
     { name: 'Photoshop', icon: <img src={photoshop} alt="Photoshop" /> },
];

export default function Skills() {
  return (
    <section className="skills-section">
      <h2 className="skills-title">این‌ها مهارت‌هایی هستند که ما داریم</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <div className="skill-icon">{skill.icon}</div>
            <div className="skill-name">{skill.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
