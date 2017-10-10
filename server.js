const express = require('express')
const app = express()

app.listen(8080, function () {
  console.log('Example app listening on port 8080!')
})
app.use(express.static('public'))

app.get('/greet/:name?', function (req, res) {
    var greetings = new Array();

    greetings.push("Moro");
    greetings.push("Moi");
    greetings.push("Terve");
    greetings.push("Bonjourno");
    greetings.push("Bonjour");
    //console.log(greetings[Math.floor(Math.random()*5)]);
    if (!req.params.name){
        res.send(greetings[Math.floor(Math.random()*5)]);
        return;
    }
    res.send(req.params.name + " " + greetings[Math.floor(Math.random()*5)]);
})

