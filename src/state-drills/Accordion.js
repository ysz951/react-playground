import React from 'react';
import './Accordion.css'

class Accordion extends React.Component {
    static defaultProps = { sections: [] };
    state = {
        currentSectionIndex: -1
    }

    renderContent() {
        const currentSection = this.props.sections[this.state.currentSectionIndex]
        return (
          <p className='content'>
            {currentSection.content}
          </p>
        )
    }

    handleButtonClick(index) {
        this.setState({currentSectionIndex: index})
    }

    renderLists() {
        return this.props.sections.map((section, index) => (
        <li  key={index} className='Accordion__item'>
            <button onClick={() => this.handleButtonClick(index)}>
                {section.title}
            </button>
            {this.state.currentSectionIndex === index && this.renderContent()}
        </li>
        ))
    }
    
    render() {
        return (
            <ul className='Accordion'>
                {this.renderLists()}
                
            </ul>
          )
    }
}

export default Accordion