const usersUrl = 'https://jsonplaceholder.typicode.com/users'
const usersPostsUrl = 'https://jsonplaceholder.typicode.com/posts'

const getUsers = () => {
    return getFetch(usersUrl)
}

const getUsersPosts = (userId: number) => {
    return getFetch(usersPostsUrl, {userId: userId})
}

const getFetch = async (url: string, params: {} = {}) => {
    const queryString = Object.entries(params).map(entry => {
        return `${entry[0]}=${entry[1]}`
    }).join('&')
    const res = await fetch(
        `${url}?${queryString}`,
        {
            method: "Get",
            headers: { "Content-Type": "application/json" }
        }
    )
    return res.json()
}

export default getUsers().then(users => {
    users.forEach(user => {
        getUsersPosts(user.id).then(posts => {
            console.log(`${user.name} has written ${posts.length} posts.`)
        })
    });
})