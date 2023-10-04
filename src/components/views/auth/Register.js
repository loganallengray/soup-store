import { useState } from "react"
import { useNavigate } from "react-router-dom"

export const Register = (props) => {
    const [player, setPlayer] = useState({
        name: "",
        email: "",
        currency: 0,
        wins: 0,
        losses: 0
    })
    let navigate = useNavigate()

    const registerNewUser = () => {
        return fetch("http://localhost:8088/players", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(player)
        })
            .then(res => res.json())
            .then(createdUser => {
                if (createdUser.hasOwnProperty("id")) {
                    localStorage.setItem("lotto_user", JSON.stringify({
                        id: createdUser.id
                    }))

                    navigate("/")
                }
            })
    }

    const handleRegister = (e) => {
        e.preventDefault()
        return fetch(`http://localhost:8088/players?email=${player.email}`)
            .then(res => res.json())
            .then(response => {
                if (response.length > 0) {
                    // Duplicate email. No good.
                    window.alert("Account with that email address already exists")
                }
                else {
                    // Good email, create user.
                    registerNewUser()
                }
            })
    }

    const updatePlayer = (evt) => {
        const copy = { ...player }
        copy[evt.target.id] = evt.target.value
        setPlayer(copy)
    }

    return (
        <div className="auth-page">
            <form className="auth-form" onSubmit={handleRegister}>
                <h2>Please Register for Faux Lotto</h2>
                <div className="auth-row">
                    <label htmlFor="name"> Full Name </label>
                    <input onChange={updatePlayer}
                        type="text" id="name" className="input i-border"
                        placeholder="Enter your name" required autoFocus />
                </div>
                <div className="auth-row">
                    <label htmlFor="email"> Email address </label>
                    <input onChange={updatePlayer}
                        type="email" id="email" className="input i-border"
                        placeholder="Email address" required />
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

