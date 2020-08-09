import React, { useCallback } from 'react';
import Img from '../../elements/img/Img';
import PropTypes from 'prop-types';

const ResultRow = ({ title, filePath, description, children, className, select, id }) => {
	const handleSelect = useCallback(
		() => {
			select(id);
		},
		[ id ]
	);
	return (
		<section className={`row result-row  ${className}`} onClick={handleSelect}>
			<div className="col-3 img-wrapper">
				<Img path={filePath} className="img-fluid" />
			</div>
			<div className="col-9 p-0">
				<span className="title">{title}</span> <br />
				<span className="description">{description}</span>
			</div>
			{children}
		</section>
	);
};

export default ResultRow;

ResultRow.propTypes = {
	title: PropTypes.string.isRequired,
	filePath: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	children: PropTypes.oneOfType([ PropTypes.arrayOf(PropTypes.node), PropTypes.node ]),
	select: PropTypes.func
};

ResultRow.defaultProps = {
	children: undefined,
	className: '',
	select: () => {}
};
