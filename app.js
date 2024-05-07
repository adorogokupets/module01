import express from 'express'

const app = express()

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile('index.html', { root: 'public' })
})

const PORT = 4000

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})