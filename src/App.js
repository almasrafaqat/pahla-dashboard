import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home';
import ProductPage from './pages/product';
import FormPage from './pages/FormPage';
import TodoPage from './pages/TodoPage';


function App() {

	return (
		<Router>
			<Routes>

				<Route path="/" exact element={<HomePage />} />
				<Route path="/products"  element={<ProductPage />} />
				<Route path="/forms"  element={<FormPage />} />
				<Route path="/tasks"  element={<TodoPage />} />
			</Routes>
		</Router>
	);
}

export default App;
