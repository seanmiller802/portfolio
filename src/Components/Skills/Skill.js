import React, { Component } from 'react'

class Skill extends Component {

  constructor(props) {
    super(props);

    this.state = {}
  }

  handleSkillClick = ({
    pageX,
  }) => {
    this.setState({
      rightMode: pageX > window.innerWidth / 2,
    },
    this.props.onSkillSelection);
  }
  
  render() {

    const { name, description, website, isVisible, handleCloseSkill } = this.props;

    const infoBoxStyle = { width: window.innerWidth / 2 };
    const rightModeStyle = { ...infoBoxStyle, transform: 'translate(-100%)', left: '100%', marginLeft: '-5px' };

    return (
        <div className="skill-list-wrap">
          <div
            className={`skills-list-item ${isVisible && 'item-selected'}`}
            onClick={this.handleSkillClick}
          >{name}</div>
          {isVisible && (
            <div className="skill-info" style={ this.state.rightMode ? rightModeStyle : infoBoxStyle }>
              <p className="close-skill">
                <i className="fas fa-times" onClick={handleCloseSkill}></i>
              </p>
              <div className="skill-description">{description}</div>
              <div className="skill-website">
                <a className="skill-website-text" href={website} target="_blank">Learn more</a>
              </div>
            </div>
          )}
        </div>
    )
  }
}

export default Skill;