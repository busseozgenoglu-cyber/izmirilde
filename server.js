const express = require('express')
const path = require('path')

const app = express()
const PORT = parseInt(process.env.PORT) || 3000

const DIST = path.join(__dirname, 'dist')

app.use(express.static(DIST))

app.get('*', (req, res) => {
  res.sendFile(path.join(DIST, 'index.html'))
})

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server on port ${PORT}`)
})
