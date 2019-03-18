import React, { Component } from 'react';
import { data } from './skill-data';
import Skill from './Skill';

import "./Skills.css";

class Skills extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedItem: '',
    }
  }

  onSkillSelection = (i) => {
    this.setState({
      selectedItem: i
    })
  }

  handleCloseSkill = () => {
    this.setState({
      selectedItem: '',
    })
  }



  render() {

    const { selectedItem } = this.state;
    
    const list = data.map(( skill, i) => {
      return (
         selectedItem === i ? (
           <Skill 
            name={skill.name}
            description={skill.description} 
            website={skill.website} 
            key={i} 
            onSkillSelection={() => this.onSkillSelection(i)}
            handleCloseSkill={this.handleCloseSkill}
            isVisible 
          />
      ) : (
        <Skill 
          name={skill.name} 
          description={skill.description} 
          website={skill.website} 
          key={i}
          onSkillSelection={() => this.onSkillSelection(i)}
          handleCloseSkill={this.handleCloseSkill}
          isVisible={false}
        />
      )
      );
    });

    return (
      <div className="skills">
        <div className="skills-content">
          <h2>Just a few of my
            <i className="fas fa-user-ninja"></i> 
            <span id="skills-highlight">skills</span>
          </h2>
          <div>
            <div className="skills-list">
              {list}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Skills;