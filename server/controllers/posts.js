import PostMessage from '..models/postMessage.js'

export const getPosts = (req, res) => {
    res.send("THIS WORKS!")
}

export const createPost = (req, res) => {
    res.send('Post Creation')
}