import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Checkout from './Checkout'
import Home from './Home'
import './index.css'
import { store } from './store'

ReactDOM.createRoot(document.getElementById('root')).render(
	<Provider store={store}>
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Home />}></Route>{' '}
				<Route path='/checkout' element={<Checkout />}></Route>
			</Routes>
		</BrowserRouter>
	</Provider>
)
