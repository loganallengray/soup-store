export const getAllSoup = () => {
    return fetch(`http://localhost:8088/soup`, {
        method: "GET"
    })
        .then(res => res.json())
}