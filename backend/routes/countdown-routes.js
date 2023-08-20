const router = require("express").Router()

const dDay = new Date('2023-09-13T00:00:00')

const formatTime = (milliseconds) => {
    const days = Math.floor(milliseconds / (1000 * 60 * 60 * 24));
    const hours = Math.floor((milliseconds % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((milliseconds % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((milliseconds % (1000 * 60)) / 1000);

    return {
        "days": days,
        "hours": hours,
        "minutes": minutes,
        "seconds": seconds
    }
}

router.get("/", (req, res) => {
    const timeTo = dDay - new Date()
    res.send(formatTime(timeTo))
})

module.exports = router