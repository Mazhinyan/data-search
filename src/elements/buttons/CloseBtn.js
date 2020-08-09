import React from 'react';
import PropTypes from 'prop-types';

const CloseBtn = ({ children, ...props }) => {
	return <button {...props}>{children}</button>;
};

CloseBtn.propTypes = {
	className: PropTypes.string,
	children: PropTypes.oneOfType([ PropTypes.arrayOf(PropTypes.node), PropTypes.node ])
};

CloseBtn.defaultProps = {
	children: undefined
};

export default CloseBtn;
