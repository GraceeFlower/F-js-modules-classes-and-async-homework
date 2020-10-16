export const getPoetry = () => {
    return fetch("https://v1.jinrishici.com/all.json")
        .then(res => res.json())
        .then(data => [data.origin, data.author, data.content])
        .catch(err => console.log(err));

}