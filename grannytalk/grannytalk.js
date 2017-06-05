console.log('Granny Talk Warmup')

var randomYear = function(min, max) {
  return  Math.floor(Math.random() * (max - min + 1) + min);
}

var grannyTalk = function(iSay) {
  if (iSay.toLowerCase() === 'bye') {
    console.log("What's that honey, I didn't hear you")
  } else if (iSay === iSay.toUpperCase()) {
    console.log("NO, NOT SINCE " + randomYear(1930, 1950));
  } else {
    console.log('SPEAK UP SONNY JIM')
  }
}
