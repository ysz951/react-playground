import React, { Component } from 'react'
import languageSpecificCopy from './languageSpecificCopy'
import LanguageContext from './LanguageContext'

class GreatGrandChild extends Component {
  // static contextType = LanguageContext;
  
  // render() {
  //   // const copy = languageSpecificCopy['en-US'] || {}
  //   const copy = languageSpecificCopy[this.context.lang] || {}
  //   return (
  //     <section>
  //       <h2>{copy.title}</h2>
  //       <p>{copy.body}</p>
  //       <button
  //         onClick={() => this.context.setLang('klingon')}
  //         disabled={this.context.lang === 'klingon'}
  //       >
  //         Klingon!{' '}
  //         {/* yes I know it's a vulcan salute but star-trek */}
  //         <span role='img' aria-label='klingon'>🖖</span>
  //       </button>
  //     </section>
  //   )
  // }

  render() {
    return (
    <LanguageContext.Consumer>
        {/* value -> this.context */}
        {(value) => {
            const copy = languageSpecificCopy[value.lang] || {}
            return (
              <section>
                <h2>{copy.title}</h2>
                <p>{copy.body}</p>
                <button
                  onClick={() => value.setLang('klingon')}
                  disabled={value.lang === 'klingon'}
                >
                  Klingon!{' '}
                  {/* yes I know it's a vulcan salute but star-trek */}
                  <span role='img' aria-label='klingon'>🖖</span>
                </button>
              </section>
            )}}
      </LanguageContext.Consumer>
    )
  }
}

export default GreatGrandChild