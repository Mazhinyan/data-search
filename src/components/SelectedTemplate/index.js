import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { deleteItem } from './redux';
import { getData, getSelcted } from '../../store/selectors';
import CloseBtn from '../../elements/buttons/CloseBtn';
import Modal from '../Modal';
import ResultRow from '../ResultRow';
const SelectedTemplate = () => {
	const dispatch = useDispatch();
	const selected = useSelector((state) => getSelcted(state));
	const { data } = useSelector((state) => getData(state));
	const [ show, setShow ] = useState(false);
	const [ itemId, setItemId ] = useState(false);
	const triggerShow = useCallback((e) => {
		if (e) {
			const { target: { dataset: { id } } } = e;
			id && setItemId(id);
		}
		setShow((b) => !b);
	}, []);

	const itemDelete = useCallback(
		() => {
			dispatch(deleteItem(itemId));
			triggerShow();
		},
		[ itemId ]
	);

	return (
		selected.length > 0 &&
		data.length > 0 && (
			<section className="selcted-template">
				{selected.map((item) => {
					const { title, filePath, description, id } = data.find(({ id }) => id === item);
					return (
						<ResultRow key={item} title={title} filePath={filePath} description={description} id={id}>
							<CloseBtn className="close" className={'delete-item'} onClick={triggerShow} data-id={id}>
								X
							</CloseBtn>
						</ResultRow>
					);
				})}

				{show && (
					<Modal
						onContinue={itemDelete}
						cancel={triggerShow}
						text="Are you sure you want to delete this item?"
					/>
				)}
			</section>
		)
	);
};

export default SelectedTemplate;

SelectedTemplate.propTypes = {};
