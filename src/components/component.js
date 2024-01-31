import React from 'react'

import PropTypes from 'prop-types'

import './component.css'

const AppComponent = (props) => {
  return (
    <div className={`app-component-container ${props.rootClassName} `}>
      <span className="">{props.text}</span>
    </div>
  )
}

AppComponent.defaultProps = {
  text: '하욤',
  rootClassName: '',
}

AppComponent.propTypes = {
  text: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default AppComponent
