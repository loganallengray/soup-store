export const getAllSoup = () => {
    return fetch(`http://localhost:8088/soup`, {
        method: "GET"
    })
        .then(res => res.json())
}

export const getSoup = (id: number) => {
    return fetch(`http://localhost:8088/soup?id=${id}`, {
        method: "GET"
    })
        .then((res) => res.json())
}