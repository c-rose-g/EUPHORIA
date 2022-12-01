import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginForm from './components/auth/LoginForm';
// import SignUpForm from './components/auth/SignUpForm';
import NavBar from './components/NavBar/NavBar';
import ProtectedRoute from './components/auth/ProtectedRoute';
import UsersList from './components/UsersList';
import User from './components/User';
import Splash from './components/Splash';
import ProductDetails from './components/ProductDetails';
import ProductCategory from './components/ProductCategory';
import CreateReviewForm from './components/CreateReviewForm';
import UpdateReviewForm from './components/UpdateReview';
import { authenticate } from './store/session';
import CheckoutPage from './components/CheckoutPage/CheckoutPage';
function App() {
	const [loaded, setLoaded] = useState(false);
	const dispatch = useDispatch();

	useEffect(() => {
		(async () => {
			await dispatch(authenticate());
			setLoaded(true);
		})();
	}, [dispatch]);

	if (!loaded) {
		return null;
	}

	return (
		<BrowserRouter>
			<NavBar />
			{/* {loaded && ( */}
			<Switch>
				<Route path='/login' exact={true}>
					<LoginForm />
				</Route>
				{/* <Route path='/sign-up' exact={true}>
					<SignUpForm />
				</Route> */}
				<ProtectedRoute path='/users' exact={true}>
					<UsersList />
				</ProtectedRoute>
				<ProtectedRoute path='/users/:userId' exact={true}>
					<User />
				</ProtectedRoute>
        <Route path='/products' exact={true}>
          <Splash/>
        </Route>
				<Route path='/products/categories/:prod_category' exact={true}>
					<ProductCategory/>
				</Route>
				<Route path='/products/:productId' exact={true}>
				<ProductDetails />
				</Route>
				<Route path='/' exact={true}>
					<Splash />
				</Route>
				<ProtectedRoute path='/reviews/:product_id/new' exact={true}>
				<CreateReviewForm/>
				</ProtectedRoute>
				<ProtectedRoute path='/reviews/:reviewId' exact={true}>
					<UpdateReviewForm/>
				</ProtectedRoute>
				<ProtectedRoute path='/basket/:userId' exact={true}>
				<CheckoutPage/>
				</ProtectedRoute>
			</Switch>
			{/* )} */}
		</BrowserRouter>
	);
}

export default App;
