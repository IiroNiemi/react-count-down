"use strict";

var DateBetween = function DateBetween(startDate, endDate) {
  var second = 0;

  if (endDate > startDate) {
    second = -1000;
  } else {
    second = 1000;
  }

  var minute = second * 60;
  var hour = minute * 60;
  var day = hour * 24;
  var distance = endDate - startDate;

  if (distance < 0) {// return false
  }

  console.log(distance);
  var days = Math.floor(distance / day);
  var hours = Math.floor(distance % day / hour);
  var minutes = Math.floor(distance % hour / minute);
  var seconds = Math.floor(distance % minute / second);
  var between = [];
  days > 0 ? between.push("".concat(days, " p\xE4iv\xE4\xE4")) : false;
  hours > 0 ? between.push("".concat(hours, " tuntia")) : false;
  minutes > 0 ? between.push("".concat(minutes, " minuuttia")) : false;
  seconds > 0 ? between.push("".concat(seconds, " sekuntia")) : false;
  return between.join(' ');
};

module.exports = DateBetween;