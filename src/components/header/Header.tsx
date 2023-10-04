import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import AppContext from "../../modules/context/app-context";

const Header = () => {
    const location = useLocation();
    const currentLocation = location.pathname
    const navigate = useNavigate();

    const cxt = useContext(AppContext);
    const isLoggedIn = cxt?.isLoggedIn;
    const setIsLoggedIn = cxt?.setIsLoggedIn;

    const logout = () => {
        localStorage.clear();

        setIsLoggedIn(false);

        navigate("/");
    }

    return (
        <div id="header">
            <Link
                className={"header-link-item" + `${currentLocation === "/" ? " " + "header-selected-item" : ""}`}
                to="/">
                <p>
                    SoupScript
                </p>
            </Link>
            <Link
                className={"header-link-item" + `${currentLocation === "/menu" ? " " + "header-selected-item" : ""}`}
                to="/menu">
                <p>
                    Menu
                </p>
            </Link>
            <Link
                className={"header-link-item" + `${currentLocation === "/cart" ? " " + "header-selected-item" : ""}`}
                to="/cart">
                <p>
                    Cart
                </p>
            </Link>
            {isLoggedIn ? (
                <div
                    className="header-link-item"
                    onClick={logout}>
                    <p>
                        Logout
                    </p>
                </div>
            ) : (
                <>
                    <Link
                        className={"header-link-item" + `${currentLocation === "/login" ? " " + "header-selected-item" : ""}`}
                        to="/login">
                        <p>
                            Login
                        </p>
                    </Link>
                    <Link
                        className={"header-link-item" + `${currentLocation === "/register" ? " " + "header-selected-item" : ""}`}
                        to="/register">
                        <p>
                            Sign Up
                        </p>
                    </Link>
                </>
            )}
        </div>
    )
}

export default Header;