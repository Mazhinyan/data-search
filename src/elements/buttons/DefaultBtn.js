import React from 'react';
import PropTypes from 'prop-types';

const DefaultBtn = ({ text, ...props }) => {
	return <button {...props}>{text}</button>;
};

export default DefaultBtn;

DefaultBtn.propTypes = {
	text: PropTypes.string.isRequired
};
