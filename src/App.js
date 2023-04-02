import './App.css';
import Sidebar from "./components/Sidebar";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import IndexComponent from "./components/Index/IndexComponent";
import SignIn from "./components/SignInComponent";
import SignUpComponent from "./components/SignUpComponent";
import PrivateRoute from "./components/PrivateRoute";

function App() {
    return (
        <div className="App">
            <Sidebar/>
            <BrowserRouter>
                <Routes>
                    <Route
                        exact path="/"
                        element={
                            <PrivateRoute>
                                <IndexComponent/>
                            </PrivateRoute>
                        }
                    />


                    <Route path="/login" element={<SignIn/>}/>
                    <Route path="/register" element={<SignUpComponent/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
