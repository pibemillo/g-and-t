module.exports = function (juneBot) {
  
  juneBot.hear(/talk to me/i, function(res) {
    return res.send("Like lovers do.")
  })


/*  juneBot.respond((/hi/i) || (/hey/i), function(hiRes) {
    if(hiRes == "hi") {
      return hiRes.reply("Well, hi to you too, good lookin' ;)")
    } else {
      return hiRes.reply("Hey, how you doin'?")
    }
  })*/

  junBot.respond(/(.*)/i, function(hiRes){
    var resType = res.match[1]
    if (resType === "hi") {
      return hiRes.reply("Well, hi to you too, good lookin' ;)")
    } else if (resType === "hey") {
      return hiRes.reply("Hey, how you doin'?")
    }
  })

}