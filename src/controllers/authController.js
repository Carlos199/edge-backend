const express = require('express')

const User = require('../models/User')

const router = express.Router()

router.post('/register', async (req, res) => {
  const data = req.body
  try {
    const user = await User.create(data)
    return res.send({ user })
  } catch (err) {
    return res.status(400).send({ errror: 'Registration failed' })
  }
})

module.exports = app => app.use('/auth', router)
