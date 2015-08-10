exports = (typeof window === 'undefined') ? global : window;

exports.asyncAnswers = {
  async : function(value) {
    return new Promise(function(fulfill) {
      fulfill(value);
    });
  },

  manipulateRemoteData : function(url) {
    var result = [],
      dfd = $.Deferred();

    $.when($.getJSON(url)).then(function(data) {
      result = data.people.map(function(person) {
        return person.name;
      }).sort();
      dfd.resolve(result);
    });

    return dfd.promise();
  }
};
