import React from 'react';
import ReactDOM from 'react-dom';
import { store, persistor } from './store/store';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import './index.scss';

const Root = () => {
	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<section>start from here</section>
			</PersistGate>
		</Provider>
	);
};

const element = document.getElementById('root');
element ? ReactDOM.render(<Root />, element) : false;
