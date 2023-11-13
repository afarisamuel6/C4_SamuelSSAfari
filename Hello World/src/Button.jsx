// Button.js

import React from 'react';
import PropTypes from 'prop-types';
import './Button.css'; // You can create a CSS file for styling

const Button = ({ label }) => {
  return (
    <button className="custom-button">{label}</button>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
};

export default Button;

