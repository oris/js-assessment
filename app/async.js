exports = (typeof window === 'undefined') ? global : window;

exports.asyncAnswers = {
  async : function(value) {
    return new Promise(function(fulfill) {
      fulfill(value);
    });
  },

  manipulateRemoteData : function(url) {

  }
};
