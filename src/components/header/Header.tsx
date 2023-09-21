import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div id="header">
            <Link
                className="header-link-item"
                to="/">
                <p>
                    SoupScript
                </p>
            </Link>
            <Link
                className="header-link-item"
                to="/menu">
                <p>
                    Menu
                </p>
            </Link>
            <Link
                className="header-link-item"
                to="/cart">
                <p>
                    Cart
                </p>
            </Link>
        </div>
    )
}

export default Header;