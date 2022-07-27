import { Navigate } from "react-router-dom";
import Cookies from "universal-cookie";
const cookies = new Cookies();

function PrivateRoute({ children }) {
    // get cookie from browser if logged in
    const token = cookies.get("TOKEN");
    // console.log({token});
    return token ? children : <Navigate to="/signin" />;
}

export default PrivateRoute;