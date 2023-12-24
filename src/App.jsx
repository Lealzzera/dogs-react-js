import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import { UserStorage } from "./Context/UserContext";
import User from "./Components/User/User";
import ProtectedRoute from "./Components/Helper/ProtectedRoute";
import Photo from "./Components/Feed/Components/Photo/Photo";
import UserProfile from "./Components/User/Components/UserProfile/UserProfile";

const App = () => {
	return (
		<div>
			<BrowserRouter>
				<UserStorage>
					<Header />
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='login/*' element={<Login />} />
						<Route
							path='conta/*'
							element={
								<ProtectedRoute>
									<User />
								</ProtectedRoute>
							}
						/>
						<Route path='foto/:id' element={<Photo />} />
						<Route path='perfil/:user' element={<UserProfile />} />
					</Routes>
					<Footer />
				</UserStorage>
			</BrowserRouter>
		</div>
	);
};

export default App;
