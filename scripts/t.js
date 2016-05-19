module.exports = function (juneBot) {
  
  juneBot.hear(/talk to me/i, function(res) {
    return res.send("If you're really that lonely.")
  })

  juneBot.respond(/hi|hey/i, function(hiRes) {
    if(hiRes === "hi") {
      return hiRes.reply("Well, hi to you too, good lookin' ;)")
    } else {
      return hiRes.reply("Hey, how you doin'?")
    }
  })

}