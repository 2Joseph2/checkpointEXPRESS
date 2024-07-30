const path = require('path');

function time(req,res,next){
    let hours = new Date().getHours()
    let day = new Date().getDay()
    if (day===6 ||day===7 || hours>17 || hours <9 ) {
        res.sendFile(path.join(__dirname, 'views/time.html'))
    } else {
        next()
    }
}

module.exports = time