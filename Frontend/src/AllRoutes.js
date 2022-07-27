//import dependencies
import React from 'react';
import { Route, Routes } from "react-router-dom";

// Import Routes
import Home from "./Home";
import FreeComponent from "./components/FreeRoutes/FreeComponent";
import AuthComponent from "./components/ProtectedRoutes/AuthComponent";
import PrivateRoute from "./Middleware/PrivateRoute";
import Navbar from './components/Navbar/Navbar';
import Login from './components/Account/Login';
import Register from './components/Account/Register';


// All Routes
const AllRoutes = () => {
    return (
        <React.Fragment>
            {/* Navbar */}
            <Navbar />

            {/* create routes here */ }
            <Routes>
                <Route path="/" element={ <Home /> } />
                <Route path="/signin" element={ <Login /> } />
                <Route path="/signup" element={ <Register /> } />
                <Route path="/free" element={ <FreeComponent /> } />

                {/* Protected Routes */}
                <Route
                    exact
                    path="/auth"
                    element={
                        <PrivateRoute>
                            <AuthComponent />
                        </PrivateRoute>
                    }
                />
                    {/* universal routes */}
                <Route path="*" element={ <Home /> } />


            </Routes>
        </React.Fragment>
    );
};

export default AllRoutes;