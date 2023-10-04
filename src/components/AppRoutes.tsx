import { Route, Routes } from "react-router-dom";
import Homepage from "./views/homepage/Homepage";
import SoupList from "./views/soupList/SoupList";
import Cart from "./views/cart/Cart";
import SoupDetails from "./views/soupDetails/SoupDetails";
import Login from "./views/auth/Login";
import { Register } from "./views/auth/Register";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/">
                <Route index element={<Homepage />} />
                <Route path="menu">
                    <Route index element={<SoupList />} />
                    <Route path=":id" element={<SoupDetails />} />
                </Route>
                <Route path="cart" element={<Cart />} />
                {true ? (
                    <>
                        <Route path="login" element={<Login />} />
                        <Route path="register" element={<Register />} />
                    </>
                ) : null}
            </Route>
        </Routes>
    )
}

export default AppRoutes;