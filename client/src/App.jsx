/* eslint-disable no-unused-vars */
import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectRoute from "./components/auth/ProtectRoute";
import { LayoutLoader } from "./components/layout/Loaders";

const Home = lazy(() => import("./pages/Home"));
const Login = lazy(() => import("./pages/Login"));
const Chat = lazy(() => import("./pages/Chat"));
const Groups = lazy(() => import("./pages/Groups"));
const About = lazy(() => import("./pages/About"));
const NotFound = lazy(() => import("./pages/NotFound"));

let user = true;

const App = () => {
	return (
		<BrowserRouter>
			<Suspense fallback={<LayoutLoader />}>
				<Routes>
					<Route element={<ProtectRoute user={user} />}>
						<Route path='/' element={<Home />} />
						<Route path='/groups' element={<Groups />} />
						<Route path='/chat/:chatId' element={<Chat />} />
						<Route path='/about' element={<About />} />
					</Route>
					<Route
						path='/login'
						element={
							<ProtectRoute user={!user} redirect='/'>
								<Login />
							</ProtectRoute>
						}
					/>

					<Route path='*' element={<NotFound />} />
				</Routes>
			</Suspense>
		</BrowserRouter>
	);
};

export default App;

/*
using suspense 

<Routes>
				<Route element={<ProtectRoute user={user} />}>
					<Route path='/' element={<Home />} />
					<Route path='/groups' element={<Groups />} />
					<Route path='/chat/:chatId' element={<Chat />} />
					<Route path='/about' element={<About />} />
				</Route>
				<Route
					path='/login'
					element={
						<ProtectRoute user={!user} redirect='/'>
							<Login />
						</ProtectRoute>
					}
				/>

				<Route path='*' element={<NotFound />} />
			</Routes>



Easy way up

<BrowserRouter>
			<Routes>
				<Route
					path='/'
					element={
						<ProtectRoute user={user}>
							<Home />
						</ProtectRoute>
					}
				/>
				<Route path='/login' element={<Login />} />
				<Route path='/groups' element={<Groups />} />
				<Route path='/chat/:chatId' element={<Chat />} />
				<Route path='/about' element={<About />} />
			</Routes>
		</BrowserRouter>
*/
