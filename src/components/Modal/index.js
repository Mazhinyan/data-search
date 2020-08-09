import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import CloseBtn from '../../elements/buttons/CloseBtn';
import DefaultBtn from '../../elements/buttons/DefaultBtn';
import PropTypes from 'prop-types';

const Modal = ({ onContinue, cancel, text }) => {
	const el = document.createElement('div');
	const portalRoot = document.getElementById('portal');

	useEffect(
		() => {
			portalRoot.appendChild(el);

			return () => {
				portalRoot.removeChild(el);
			};
		},
		[ el, portalRoot ]
	);

	const modal = (
		<div className="modal-container">
			<section className="modal-item">
				<div className="modal-mess"> {text}</div>
				<div className="modal-btns">
					<CloseBtn onClick={cancel} className="cancelBtn">
						Cancel
					</CloseBtn>
					<DefaultBtn onClick={onContinue} className="defaultBtn" text="Continue" />
				</div>
			</section>
		</div>
	);

	return ReactDOM.createPortal(modal, el);
};

export default Modal;

Modal.proptypes = {
	cancle: PropTypes.func.isRequired,
	onContinue: PropTypes.func.isRequired,
	text: PropTypes.string.isRequired
};
