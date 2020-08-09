import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDataAction, resetStore } from './redux';
import { getData } from '../../store/selectors';
import ResultRow from '../ResultRow';
import SelectedTemplate from '../SelectedTemplate';
import { addItem } from '../SelectedTemplate/redux';
import DefaultBtn from '../../elements/buttons/DefaultBtn';

const SearchTemplate = () => {
	const dispatch = useDispatch();
	const { isLoad, data, error } = useSelector((state) => getData(state));
	const [ id, setId ] = useState(null);
	const [ val, setVal ] = useState('');
	const [ showSelected, setShowSelected ] = useState(false);

	const triggerShow = useCallback(() => {
		setShowSelected((b) => !b);
	});

	const select = useCallback((id) => {
		dispatch(addItem(id));
		triggerShow();
	});

	const resetAll = useCallback(() => {
		dispatch(resetStore());
		setVal('');
	});

	const getValue = useCallback(({ target: { value } }) => {
		setVal(value);
	}, []);

	useEffect(
		() => {
			const isCorrect = val.length >= 2;
			clearTimeout(id);
			if (isCorrect) {
				setId(setTimeout(() => dispatch(getDataAction(val)), 500));
			}
		},
		[ val ]
	);

	return (
		<section className="search-template">
			<div className="input-group mb-3 search-input-dir ">
				<input type="text" placeholder="Type here" className="w-75" onChange={getValue} />
				<div className="input-group-append">
					<span className="input-group-text">
						{!isLoad ? (
							<button type="button" className="close" aria-label="Close" onClick={resetAll}>
								<span aria-hidden="true">&times;</span>
							</button>
						) : (
							<div className="spinner-border spinner-border-sm text-dark" role="status">
								<span className="sr-only">Loading...</span>
							</div>
						)}
					</span>
				</div>
			</div>

			{!data.length && 'Sorry, but there is no data, please type in input for get it'}

			{error && 'Something is wronge please check internet or write valid search text'}

			{data.length > 0 &&
				(!showSelected ? (
					<section className="search-result-template">
						{data.map(({ title, filePath, description, id }) => {
							return (
								<ResultRow
									key={id}
									id={id}
									title={title}
									filePath={filePath}
									description={description}
									select={select}
								/>
							);
						})}
					</section>
				) : (
					<DefaultBtn className={'defaultBtn'} onClick={triggerShow} text="Show Search result" />
				))}
			{showSelected ? <SelectedTemplate /> : null}
		</section>
	);
};

export default SearchTemplate;
