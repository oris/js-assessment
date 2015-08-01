exports = (typeof window === 'undefined') ? global : window;

exports.functionsAnswers = {
  argsAsArray : function(fn, arr) {
    return fn.apply(this, arr);
  },

  speak : function(fn, obj) {
    return fn.apply(obj);
  },

  functionFunction : function(str) {
    return function(str2) {
      return str + ', ' + str2;
    }
  },

  makeClosures : function(arr, fn) {
    var res = [];

    for (var i = 0, len = arr.length; i < len; i++) {
      (function () {
        var x = arr[i];

        res.push(function() { return fn(x) });
      })();
    };

    return res;
  },

  partial : function(fn, str1, str2) {
    return fn.bind(this, str1, str2);
  },

  useArguments : function() {
    var sum = 0;

    for (var i = 0, len = arguments.length; i < len; i++) {
      sum += arguments[i];
    }

    return sum;
  },

  callIt : function(fn) {
    var args = Array.prototype.slice.call(arguments, 1);

    return fn.apply(this, args);
  },

  partialUsingArguments : function(fn) {

  },

  curryIt : function(fn) {

  }
};
