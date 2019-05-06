const baseUrl = "http://localhost:3000";


export const showSong = () => {
    return fetch(`${baseUrl}/songs`)
    .then (resp => resp.json())
    .catch(e => e)
}