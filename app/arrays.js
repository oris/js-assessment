exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  indexOf : function(arr, item) {
    for ( var i = 0, len = arr.length; i < len; i++ ) {
      if ( arr[i] === item ) return i;
    };
    return -1;
  },

  sum : function(arr) {
    var sum = 0;

    for ( var i = 0, len = arr.length; i < len; i++ ) {
      sum += arr[i];
    };
    return sum;
  },

  remove : function(arr, item) {
    var ar = [];

    for ( var i = 0, j = 0, len = arr.length; i < len; i++ ) {
      if ( arr[i] !== item ) {
        ar[j] = arr[i];
        j++;
      };
    };
    return ar;
  },

  removeWithoutCopy : function(arr, item) {
    var i = 0;

    do {
      if ( arr[i] === item ) {
        arr.splice(i, 1);
        continue
      };
      i++
    } while ( arr[i] );
    return arr;
  },

  append : function(arr, item) {
    arr[arr.length] = item;
    return arr;
  },

  truncate : function(arr) {

  },

  prepend : function(arr, item) {

  },

  curtail : function(arr) {

  },

  concat : function(arr1, arr2) {

  },

  insert : function(arr, item, index) {

  },

  count : function(arr, item) {

  },

  duplicates : function(arr) {

  },

  square : function(arr) {

  },

  findAllOccurrences : function(arr, target) {

  }
};
