const router = require("express").Router()

router.get("/", (req, res) => {
    //TODO: change to req.body.link
    const link = req.query.link

    // Add code to save link to database

    res.send({ message: "Link sucessfully submitted", link: link})
})

module.exports = router