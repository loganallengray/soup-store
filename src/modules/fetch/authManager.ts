import { useNavigate } from "react-router-dom";
import { IUser } from "../interfaces";

export const attemptLogin = (email: string) => {
    return fetch(`http://localhost:8088/users?email=${email}`, {
        method: "GET"
    })
        .then(res => res.json())
}

export const registerNewUser = (user: IUser) => {
    return fetch("http://localhost:8088/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    })
        .then(res => res.json())
}