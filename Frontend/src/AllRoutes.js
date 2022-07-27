import React from 'react';
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import FreeComponent from "./components/FreeComponent";
import AuthComponent from "./components/Protected/AuthComponent";
import PrivateRoute from "./components/Protected/PrivateRoute";
import WithSubnavigation from './components/Navbar/Navbar';
import Login from './components/Account/Login';
import Register from './components/Account/Register';
const AllRoutes = () => {
    return (
        <React.Fragment>
            <WithSubnavigation />

            {/* create routes here */ }
            <Routes>
                <Route path="/" element={ <Home /> } />
                <Route path="/signin" element={ <Login /> } />
                <Route path="/signup" element={ <Register /> } />
                <Route path="/free" element={ <FreeComponent /> } />
                <Route
                    exact
                    path="/auth"
                    element={
                        <PrivateRoute>
                            <AuthComponent />
                        </PrivateRoute>
                    }
                />
            </Routes>
        </React.Fragment>
    );
};

export default AllRoutes;