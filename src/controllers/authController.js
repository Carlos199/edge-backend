const express = require('express')

const User = require('../models/User')

const router = express.Router()

router.post('/register', async (req, res) => {
  console.log(req.body)
  try {
    const user = await User.create(req.body)
    console.log(user)
    return res.send({ user })
  } catch (err) {
    return res.status(400).send({ error: 'Registration failed' })
  }
})

module.exports = app => app.use('/auth', router)
