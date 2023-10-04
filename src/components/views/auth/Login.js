import React, { useState } from "react"
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"
import { attemptLogin } from "../../../modules/fetch/authManager";

const Login = () => {
    const [email, setEmail] = useState("")
    const navigate = useNavigate()

    const handleLogin = (e) => {
        e.preventDefault()

        attemptLogin(email)
            .then(userList => {
                if (userList.length === 1) {
                    const user = userList[0]

                    localStorage.setItem("soup_user", JSON.stringify({
                        id: user.id
                    }))

                    navigate("/")
                }
                else {
                    window.alert("Invalid login")
                }
            });
    }

    return (
        <div className="auth-page">
            <form className="auth-form" onSubmit={handleLogin}>
                <h2>Please Sign In</h2>
                <div className="auth-row">
                    <label htmlFor="inputEmail">Email address</label>
                    <input
                        type="email"
                        value={email}
                        onChange={evt => setEmail(evt.target.value)}
                        className="input i-border"
                        placeholder="Type here..."
                        required autoFocus />
                </div>
                <div className="auth-row">
                    <button
                        className="button b-yellow"
                        type="submit"
                    >Sign in
                    </button>
                </div>
                <div className="auth-row auth-link">
                    <Link to="/register">Not a member yet?</Link>
                </div>
            </form>
        </div>
    )
}

export default Login;