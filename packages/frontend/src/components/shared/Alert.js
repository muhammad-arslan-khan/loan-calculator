import React from 'react'
import PropTypes from 'prop-types'
import styles from './Alert.module.css'

const getClassName = (variant, styles) => {
  switch (variant) {
    case 'success':
      return styles.success

    case 'warning':
      return styles.warning

    default:
      return styles.danger
  }
}

const Alert = ({ variant, message }) => {
  if (message) {
    return (
      <p
        className={`${styles.message} ${getClassName(variant, styles)}`}
        data-testid="alert"
      >
        {message}
      </p>
    )
  }

  return null
}

Alert.defaultProps = {
  variant: 'danger',
  message: null,
}

Alert.propTypes = {
  variant: PropTypes.oneOf(['success', 'warning', 'danger']),
  message: PropTypes.string,
}

export default Alert
