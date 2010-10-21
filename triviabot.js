require('./vendor/CactusJuice/CactusJuice');
var IRC = require('./vendor/IRC-js/lib/irc');
require('./vendor/IrcWrapper/IrcWrapper');
require('./lib/Question');
require('./lib/Trivia');
require('./lib/TriviaRepository');
var ctb = require('./lib/createTriviaBot');
module.exports = {
  IRC : IRC,
  createTriviaBot : ctb.createTriviaBot
};
