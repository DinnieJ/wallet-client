import React from 'react'
import PropTypes from 'prop-types'

function FirstTimeTOTP(props) {
  return (
    <div>FirstTimeTOTP</div>
  )
}

FirstTimeTOTP.propTypes = {
    session: PropTypes.string,
    base64qr: PropTypes.string
}

export default FirstTimeTOTP
