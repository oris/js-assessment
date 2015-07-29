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
    arr.splice(arr.length - 1, 1);
    return arr;
  },

  prepend : function(arr, item) {
    arr.splice(0, 0, item);
    return arr;
  },

  curtail : function(arr) {
    arr.splice(0, 1);
    return arr;
  },

  concat : function(arr1, arr2) {
    var p = exports.arraysAnswers,
      arr3 = arr1;

    for ( var i = 0, len = arr2.length; i < len; i++ ) {
      p.append(arr3, arr2[i]);
    };
    return arr3;
  },

  insert : function(arr, item, index) {
    var p = exports.arraysAnswers,
      arr1 = arr.slice(0, index),
      arr2 = arr.slice(index, arr.length);

    p.append(arr1, item);
    return p.concat(arr1, arr2);
  },

  count : function(arr, item) {
    var counts = 0;

    for ( var i = 0, len = arr.length; i < len; i++ ) {
      if ( arr[i] === item ) counts++;
    };
    return counts;
  },

  duplicates : function(arr) {
    var p = exports.arraysAnswers,
      bunnies = [],
      catchEmNow = function catchEm(ar) {
        if ( !ar.length ) return; // end recursion

        if ( p.count( ar, ar[0] ) > 1 ) {
          p.append( bunnies, ar[0] );
          a = p.removeWithoutCopy( ar, ar[0] );
        } else {
          a = p.curtail(ar);
        };
        catchEm(a); // start recursion
    }

    catchEmNow(arr);
    return bunnies;
  },

  square : function(arr) {

  },

  findAllOccurrences : function(arr, target) {

  }
};
