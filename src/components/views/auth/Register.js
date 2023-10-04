import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { attemptLogin, registerNewUser } from "../../../modules/fetch/authManager"

export const Register = () => {
    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        email: "",
        address: "",
        balance: 0
    })

    const navigate = useNavigate()

    const updateUser = (e) => {
        const copy = { ...user }

        copy[e.target.id] = e.target.value

        setUser(copy)
    }

    const handleRegister = (e) => {
        e.preventDefault()
        attemptLogin(user.email)
            .then(res => {
                if (res.length > 0) {
                    // Duplicate email. No good.
                    window.alert("Account with that email address already exists")
                }
                else {
                    // Good email, create user.
                    registerNewUser(user)
                        .then(createdUser => {
                            if (createdUser.hasOwnProperty("id")) {
                                navigate("/login")
                            }
                        })
                }
            })
    }

    return (
        <div className="auth-page">
            <form className="auth-form" onSubmit={handleRegister}>
                <h2>Please Register an Account</h2>
                <div className="auth-row">
                    <label htmlFor="fullName">First Name</label>
                    <input onChange={updateUser}
                        type="text" id="firstName" className="input i-border"
                        placeholder="Type here..." required autoFocus />
                </div>
                <div className="auth-row">
                    <label htmlFor="lastName">Last Name</label>
                    <input onChange={updateUser}
                        type="text" id="lastName" className="input i-border"
                        placeholder="Type here..." required autoFocus />
                </div>
                <div className="auth-row">
                    <label htmlFor="email">Email address</label>
                    <input onChange={updateUser}
                        type="email" id="email" className="input i-border"
                        placeholder="Type here..." required />
                </div>
                <div className="auth-row">
                    <button
                        className="button b-yellow"
                        type="submit"
                    >Register</button>
                </div>
            </form>
        </div>
    )
}

