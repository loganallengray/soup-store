import { Route, Routes } from "react-router-dom";
import Homepage from "./views/homepage/Homepage";
import SoupList from "./views/soupList/SoupList";
import Cart from "./views/cart/Cart";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/menu" element={<SoupList />} />
            <Route path="/cart" element={<Cart />} />
        </Routes>
    )
}

export default AppRoutes;