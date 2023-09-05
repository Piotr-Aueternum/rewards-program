const express = require('express')
const app = express()
const port = 3010

app.get('/api/customers/rewards', (req, res) => {
    res.json([])
})

app.listen(port, () => {
    console.log(`Mock server listen on port ${port}`)
})