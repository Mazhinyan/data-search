import React from 'react';
import { IMG_ENDPOINT } from '../../utils/endpoints';
import PropTypes from 'prop-types';

const Img = ({ path, className }) => <img src={IMG_ENDPOINT + path} className={className} alt="img" />;

export default Img;

Img.propTypes = {
	path: PropTypes.string.isRequired,
	className: PropTypes.string
};

Img.defaultProps = {
	className: ''
};
