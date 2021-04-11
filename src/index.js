import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { heroReduser } from './redux/reducers/heroReduser'


const store = createStore(
	heroReduser,
	window.__REDUX_DEVTOOLS_EXPRETION__ && window.__REDUX_DEVTOOLS_EXPRETION__()
)

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);

