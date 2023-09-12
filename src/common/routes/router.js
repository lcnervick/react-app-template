import React from 'react';
import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
// import ROUTES from './routes';
import App from '../App';
import Home from '../../pages/Home';

// this is what will render in the Outlet of App
const router = createBrowserRouter(createRoutesFromElements(
	<Route path="/" element={<App />}>
		<Route index element={<Home />} />
		{/* <Route path={ROUTES.books} element={<Books />} />
		<Route path={ROUTES.book} element={<Book />} />

		<Route path={ROUTES.movies} element={<Movies />} />
		<Route path={ROUTES.movie} element={<Movie />} />

		<Route path={ROUTES.songs} element={<Songs />} />
		<Route path={ROUTES.song} element={<Song />} /> */}
	</Route>
));
  
export default router;
