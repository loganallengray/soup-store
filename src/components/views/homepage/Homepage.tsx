import { useNavigate } from "react-router-dom";

const Homepage = () => {
    const navigate = useNavigate();

    return (
        <div id="home-page">
            <div id="home-image-one" className="home-image-container">
                <div className="home-image-text-container">
                    <h1>SoupScript</h1>
                    <h2>Soup for the Aspiring Programmer</h2>
                    <button id="home-page-menu-link" className="button"
                        onClick={() => navigate("/menu")}>View Menu</button>
                </div>
            </div>
        </div>
    )
}

export default Homepage;