import express from 'express'

const port = 3001
const app = express()
const router = express.Router()

app.listen(port, () => console.log(`Listening on port ${port}`))

app.get('/backend', (req, res) => {
    res.send({
        express: 'Your express backend is connected to react'
    })
})