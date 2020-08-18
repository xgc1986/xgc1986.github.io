/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Exercise/DotsExercise.ts":
/*!**************************************!*\
  !*** ./src/Exercise/DotsExercise.ts ***!
  \**************************************/
/*! namespace exports */
/*! export DotsExercise [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DotsExercise": () => /* binding */ DotsExercise
/* harmony export */ });
function distance(dot) {
    return Math.sqrt(dot.x * dot.x + dot.y * dot.y);
}
var DotsExercise = /** @class */ (function () {
    function DotsExercise(totalDots, canvas) {
        this.totalDots = totalDots;
        this.canvas = canvas;
        this.dots = [];
        for (var i = 0; i < this.totalDots; i++) {
            this.dots.push({
                x: (Math.random() * 200 | 0) - 100,
                y: (Math.random() * 200 | 0) - 100
            });
        }
        this.setupCanvas();
        this.draw();
    }
    DotsExercise.prototype.draw = function () {
        var context = this.canvas.getContext('2d');
        context.beginPath();
        /*
        context.moveTo(10, 110);
        context.lineTo(210, 110);
        context.moveTo(110, 10);
        context.lineTo(110, 210);
        context.stroke();

        context.beginPath();
        context.moveTo(210, 110);
        context.arc(110, 110, 100, 0, 2 * Math.PI);
        context.stroke();
        */
        context.beginPath();
        context.rect(10, 10, 200, 200);
        context.stroke();
        for (var _i = 0, _a = this.dots; _i < _a.length; _i++) {
            var dot = _a[_i];
            context.beginPath();
            if (distance(dot) > 100) {
                context.strokeStyle = 'rgba(194, 24, 7, 0.25)';
                context.fillStyle = 'rgba(194, 24, 7, 0.25)';
            }
            else {
                context.strokeStyle = 'rgba(12, 56, 166, 0.25)';
                context.fillStyle = 'rgba(12, 56, 166, 0.25)';
            }
            context.arc(dot.x + 110, dot.y + 110, 1, 0, 2 * Math.PI);
            context.stroke();
            context.fill();
        }
    };
    DotsExercise.prototype.setupCanvas = function () {
        var dpr = window.devicePixelRatio;
        var rect = this.canvas.getBoundingClientRect();
        this.canvas.width = rect.width * dpr;
        this.canvas.height = rect.height * dpr;
        var ctx = this.canvas.getContext('2d');
        ctx.scale(dpr, dpr);
    };
    return DotsExercise;
}());



/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Exercise_DotsExercise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Exercise/DotsExercise */ "./src/Exercise/DotsExercise.ts");

function distance(dot) {
    return Math.sqrt(dot.x * dot.x + dot.y * dot.y);
}
var exercise = new _Exercise_DotsExercise__WEBPACK_IMPORTED_MODULE_0__.DotsExercise(10000, document.querySelector('canvas'));
var inside = 0;
var outside = 0;
for (var _i = 0, _a = exercise.dots; _i < _a.length; _i++) {
    var dot = _a[_i];
    distance(dot) <= 100
        ? inside++
        : outside++;
}
console.info({
    inside: inside,
    outside: outside,
    ratio: inside / exercise.totalDots,
    fourRatio: 4 * (inside / exercise.totalDots),
    pi: Math.PI
});
console.info('reload');


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.ts");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90eXBlc2NyaXB0LWJvaWxlcnBsYXRlLy4vc3JjL0V4ZXJjaXNlL0RvdHNFeGVyY2lzZS50cyIsIndlYnBhY2s6Ly90eXBlc2NyaXB0LWJvaWxlcnBsYXRlLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovL3R5cGVzY3JpcHQtYm9pbGVycGxhdGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdC1ib2lsZXJwbGF0ZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdC1ib2lsZXJwbGF0ZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3R5cGVzY3JpcHQtYm9pbGVycGxhdGUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90eXBlc2NyaXB0LWJvaWxlcnBsYXRlL3dlYnBhY2svc3RhcnR1cCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLG9CQUFvQjtBQUMzQztBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QyxnQkFBZ0I7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUN1Qjs7Ozs7Ozs7Ozs7Ozs7OztBQzdEK0I7QUFDdkQ7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLGdFQUFZO0FBQy9CO0FBQ0E7QUFDQSxvQ0FBb0MsZ0JBQWdCO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7Ozs7Ozs7VUNwQkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDckJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSxzRjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7OztVQ05BO1VBQ0E7VUFDQTtVQUNBIiwiZmlsZSI6ImRvdHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBkaXN0YW5jZShkb3QpIHtcclxuICAgIHJldHVybiBNYXRoLnNxcnQoZG90LnggKiBkb3QueCArIGRvdC55ICogZG90LnkpO1xyXG59XHJcbnZhciBEb3RzRXhlcmNpc2UgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBEb3RzRXhlcmNpc2UodG90YWxEb3RzLCBjYW52YXMpIHtcclxuICAgICAgICB0aGlzLnRvdGFsRG90cyA9IHRvdGFsRG90cztcclxuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcclxuICAgICAgICB0aGlzLmRvdHMgPSBbXTtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMudG90YWxEb3RzOyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5kb3RzLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgeDogKE1hdGgucmFuZG9tKCkgKiAyMDAgfCAwKSAtIDEwMCxcclxuICAgICAgICAgICAgICAgIHk6IChNYXRoLnJhbmRvbSgpICogMjAwIHwgMCkgLSAxMDBcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2V0dXBDYW52YXMoKTtcclxuICAgICAgICB0aGlzLmRyYXcoKTtcclxuICAgIH1cclxuICAgIERvdHNFeGVyY2lzZS5wcm90b3R5cGUuZHJhdyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgY29udGV4dCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcbiAgICAgICAgY29udGV4dC5iZWdpblBhdGgoKTtcclxuICAgICAgICAvKlxyXG4gICAgICAgIGNvbnRleHQubW92ZVRvKDEwLCAxMTApO1xyXG4gICAgICAgIGNvbnRleHQubGluZVRvKDIxMCwgMTEwKTtcclxuICAgICAgICBjb250ZXh0Lm1vdmVUbygxMTAsIDEwKTtcclxuICAgICAgICBjb250ZXh0LmxpbmVUbygxMTAsIDIxMCk7XHJcbiAgICAgICAgY29udGV4dC5zdHJva2UoKTtcclxuXHJcbiAgICAgICAgY29udGV4dC5iZWdpblBhdGgoKTtcclxuICAgICAgICBjb250ZXh0Lm1vdmVUbygyMTAsIDExMCk7XHJcbiAgICAgICAgY29udGV4dC5hcmMoMTEwLCAxMTAsIDEwMCwgMCwgMiAqIE1hdGguUEkpO1xyXG4gICAgICAgIGNvbnRleHQuc3Ryb2tlKCk7XHJcbiAgICAgICAgKi9cclxuICAgICAgICBjb250ZXh0LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgIGNvbnRleHQucmVjdCgxMCwgMTAsIDIwMCwgMjAwKTtcclxuICAgICAgICBjb250ZXh0LnN0cm9rZSgpO1xyXG4gICAgICAgIGZvciAodmFyIF9pID0gMCwgX2EgPSB0aGlzLmRvdHM7IF9pIDwgX2EubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgICAgIHZhciBkb3QgPSBfYVtfaV07XHJcbiAgICAgICAgICAgIGNvbnRleHQuYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgICAgIGlmIChkaXN0YW5jZShkb3QpID4gMTAwKSB7XHJcbiAgICAgICAgICAgICAgICBjb250ZXh0LnN0cm9rZVN0eWxlID0gJ3JnYmEoMTk0LCAyNCwgNywgMC4yNSknO1xyXG4gICAgICAgICAgICAgICAgY29udGV4dC5maWxsU3R5bGUgPSAncmdiYSgxOTQsIDI0LCA3LCAwLjI1KSc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb250ZXh0LnN0cm9rZVN0eWxlID0gJ3JnYmEoMTIsIDU2LCAxNjYsIDAuMjUpJztcclxuICAgICAgICAgICAgICAgIGNvbnRleHQuZmlsbFN0eWxlID0gJ3JnYmEoMTIsIDU2LCAxNjYsIDAuMjUpJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb250ZXh0LmFyYyhkb3QueCArIDExMCwgZG90LnkgKyAxMTAsIDEsIDAsIDIgKiBNYXRoLlBJKTtcclxuICAgICAgICAgICAgY29udGV4dC5zdHJva2UoKTtcclxuICAgICAgICAgICAgY29udGV4dC5maWxsKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIERvdHNFeGVyY2lzZS5wcm90b3R5cGUuc2V0dXBDYW52YXMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGRwciA9IHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvO1xyXG4gICAgICAgIHZhciByZWN0ID0gdGhpcy5jYW52YXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAgICAgdGhpcy5jYW52YXMud2lkdGggPSByZWN0LndpZHRoICogZHByO1xyXG4gICAgICAgIHRoaXMuY2FudmFzLmhlaWdodCA9IHJlY3QuaGVpZ2h0ICogZHByO1xyXG4gICAgICAgIHZhciBjdHggPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgICAgIGN0eC5zY2FsZShkcHIsIGRwcik7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIERvdHNFeGVyY2lzZTtcclxufSgpKTtcclxuZXhwb3J0IHsgRG90c0V4ZXJjaXNlIH07XHJcbiIsImltcG9ydCB7IERvdHNFeGVyY2lzZSB9IGZyb20gXCIuL0V4ZXJjaXNlL0RvdHNFeGVyY2lzZVwiO1xyXG5mdW5jdGlvbiBkaXN0YW5jZShkb3QpIHtcclxuICAgIHJldHVybiBNYXRoLnNxcnQoZG90LnggKiBkb3QueCArIGRvdC55ICogZG90LnkpO1xyXG59XHJcbnZhciBleGVyY2lzZSA9IG5ldyBEb3RzRXhlcmNpc2UoMTAwMDAsIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2NhbnZhcycpKTtcclxudmFyIGluc2lkZSA9IDA7XHJcbnZhciBvdXRzaWRlID0gMDtcclxuZm9yICh2YXIgX2kgPSAwLCBfYSA9IGV4ZXJjaXNlLmRvdHM7IF9pIDwgX2EubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICB2YXIgZG90ID0gX2FbX2ldO1xyXG4gICAgZGlzdGFuY2UoZG90KSA8PSAxMDBcclxuICAgICAgICA/IGluc2lkZSsrXHJcbiAgICAgICAgOiBvdXRzaWRlKys7XHJcbn1cclxuY29uc29sZS5pbmZvKHtcclxuICAgIGluc2lkZTogaW5zaWRlLFxyXG4gICAgb3V0c2lkZTogb3V0c2lkZSxcclxuICAgIHJhdGlvOiBpbnNpZGUgLyBleGVyY2lzZS50b3RhbERvdHMsXHJcbiAgICBmb3VyUmF0aW86IDQgKiAoaW5zaWRlIC8gZXhlcmNpc2UudG90YWxEb3RzKSxcclxuICAgIHBpOiBNYXRoLlBJXHJcbn0pO1xyXG5jb25zb2xlLmluZm8oJ3JlbG9hZCcpO1xyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHRpZihfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdKSB7XG5cdFx0cmV0dXJuIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0uZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGVcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC50c1wiKTtcbi8vIFRoaXMgZW50cnkgbW9kdWxlIHVzZWQgJ2V4cG9ydHMnIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbiJdLCJzb3VyY2VSb290IjoiIn0=