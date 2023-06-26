/**
 * @author      Nhatcoder2k3
 * @version     1.0.0
 * @homeurl     https://www.facebook.com/vuminhnhat10092003
 */
const gradient = require('gradient-string');
module.exports = () => {
  const str = "   _____ _____ _   _   ____   ____ _______ \r\n  \/ ____|_   _| \\ | | |  _ \\ \/ __ \\__   __|\r\n | |  __  | | |  \\| | | |_) | |  | | | |   \r\n | | |_ | | | | . ` | |  _ <| |  | | | |   \r\n | |__| |_| |_| |\\  | | |_) | |__| | | |   \r\n  \\_____|_____|_| \\_| |____\/ \\____\/  |_|   \r\n                                           \r\n                                            ";
  console.log(gradient.rainbow(str));
}