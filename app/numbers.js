exports = (typeof window === 'undefined') ? global : window;

exports.numbersAnswers = {
  valueAtBit: function(num, bit) {
    var mask = Math.pow(2, bit - 1);

    return (mask & num) ? 1 : 0;
  },

  base10: function(str) {
    return parseInt(str, 2);
  },

  convertToBinary: function(num) {
    var bits = 8,
      binaryNumStr = num.toString(2);

    return '0'.repeat(bits - binaryNumStr.length) + binaryNumStr;
  },

  multiply: function(a, b) {
    function getPrecision(num) {
      return num.toString().length - 2;
    }
    var prec = (getPrecision(a) > getPrecision(b)) ?
                    getPrecision(a) : getPrecision(b);

    return parseFloat((a * b).toPrecision(prec));
  }
};
