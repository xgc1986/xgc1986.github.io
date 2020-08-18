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
        context.moveTo(10, 110);
        context.lineTo(210, 110);
        context.moveTo(110, 10);
        context.lineTo(110, 210);
        context.stroke();
        context.beginPath();
        context.moveTo(210, 110);
        context.arc(110, 110, 100, 0, 2 * Math.PI);
        context.stroke();
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
var exercise = new _Exercise_DotsExercise__WEBPACK_IMPORTED_MODULE_0__.DotsExercise(1000, document.querySelector('canvas'));
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
console.info('done!');


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90eXBlc2NyaXB0LWJvaWxlcnBsYXRlLy4vc3JjL0V4ZXJjaXNlL0RvdHNFeGVyY2lzZS50cyIsIndlYnBhY2s6Ly90eXBlc2NyaXB0LWJvaWxlcnBsYXRlLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovL3R5cGVzY3JpcHQtYm9pbGVycGxhdGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdC1ib2lsZXJwbGF0ZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdC1ib2lsZXJwbGF0ZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3R5cGVzY3JpcHQtYm9pbGVycGxhdGUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90eXBlc2NyaXB0LWJvaWxlcnBsYXRlL3dlYnBhY2svc3RhcnR1cCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLG9CQUFvQjtBQUMzQztBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsZ0JBQWdCO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDdUI7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxRCtCO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixnRUFBWTtBQUMvQjtBQUNBO0FBQ0Esb0NBQW9DLGdCQUFnQjtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOzs7Ozs7O1VDcEJBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3JCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsc0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7VUNOQTtVQUNBO1VBQ0E7VUFDQSIsImZpbGUiOiJkb3RzLmRldi5qcyIsInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGRpc3RhbmNlKGRvdCkge1xyXG4gICAgcmV0dXJuIE1hdGguc3FydChkb3QueCAqIGRvdC54ICsgZG90LnkgKiBkb3QueSk7XHJcbn1cclxudmFyIERvdHNFeGVyY2lzZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIERvdHNFeGVyY2lzZSh0b3RhbERvdHMsIGNhbnZhcykge1xyXG4gICAgICAgIHRoaXMudG90YWxEb3RzID0gdG90YWxEb3RzO1xyXG4gICAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xyXG4gICAgICAgIHRoaXMuZG90cyA9IFtdO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy50b3RhbERvdHM7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLmRvdHMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICB4OiAoTWF0aC5yYW5kb20oKSAqIDIwMCB8IDApIC0gMTAwLFxyXG4gICAgICAgICAgICAgICAgeTogKE1hdGgucmFuZG9tKCkgKiAyMDAgfCAwKSAtIDEwMFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zZXR1cENhbnZhcygpO1xyXG4gICAgICAgIHRoaXMuZHJhdygpO1xyXG4gICAgfVxyXG4gICAgRG90c0V4ZXJjaXNlLnByb3RvdHlwZS5kcmF3ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBjb250ZXh0ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgICAgICBjb250ZXh0LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgIGNvbnRleHQubW92ZVRvKDEwLCAxMTApO1xyXG4gICAgICAgIGNvbnRleHQubGluZVRvKDIxMCwgMTEwKTtcclxuICAgICAgICBjb250ZXh0Lm1vdmVUbygxMTAsIDEwKTtcclxuICAgICAgICBjb250ZXh0LmxpbmVUbygxMTAsIDIxMCk7XHJcbiAgICAgICAgY29udGV4dC5zdHJva2UoKTtcclxuICAgICAgICBjb250ZXh0LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgIGNvbnRleHQubW92ZVRvKDIxMCwgMTEwKTtcclxuICAgICAgICBjb250ZXh0LmFyYygxMTAsIDExMCwgMTAwLCAwLCAyICogTWF0aC5QSSk7XHJcbiAgICAgICAgY29udGV4dC5zdHJva2UoKTtcclxuICAgICAgICBjb250ZXh0LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgIGNvbnRleHQucmVjdCgxMCwgMTAsIDIwMCwgMjAwKTtcclxuICAgICAgICBjb250ZXh0LnN0cm9rZSgpO1xyXG4gICAgICAgIGZvciAodmFyIF9pID0gMCwgX2EgPSB0aGlzLmRvdHM7IF9pIDwgX2EubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgICAgIHZhciBkb3QgPSBfYVtfaV07XHJcbiAgICAgICAgICAgIGNvbnRleHQuYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgICAgIGlmIChkaXN0YW5jZShkb3QpID4gMTAwKSB7XHJcbiAgICAgICAgICAgICAgICBjb250ZXh0LnN0cm9rZVN0eWxlID0gJ3JnYmEoMTk0LCAyNCwgNywgMC4yNSknO1xyXG4gICAgICAgICAgICAgICAgY29udGV4dC5maWxsU3R5bGUgPSAncmdiYSgxOTQsIDI0LCA3LCAwLjI1KSc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb250ZXh0LnN0cm9rZVN0eWxlID0gJ3JnYmEoMTIsIDU2LCAxNjYsIDAuMjUpJztcclxuICAgICAgICAgICAgICAgIGNvbnRleHQuZmlsbFN0eWxlID0gJ3JnYmEoMTIsIDU2LCAxNjYsIDAuMjUpJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb250ZXh0LmFyYyhkb3QueCArIDExMCwgZG90LnkgKyAxMTAsIDEsIDAsIDIgKiBNYXRoLlBJKTtcclxuICAgICAgICAgICAgY29udGV4dC5zdHJva2UoKTtcclxuICAgICAgICAgICAgY29udGV4dC5maWxsKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIERvdHNFeGVyY2lzZS5wcm90b3R5cGUuc2V0dXBDYW52YXMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGRwciA9IHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvO1xyXG4gICAgICAgIHZhciByZWN0ID0gdGhpcy5jYW52YXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAgICAgdGhpcy5jYW52YXMud2lkdGggPSByZWN0LndpZHRoICogZHByO1xyXG4gICAgICAgIHRoaXMuY2FudmFzLmhlaWdodCA9IHJlY3QuaGVpZ2h0ICogZHByO1xyXG4gICAgICAgIHZhciBjdHggPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgICAgIGN0eC5zY2FsZShkcHIsIGRwcik7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIERvdHNFeGVyY2lzZTtcclxufSgpKTtcclxuZXhwb3J0IHsgRG90c0V4ZXJjaXNlIH07XHJcbiIsImltcG9ydCB7IERvdHNFeGVyY2lzZSB9IGZyb20gXCIuL0V4ZXJjaXNlL0RvdHNFeGVyY2lzZVwiO1xyXG5mdW5jdGlvbiBkaXN0YW5jZShkb3QpIHtcclxuICAgIHJldHVybiBNYXRoLnNxcnQoZG90LnggKiBkb3QueCArIGRvdC55ICogZG90LnkpO1xyXG59XHJcbnZhciBleGVyY2lzZSA9IG5ldyBEb3RzRXhlcmNpc2UoMTAwMCwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignY2FudmFzJykpO1xyXG52YXIgaW5zaWRlID0gMDtcclxudmFyIG91dHNpZGUgPSAwO1xyXG5mb3IgKHZhciBfaSA9IDAsIF9hID0gZXhlcmNpc2UuZG90czsgX2kgPCBfYS5sZW5ndGg7IF9pKyspIHtcclxuICAgIHZhciBkb3QgPSBfYVtfaV07XHJcbiAgICBkaXN0YW5jZShkb3QpIDw9IDEwMFxyXG4gICAgICAgID8gaW5zaWRlKytcclxuICAgICAgICA6IG91dHNpZGUrKztcclxufVxyXG5jb25zb2xlLmluZm8oe1xyXG4gICAgaW5zaWRlOiBpbnNpZGUsXHJcbiAgICBvdXRzaWRlOiBvdXRzaWRlLFxyXG4gICAgcmF0aW86IGluc2lkZSAvIGV4ZXJjaXNlLnRvdGFsRG90cyxcclxuICAgIGZvdXJSYXRpbzogNCAqIChpbnNpZGUgLyBleGVyY2lzZS50b3RhbERvdHMpLFxyXG4gICAgcGk6IE1hdGguUElcclxufSk7XHJcbmNvbnNvbGUuaW5mbygnZG9uZSEnKTtcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0aWYoX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSkge1xuXHRcdHJldHVybiBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlXG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXgudHNcIik7XG4vLyBUaGlzIGVudHJ5IG1vZHVsZSB1c2VkICdleHBvcnRzJyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG4iXSwic291cmNlUm9vdCI6IiJ9