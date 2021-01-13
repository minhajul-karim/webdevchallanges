/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var now = exports.now = function now() {
    return {
        hours: new Date().getHours(),
        minutes: new Date().getMinutes(),
        seconds: new Date().getSeconds()
    };
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _utility = __webpack_require__(0);

var getClockTemplate = function getClockTemplate(id) {
  return '\n    <div id="clock-' + id + '"" class="clock">\n      <div class="hand second-hand" id="clock-' + id + '-second-hand"></div>\n      <div class="hand minute-hand" id="clock-' + id + '-minute-hand"></div>\n      <div class="hand hour-hand" id="clock-' + id + '-hour-hand"></div>\n      <div class="clock-center"></div>\n    </div>';
};

var startClock = function startClock() {
  document.getElementById('clock-area').innerHTML = getClockTemplate(0);
  var secondHand = document.querySelector('.second-hand');
  var minuteHand = document.querySelector('.minute-hand');
  var hourHand = document.querySelector('.hour-hand');

  var _now = (0, _utility.now)(),
      hours = _now.hours,
      minutes = _now.minutes,
      seconds = _now.seconds;

  setInterval(function () {
    seconds++;
    if (seconds > 59) {
      seconds = 0;
      minutes++;
    }
    if (minutes > 59) {
      minutes = 0;
      hours++;
    }
    if (hours > 23) {
      hours = 0;
    }
    var secondDegree = 270 + 6 * seconds;
    var minuteDegree = 270 + (60 * minutes + seconds) / 10;
    var hourDegree = 270 + (3600 * hours + 60 * minutes + seconds) / 120;
    secondHand.style.transform = 'rotate(' + secondDegree + 'deg) translate(50%)';
    minuteHand.style.transform = 'rotate(' + minuteDegree + 'deg) translate(50%)';
    hourHand.style.transform = 'rotate(' + hourDegree + 'deg) translate(50%)';
  }, 1000);
};

startClock();

// Play audio
var soundInput = document.getElementById('soundInput');
var track = document.getElementById('tick-sound');
var intervalId = null;
soundInput.addEventListener('change', function (event) {
  if (event.target.checked) {
    intervalId = setInterval(function () {
      track.play();
    }, 1000);
  } else {
    clearInterval(intervalId);
  }
});

/***/ })
/******/ ]);