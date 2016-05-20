module.exports = function (juneBot) {
  
  juneBot.hear(/talk to me/i, function(res) {
    return res.send("Like lovers do.")
  })

  juneBot.respond(/\bhi\b|\bhey\b/i, function(hiRes) {
    if(hiRes === /hi/) {
      return hiRes.reply("Well, hi to you too, good lookin' ;)")
    } else {
      return hiRes.reply("Hey, how you doin'?")
    }
  })

}