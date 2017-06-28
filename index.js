function isHex(char) {
  const hexId = parseInt(char,16);
  return (hexId.toString(16) === char.toLowerCase())
}

function matchesEncodedPattern(string, position) {
  return (string.length > position + 6)
    && (string.charAt(position) == '_') && (string.charAt(position + 1) == 'x')
    && isHex(string.charAt(position + 2)) && isHex(string.charAt(position + 3))
    && isHex(string.charAt(position + 4)) && isHex(string.charAt(position + 5))
    && (string.charAt(position + 6) == '_');
}



module.exports = {
  decode: function(string)
  {
    if ((string.length < 7) || (string.indexOf("_x") < 0))
    {
      return string;
    }
    
    let decoded = "";
    for (let i = 0; i < string.length; i++) {
      if (matchesEncodedPattern(string, i))
      {
        decoded += String.fromCharCode(parseInt(string.substring(i + 2, i + 6), 16));
        i += 6;
      } else {
        decoded += string.charAt(i);
      }
    }
    
    return decoded.toString();
  }
}