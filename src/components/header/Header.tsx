import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div id="header">
            <Link
                className="header-link-item"
                to="/"
            >SoupScript</Link>
            <Link
                className="header-link-item"
                to="/menu"
            >Menu</Link>
            <Link
                className="header-link-item"
                to="/cart"
            >Cart</Link>
        </div>
    )
}

export default Header;