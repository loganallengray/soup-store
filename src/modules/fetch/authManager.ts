import { useNavigate } from "react-router-dom";


export const attemptLogin = (email: string) => {
    return fetch(`http://localhost:8088/users?email=${email}`, {
        method: "GET"
    })
        .then(res => res.json())
}