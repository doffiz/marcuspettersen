import React from 'react'
import './skills.css'
import CountUp from 'react-countup';

const Skills = () => {
    return (
        <div className="pf__skills-box skills__margin" id="skills">
        <div className="pf__skills-title">
            <h2>HTML</h2>
          <div className="pf__skills-content">
            <h1><CountUp start={0} end={80} duration={2} separator=","  />%</h1>
            </div>
        </div>
        <div className="pf__skills-title">
            <h2>CSS</h2>
          <div className="pf__skills-content">
            <h1><CountUp start={0} end={80} duration={3} separator=","  />%</h1>
            </div>
        </div>
        <div className="pf__skills-title">
            <h2>JavaScript</h2>
          <div className="pf__skills-content">
            <h1><CountUp start={0} end={70} duration={4} separator=","  />%</h1>
            </div>
        </div>
        <div className="pf__skills-title">
            <h2>React.JS</h2>
          <div className="pf__skills-content">
            <h1><CountUp start={0} end={65} duration={5} separator=","  />%</h1>
            </div>

        </div>
      </div>
      
    );
}

export default Skills
