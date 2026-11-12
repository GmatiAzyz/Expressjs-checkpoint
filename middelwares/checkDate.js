


const checkDate = (req, res, next) => {
    const date = new Date()
    const day = date.getDay()
    const hours = date.getHours()

    if (day === 6 || day === 0 || hours < 9 || hours > 15) {
        res.send("sorry bro bad timing" )
}   
    else {
    next()
}}

module.exports = checkDate