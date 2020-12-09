import React from 'react'
import t from 'prop-types'

import './styles.scss'

const Headline = ({ textTop, textBottom }) => (
  <div className='WrapperHeadline'>
    <h3>{textTop}</h3>
    <h5>{textBottom}</h5>
  </div>
)

Headline.propTypes = {
  textTop: t.string.isRequired,
  textBottom: t.string.isRequired
}

export default Headline
