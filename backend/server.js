const express = require("express")
const app = express()
const port = 5000

app.get("/", (req, res) => {
    res.send("Hello mic check 1, 2, 3, it is working.")
})

app.listen(port, () => {
    console.log(`Server is listening on port: ${port}.`)
})