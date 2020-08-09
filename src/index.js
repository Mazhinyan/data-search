import React from 'react';
import ReactDOM from 'react-dom';
import { store, persistor } from './store/store';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import './index.scss';
import Home from './layout/Home';

const Root = () => {
	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<Home />
			</PersistGate>
		</Provider>
	);
};

const element = document.getElementById('root');
element ? ReactDOM.render(<Root />, element) : false;
