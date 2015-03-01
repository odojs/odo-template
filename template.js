// Generated by CoffeeScript 1.8.0
var bind;

bind = function() {
  return function(string, payload) {
    if (payload == null) {
      return string;
    }
    return string.replace(/{([^{}]+)}/g, function(original, key) {
      if (payload[key] == null) {
        return original;
      }
      return payload[key];
    });
  };
};

module.exports = bind();
