import { Link, useLocation } from "react-router-dom";

const Header = () => {
    const location = useLocation();
    const currentLocation = location.pathname

    const logout = () => {

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
            {true ? (
                <Link
                    className={"header-link-item" + `${currentLocation === "/login" ? " " + "header-selected-item" : ""}`}
                    to="/login">
                    <p>
                        Login
                    </p>
                </Link>
            ) : (
                <div
                    className="header-link-item"
                    onClick={logout}>
                    <p>
                        Logout
                    </p>
                </div>
            )}
        </div>
    )
}

export default Header;