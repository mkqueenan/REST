const express = require('express')
const router = express.Router()
const Post = require('../models/Post')

// get all posts
router.get('/', async (req, res) => {
    try {
        const posts = await Post.find()
        res.json(posts)
    } catch (err) {
        res.json({ message: err })
    }
})

// get specific post
router.get('/:postId', async (req, res) => {
    try {
        const result = await Post.findById(req.params.postId)
        res.json(result)
    } catch (err) {
        res.json({ message: err })
    }
})

// submit a single post
router.post('/', async (req, res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description,
    })
    // post.save()
    //     .then(data => {
    //         res.status(200).json(data)
    //     })
    //     .catch(err => {
    //         res.json({
    //             message: err,
    //         })
    //     })
    try {
        const savedPost = await post.save()
        res.json(savedPost)
    } catch (err) {
        res.json({ message: err })
    }
})

// delete specific post
router.delete('/:postId', async (req, res) => {
    try {
        const result = await Post.findByIdAndDelete(req.params.postId)
        res.json(result)
    } catch (err) {
        res.json({ message: err })
    }
})

// update existing post
router.patch('/:postId', async (req, res) => {
    try {
        const result = await Post.findByIdAndUpdate(req.params.postId, {
            $set: req.body,
        })
        res.json(result)
    } catch (err) {
        res.json({ message: err })
    }
})

module.exports = router
