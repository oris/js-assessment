exports = (typeof window === 'undefined') ? global : window;

exports.countAnswers =  {
  count : function (start, end) {
    var num = start;

    var countNow = function countOn() {
      if (num > end) {
        return;
      };
      console.log(num);

      setTimeout(function () {
        num++;
        countOn()}, 100);
    };

    countNow();
  }
};
