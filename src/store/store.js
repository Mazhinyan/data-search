import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';
import storage from 'redux-persist/lib/storage';
import { rootReducer } from './root-reducer';
import rootSaga from './root-saga';

const sagaMiddleware = createSagaMiddleware();
const logger = createLogger();

const persistConfig = {
	key: 'root',
	storage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
	persistedReducer,
	compose(
		applyMiddleware(sagaMiddleware, logger),
		window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : compose
	)
);
store.runSaga = (...args) => sagaMiddleware.run(...args);
store.runSaga(rootSaga);
export const persistor = persistStore(store);
