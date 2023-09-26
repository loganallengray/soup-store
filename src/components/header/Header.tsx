import { Link, useLocation } from "react-router-dom";

const Header = () => {
    const location = useLocation();
    const currentLocation = location.pathname

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
        </div>
    )
}

export default Header;