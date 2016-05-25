module.exports = function (juneBot) {
  
  juneBot.hear(/talk to me/i, function(res) {
    return res.send("Like lovers do. \n Now that song is stuck in your head. Mwahaha!")
  })

  juneBot.respond(/(.*)/i, function(hiRes){
    var resType = hiRes.match[1]
    if (resType === "hi") {
      return hiRes.reply("Well, hi to you too, good lookin' ;)")
    } else if (resType === "hey") {
      return hiRes.reply("Hey, how you doin'?")
    }
  })

  juneBot.hear(/cheerios/i, function(cheerRes){
    var myArray = [
      "you're alright, kid!",
      "you're a rockstar!",
      "legend!",
      "champion!"
    ]

    var ri = Math.floor(Math.random() * myArray.length)
    return cheerRes.send(myArray[ri])
  })


}

